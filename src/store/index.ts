import { createStore, MutationTree, ActionContext, ActionTree, GetterTree, Store as VuexStore, CommitOptions, DispatchOptions, createLogger } from 'vuex'
import axios from 'axios'

export type State = {
  name: string;
  email: string;
  jwt: string;
}
const state: State = {
  name: "",
  email: "",
  jwt: ""
}

export enum MutationTypes {
  LOGIN = "LOGIN"
}
export enum ActionTypes {
  LOGIN = "LOGIN"
}

export type Mutations<S = State> = {
  [MutationTypes.LOGIN](state: S, payload: string): void;
}

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.LOGIN](state: State, payload: string) {
    state.jwt = payload
  }
}

type AugmentedActionContext = {
  commit<k extends keyof Mutations>(
    key: k,
    payload: Parameters<Mutations[k]>[1]
  ): ReturnType<Mutations[k]>;
} & Omit<ActionContext<State, State>, "commit">

export interface Actions {
  [ActionTypes.LOGIN](
    { commit }: AugmentedActionContext,
    payload: {
      email: string;
      password: string;
    }
  ): void;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.LOGIN]({ commit },data) {
    axios.post("authen/jwt/create", data).then((res) => {
      commit(MutationTypes.LOGIN,res.data.access)
    });
  }
}
export type Getters = {
  getToken(state: State): string;
}

export const getters: GetterTree<State, State> & Getters = {
  getToken: state => {
    return state.jwt
  }
}

export type Store = Omit<
  VuexStore<State>,
  "commit" | "getters" | "dispatch"
> & {
  commit<k extends keyof Mutations, P extends Parameters<Mutations[k]>[1]>(
    key: k,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[k]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
} & {
  dipatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
}

export const store = createStore({
  state,
  mutations,
  actions,
  getters,
  plugins: [createLogger()]
})

export function useStore() {
  return store;
}




