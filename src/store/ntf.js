export default {
    actions: {
        // Установка значения всплывающего окна
        setNtf({dispatch}, ntfName) {
            let ntfOptions = {}
            if (ntfName === 'DELETE'){
                ntfOptions = {
                    ntfColor: '#8BC34A',
                    ntfMessage: 'Сотрудник удален'
                }
            }
            else if (ntfName === 'PUT') {
                ntfOptions = {
                    ntfColor: '#8BC34A',
                    ntfMessage: 'Сотрудник отредактирован'
                }
            }
            else if (ntfName === 'POST') {
                ntfOptions = {
                    ntfColor: '#8BC34A',
                    ntfMessage: 'Сотрудник добавлен'
                }
            }
            else if (ntfName === 'ERRORNullText'){
                ntfOptions = {
                    ntfColor: '#d93737',
                    ntfMessage: 'Заполните все поля'
                }
            }
            else {
                ntfOptions = {
                    ntfColor: '#d93737',
                    ntfMessage: 'ERROR'
                }
            }
            dispatch('showNtf', ntfOptions)
        },
        // Показ всплывающего окна
        // eslint-disable-next-line no-unused-vars
        async showNtf({dispatch},ntfOptions) {
            // Для remove() в IE
            Node.prototype.remove = function (){this.parentElement.removeChild(this);}
            let counter = 0
            counter++
            document.getElementById("ntf").innerHTML +=
                "<p id='" + `ntfIndex${counter}` + "'" +
                "style='padding: 15px; min-width: 150px;" +
                "margin-bottom: 10px;" +
                "background-color:" + `${ntfOptions.ntfColor}` +";" +
                "box-shadow: 0 0 10px rgba(0,0,0,0.3);'>"
                +ntfOptions.ntfMessage+"</p>"
            await setTimeout(() => {
                document.getElementById(`ntfIndex${counter}`).style.transition = 'opacity .2s'
                document.getElementById(`ntfIndex${counter}`).style.opacity = '0'
            },2500)
            await setTimeout(() => {
                document.getElementById(`ntfIndex${counter}`).remove()
            },2600)
        },
    },
}