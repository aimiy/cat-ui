<template>
  <div class="radio">
    <cat-radio v-model="radio" label="1">dvdvf</cat-radio>
    <cat-radio v-model="radio" label="2">备选项</cat-radio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1"
    };
  }
};
</script>

<style>
</style>