<template>
  <section>
    <h4>Doing</h4>
    <transition-group name="list" tag="ul">
      <li v-for="(doingItem, index) in propsdata" :key="doingItem" class="shadow">
        <i class="checkBtn fas fa-check" aria-hidden="true"></i>
        {{ doingItem }}
        <span class="removeBtn" type="button" @click="removeDoing(index)">
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
    removeDoing(index) {
      this.$emit('removeDoing', index);
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
