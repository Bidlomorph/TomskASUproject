// Взаимодействие с модальным окном
export default {
    state: {
        modalShow: false,
        modalOptions: []
    },
    mutations: {
        // Открытие модального окна по условию
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
        // Закрытие модального окна
        closeModal(state) {
            state.modalShow = false
            state.modalOptions = []
        }
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