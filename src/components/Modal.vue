<template>
  <transition name="fade">
    <div class="modal-container" @click="closeModal()">
      <div class="modal" @click="stopPropagation()">
        <div class="modal-header">
          <p>{{ modalName }}</p>
          <div class="modal-header-close">
            <a @click="closeModal()"></a>
          </div>
        </div>
        <div class="modal-form">
          <input type="text" placeholder="Введите имя сотрудника"
                 v-model.trim="inputFirstName" maxlength="12">
          <input type="text" placeholder="Введите фамилию сотрудника"
                 v-model.trim="inputLastName" maxlength="12">
        </div>
        <div class="modal-savebtn">
          <button @click="personManipulation()">Сохранить</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
    export default {
        name: "Modal",
        data() {
            return {
                // Значение первого поля ввода
                inputFirstName: null,
                // Значение второго поля ввода
                inputLastName: null,
            }
        },
        methods: {
            closeModal() {
                this.$store.commit("closeModal")
            },
            personManipulation() {
                if (this.inputFirstName && this.inputLastName) {
                    let firstName = this.inputFirstName
                    let lastName = this.inputLastName
                    this.$store.dispatch("personManipulation", {firstName, lastName})
                }
                else {
                    this.$store.dispatch("setNtf", "ERRORNullText")
                }
            },
            stopPropagation() {
                event.stopPropagation()
            }
        },
        computed: {
            modalName() {
                return this.$store.getters.modalOptions.name
            }
        }
    }
</script>

<style scoped lang="scss">
  @import "../assets/styles.scss";
  .modal-container {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    top: 0; left: 0; bottom: 0; right: 0;
  }
  // Модальное окно
  .modal {
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 200px;
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    border: 1px solid #a9b0b8;
    background-color: white;
    border-radius: 5px;
    &-header {
      display: flex;
      justify-content: space-between;
      height: 40px;
      background-color: $c-white;
      color: white;
      align-items: center;
      padding: 10px;
      p {
        width: 70%;
        font-size: 20px;
      }
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 10px; top: 15px;
        width: 32px;
        height: 32px;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
          transform: rotate(90deg);
        }
        &:before, &:after {
          position: absolute;
          left: 15px;
          top: 0;
          content: ' ';
          height: 32px;
          width: 2px;
          background-color: white;
        }
        &:before {
          transform: rotate(45deg);
        }
        &:after {
          transform: rotate(-45deg);
        }
      }
      &-close {
        box-sizing: border-box;
        width: 100%;
      }
    }
    &-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      input {
        width: 80%;
        height: 20px;
        outline: none;
        margin: 10px;
      }
      ::-ms-clear {
        display: none;
      }
    }
    &-savebtn {
      display: flex;
      justify-content: center;
      margin: 5px;
      button {
        width: auto;
        height: auto;
        font-size: 20px;
        padding: 5px;
      }
    }
  }
  // Адаптивная верстка 790px
  @media (max-width: 790px) {
    // Модальное окно
    .modal {
      width: 50%;
    }
  }
  // Адаптивная верстка 510px
  @media (max-width: 640px) {
    // Модальное окно
    .modal {
      width: 80%;
    }
  }
</style>