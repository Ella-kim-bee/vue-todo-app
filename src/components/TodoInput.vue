<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" @keyup.enter="addList">
    <span class="addContainer" @click="addList">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>
    <modal v-if="showModal" @close="showModal = false" :show="showModal">
      <h3 slot="header">경고</h3>
      <span slot="body">내용이 없습니다.</span>
      <span slot="footer" @click="showModal = false">
        할 일을 입력하세요.
        <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
      </span>
    </modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
  props: ['propsdata'],
  data() {
    return {
      newTodoItem: '',
      showModal: false,
    };
  },
  methods: {
    addList() {
      if (this.newTodoItem !== '') {
        const value = this.newTodoItem && this.newTodoItem.trim();
        this.$emit('addList', value);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    },
    selectedState(selected) {
      this.selected = selected;
    },
  },
  components: {
    Modal,
  },
};
</script>

<style>
  input:focus {
    outline: none;
  }
  .inputBox {
    background: white;
    height: 50px;
    width: 30rem;
    margin: 0 auto;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478fb, #8763fb);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color: white;
    vertical-align: middle;
  }
</style>
