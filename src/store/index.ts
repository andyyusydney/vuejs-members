import Vue from "vue";
import Vuex, { ActionContext } from "vuex";
import MembersService, { Member } from "@/services/members";
import { StoreState } from "./types";

Vue.use(Vuex);

export default new Vuex.Store<StoreState>({
  state: {
    title: "Welcome to the Front End Developer Test",
    members: [],
  },
  getters: {},
  mutations: {
    setMembers: (state, members: Member[]) => {
      state.members = members;
    },
  },
  actions: {
    async loadMembers({ commit }: ActionContext<StoreState, StoreState>) {
      try {
        const members: Member[] = await MembersService.loadMembers();
        commit("setMembers", members);
      } catch (error) {
        console.error("Error loading members", error);
        throw error;
      }
    },
  },
  modules: {},
});
