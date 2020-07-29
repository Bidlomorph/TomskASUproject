// Взаимодействие с сотрудниками
import axios from "axios";
export default {
    state: {
        employees: [],
    },
    mutations: {
        setEmployees(state, employees) {
            state.employees = employees
        }
    },
    actions: {
        // Получение списка сотрудников
        async getEmployee({commit}) {
            let employees = []
            const url = "/api/v1/person"
            let requestParams = {
                url: url,
                method: "GET",
            };
            await axios(requestParams).then(resp => {
                    employees = resp.data
                },
                err => {
                    console.log(err)
                }
            )
            commit('setEmployees', employees)
        },
        // Удаление сотрудника
        async deletePerson({commit, dispatch}, payload) {
            let employees = this.getters.employees
            const url = `/person/${payload.id}`
            let requestParams = {
                url: url,
                method: "DELETE",
            };
            await axios(requestParams).then(() => {
                    employees.splice(payload.itemId, 1)
                    dispatch("setNtf", "DELETE")
                },
                err => {
                    dispatch("setNtf", "ERROR")
                    console.log(err)
                }
            )
            commit('setEmployees', employees)
        },
        // Действие по условию, добавить или изменить
        async personManipulation({commit, dispatch}, payload) {
            let employees = this.getters.employees
            let options = this.getters.modalOptions
            let url = ''
            // Если id имеется => редактирование, иначе => создание
            options.id
                ? url = `/person/${options.id}`
                : url = '/person'
            let requestParams = {
                url: url,
                method: options.action,
                data: {
                    id: null,
                    firstName: payload.firstName,
                    lastName: payload.lastName
                }
            }
            await axios(requestParams).then(
                resp => {
                    if (options.action === 'POST'){
                        employees.push(resp.data)
                        dispatch("setNtf", "POST")
                    }
                    else if (options.action === 'PUT'){
                        employees.splice(options.itemId, 1,resp.data)
                        dispatch("setNtf", "PUT")
                    }
                    commit("closeModal")
                },
                err => {
                    dispatch("setNtf", "ERROR")
                    console.log(err)
                })
        },
    },
    getters: {
        employees(state) {
            return state.employees
        }
    }
}