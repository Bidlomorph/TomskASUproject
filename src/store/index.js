import Vue from 'vue'
import Vuex from 'vuex'
import employeesModule from './employees'
import modalsModule from './modals'
import ntfModule from './ntf'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        employeesModule,
        modalsModule,
        ntfModule
    }
})