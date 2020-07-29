<template>
  <div id="app">
    <EmployeeList></EmployeeList>
    <Modal v-if="modalShow"></Modal>
    <Ntf ></Ntf>
  </div>
</template>

<script>
import EmployeeList from './components/EmployeeList.vue'
import Modal from './components/Modal.vue'
import Ntf from './components/Ntf.vue'
export default {
    name: 'App',
    components: {
        EmployeeList,
        Modal,
        Ntf
    },
    computed: {
        modalShow() {
            return this.$store.getters.modalShow
        },
    },
}
</script>

<style lang="scss">
  @import "./assets/styles.scss";
</style>
