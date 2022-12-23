import { createStore } from 'vuex';

const state = {
  personalInfo: {
    name: '',
    emailAddress: '',
    phoneNumber: '',
  },
  planInfo: {
    planType: 'Arcade',
    planBillingPeriod: 'Monthly',
    planPrice: 9,
  },
  addOnsInfo: [],
  isOnlineServiceChecked: false,
  isLargeStorageChecked: false,
  isCustomizableProfileChecked: false,
};

const mutations = {
  UPDATE_PERSONAL_INFO(state, payload) {
    state.personalInfo = payload;
  },
  UPDATE_PLAN_INFO(state, payload) {
    state.planInfo = payload;
  },
  UPDATE_ADD_ONS_INFO(state, payload) {
    state.addOnsInfo = payload;
  },
  UPDATE_IS_ONLINE_SERVICE_CHECKED(state, payload) {
    state.isOnlineServiceChecked = payload;
  },
  UPDATE_IS_LARGE_STORAGE_CHECKED(state, payload) {
    state.isLargeStorageChecked = payload;
  },
  UPDATE_IS_CUSTOMIZABLE_PROFILE_CHECKED(state, payload) {
    state.isCustomizableProfileChecked = payload;
  }
}

const actions = {
  setPersonalInfoAction({commit}, payload) {
    commit('UPDATE_PERSONAL_INFO', payload);
  },
  setPlanInfo({commit}, payload) {
    commit('UPDATE_PLAN_INFO', payload);
  },
  setAddOnsInfo({commit}, payload) {
    commit('UPDATE_ADD_ONS_INFO', payload);
  },
  setIsOnlineServiceChecked({commit}, payload) {
    commit('UPDATE_IS_ONLINE_SERVICE_CHECKED', payload);
  },
  setIsLargeStorageChecked({commit}, payload) {
    commit('UPDATE_IS_LARGE_STORAGE_CHECKED', payload);
  },
  setIsCustomizableProfileChecked({commit}, payload) {
    commit('UPDATE_IS_CUSTOMIZABLE_PROFILE_CHECKED', payload);
  },
}

const store = createStore({
  state,
  mutations,
  actions,
});

export default store;