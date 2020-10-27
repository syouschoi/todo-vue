<template>
  <v-app>
    <v-main>
      <v-container>
        <TodoInput>
          <strong slot="header">ㅋㅋㅋㅋㅋㅋㅋㅋㅋ</strong>
          <span>테스트</span>
        </TodoInput>
        <TodoList :testProp="test" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
const TodoInput = () => import('@/components/TodoInput');
const TodoList = () => import('@/components/TodoList');
export default {
  name: 'App',
  data: () => ({
    test: 'tttest'
  }),
  components: {
    TodoInput,
    TodoList
  }
};
</script>
