import {
  publishState as state,
  actions,
  mutations,
  PublishState,
} from '@/pages/Publish/store/store';
import { Module } from 'vuex';

export const store: Module<PublishState, any> = {
  namespaced: true,
  state,
  getters: {},
  mutations,
  actions,
};

export { PublishState } from '@/pages/Publish/store/store';
