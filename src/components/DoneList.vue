<template>
  <section>
    <h4>Done</h4>
    <transition-group name="list" tag="ul">
      <li v-for="(doneItem, index) in propsdata" :key="doneItem" class="shadow">
        <i class="checkBtn fas fa-check" aria-hidden="true"></i>
        {{ doneItem }}
        <span class="removeBtn" type="button" @click="removeDone(index)">
        <i class="far fa-trash-alt" aria-hidden="true"></i>
        </span>
      </li>
    </transition-group>
  </section>
</template>

<script>
export default {
  props: ['propsdata'],
  methods: {
    removeDone(index) {
      this.$emit('removeDone', index);
    },
  },
};
</script>

<style scoped>
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    width: 28rem;
    margin: 0.5rem auto;
    height: 50px;
    line-height: 50px;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 7px;
  }
  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }
</style>
