<template>
  <v-row>
    <v-col>
      <v-text-field
        full-width
        v-model="txt"
        label="할 거 입력하셈"
        @keyup.enter="addItem"
      ></v-text-field>
      <v-btn small color="primary" depressed @click="addItem">추가</v-btn>
    </v-col>
  </v-row>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'TodoInput',
  data: () => ({
    txt: ''
  }),
  methods: {
    ...mapActions(['addTodo']),
    addItem() {
      this.addTodo({ id: Date.now(), txt: this.txt, completed: false });
      this.txt = '';
    }
  }
};
</script>
