<template>
  <v-row>
    <v-col>
      <v-list>
        <v-list-item v-for="(todo, index) in $store.state.todos" :key="index">
          <v-list-item-action>
            <v-checkbox
              :input-value="todo.completed"
              @click="changeCompleted(index)"
            ></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title :class="{ completed: todo.completed }">{{
              todo.txt
            }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon @click="deleteTodo(index)">
              <v-icon color="primary">mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'TodoList',
  data: () => ({}),
  props: {
    testProp: String
  },
  created() {
    console.log(this.testProp);
  },
  methods: {
    ...mapActions(['chgTodo', 'delTodo']),
    changeCompleted(idx) {
      this.chgTodo(idx);
    },
    deleteTodo(idx) {
      this.delTodo(idx);
    }
  }
};
</script>

<style scoped>
.completed {
  text-decoration-line: line-through;
}
</style>
