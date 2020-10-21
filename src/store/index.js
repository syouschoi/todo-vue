import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, txt: '빡공하기', completed: true },
      { id: 2, txt: '빡공하기2', completed: false }
    ]
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push(payload);
    },
    delTodo(state, payload) {
      state.todos.splice(state.todos.indexOf(payload), 1);
    },
    chgTodo(state, payload) {
      state.todos[payload].completed = !state.todos[payload].completed;
    }
  },
  actions: {
    addTodo(context, payload) {
      context.commit('addTodo', payload);
    },
    delTodo(context, payload) {
      context.commit('delTodo', payload);
    },
    chgTodo(context, payload) {
      context.commit('chgTodo', payload);
    }
  },
  modules: {}
});
