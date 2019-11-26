<template>
  <label class="cat-radio">
    <span class="cat-radio__input">
      <span class="cat-radio__inner"></span>
      <input type="radio" />
    </span>
    <span class="cat-radio__label" @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "cat-radio",
  props:{
      label:{}
  }
};
</script>

<style>
</style>