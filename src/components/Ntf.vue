<template>
  <transition name="fade">
    <div class="ntf" id="ntf"></div>
  </transition>
</template>

<script>
    export default {
        name: "Ntf",
    }
</script>

<style scoped lang="scss">
  @import "../assets/styles.scss";
  // Нотификации
  .ntf {
    position: absolute;
    top: 0; bottom: 0; right: 0;
    padding: 15px;
    width: auto;
    height: 45px;
    color: white;
  }

</style>