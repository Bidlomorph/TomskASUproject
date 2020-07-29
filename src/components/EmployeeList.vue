<template>
  <div class="container">
    <div class="header">
      <p>Имя</p>
      <p>Фамилия</p>
      <p></p>
    </div>
    <div class="employees">
      <div class="employees-list" v-for="(person, itemId) in employees" :key="itemId">
        <p>{{ person.firstName }}</p>
        <p>{{ person.lastName }}</p>
        <div class="employees-list-btns">
          <button @click="openModal('PUT', person.id, itemId)">Редактировать</button>
          <button @click="deletePerson(person.id, itemId)">Удалить</button>
        </div>
      </div>
    </div>
    <div class="add-btn">
      <button @click="openModal('POST')">Добавить сотрудника</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "EmployeeList",
        methods: {
            // Удаление сотрудника
            deletePerson(id, itemId) {
                this.$store.dispatch("deletePerson", {id, itemId})
            },
            // Открытие модального окна по условию действия
            openModal(action, id, itemId) {
                let modalOptions = {action, id, itemId}
                this.$store.commit('openModal', modalOptions)
            },
        },
        computed: {
            // Получение сотрудников из store
            employees() {
                return this.$store.getters.employees
            }
        },
        mounted() {
            // Получение сотрудников по загрузке страницы
            this.$store.dispatch("getEmployee")
        }
    }
</script>

<style scoped lang="scss">
  @import "../assets/styles.scss";
  // Хедер
  .header {
    position: fixed;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $c-white;
    p {
      color: white;
      padding: 20px;
      width: 100%;
      font-size: 30px;
    }
  }
  // Список сотрудников
  .employees {
    padding-top: 60px;
    height: auto;
    max-height: 85vh;
    overflow-y: scroll;
    border-bottom: 1px solid #a9b0b8;
    &-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60px;
      border-bottom: 1px solid #a9b0b8;
      p {
        width: 100%;
        padding: 20px;
        font-size: 20px;
      }
      &-btns {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        padding: 0 20px 0 0;
        height: 100%;
        align-items: center;
        button {
          display: flex;
          align-items: center;
          width: auto;
          height: 50px;
          &:first-child {
            border-right: none;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
          &:last-child {
            border-left: none;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
        }
      }
    }
  }
  // Кнопка добавление сотрудников
  .add-btn {
    padding: 10px;
    height: auto;
    position: absolute;
    left: 0; bottom: 0; right: 0;
    button {
      width: auto;
      height: auto;
      font-size: 20px;
      padding: 10px;
    }
  }
  // Адаптивная верстка 790px
  @media (max-width: 790px) {
    // Список сотрудников
    .employees {
      max-height: 65vh;
    }
  }
  // Адаптивная верстка 510px
  @media (max-width: 640px) {
    // Хедер
    .header {
      height: 40px;
      p {
        font-size: 20px;
        padding: 10px;
      }
    }
    // Список сотрудников
    .employees {
      padding-top: 40px;
      max-height: 65vh;
      &-list {
        p {
          width: 100%;
          padding: 5px;
          font-size: 14px;
        }
        &-btns {
          flex-direction: column;
          padding: 0 0 0 0;
          button {
            justify-content: center;
            width: 100%;
            height: 50px;
            &:first-child {
              border: none;
              border-radius: 0;
            }
            &:last-child {
              border: none;
              border-radius: 0;
            }
          }
        }
      }
    }
  }
</style>