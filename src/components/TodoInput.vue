<template>
  <div>
    <slot name="header">
      <v-row>
        <v-col>
          <v-banner elevation="1">Test Header</v-banner>
        </v-col>
      </v-row>
    </slot>
    <slot>
      <v-row>
        <v-col>
          <v-banner elevation="1">Test Slot</v-banner>
        </v-col>
      </v-row>
    </slot>
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
  </div>
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
