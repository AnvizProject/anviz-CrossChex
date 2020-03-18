const sidebar = {
  state: {
    isCollapse: false
  },
  mutations: {
    leftmenu(state) {
      // state.isCollapse = !flage
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
  }
}

export default sidebar
