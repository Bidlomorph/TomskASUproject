export default {
    state: {
        modalShow: false,
        modalOptions: []
    },
    mutations: {
        openModal(state, modalOptions) {
            if (modalOptions.action === 'POST') {
                modalOptions.name = 'Создание сотрудника'
            }
            else if (modalOptions.action === 'PUT') {
                modalOptions.name = 'Редактирование сотрудника'
            }
            state.modalOptions = modalOptions
            state.modalShow = true
        },
        closeModal(state) {
            state.modalShow = false
            state.modalOptions = []
        }
    },
    actions: {

    },
    getters: {
        modalShow(state) {
            return state.modalShow
        },
        modalOptions(state) {
            return state.modalOptions
        }
    }
}