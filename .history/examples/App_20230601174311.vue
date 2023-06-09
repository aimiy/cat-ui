<template>
  <div id="app">
    <!-- <router-link to="/Button">Button</router-link> -->
    <!-- <router-link ></router-link> -->
    <!-- <Button/> -->
    <!-- <Toast/> -->
    <!-- <FoldList/> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  created(){
    debugger
    console.log(123123)
  }
}
</script>

<style>
#app {

}
</style>
