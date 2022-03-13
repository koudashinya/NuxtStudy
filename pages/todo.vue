<template>
  <div class="pageTodo">
    <h2>TODOLIST</h2>
    <div class="wrapper">
      <input type="text" v-model="newItem" class="todo-box">
      <button @click="addItem" class="todo-boxBtn">追加</button>
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          <span v-bind:class="{activ: todo.isDone}" class="itemBox">{{ todo.item }}</span>
          <button @click="deleteItem(index)" class="deleteBtn">削除</button>
          <button @click="addLine(index)" class="completionBtn">完了</button>
        </li>
      </ul>
      <div class="homeBtn">
        <nuxt-link to="/">HOMEへ戻る</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todos: [],
      // v-modelから渡ってくる値
      newItem: ""
    }
},
  methods: {
    addItem: function(event) {
      // オブジェクト作成
      const todo = {
        item: this.newItem,
        isDone: false
      }
      // 入力値をオブジェクトごと配列に入れる
      this.todos.push(todo)
      // textboxリセット処理
      this.newItem = ""
    },
    // 削除処理
    deleteItem: function(index) {
      this.todos.splice(index, 1)
    },
    // 配列index番目の条件を反転する
    addLine(index) {
      this.$set(this.todos[index], 'isDone', !this.todos[index].isDone)
    },
  }
}
</script>

<style scoped>
.activ {
  text-decoration: line-through;
}
.todo-box {
  width: 270px;
  border: solid 1px black;
  margin: 20px 10px 20px 0px;
  border-radius: 5px;
}
.itemBox {
  width: 270px;
}
.todo-boxBtn {
  width: 100px;
  height: 30px;
  text-align: center;
  background-color: PaleTurquoise;
  text-decoration: none;
  color: black;
  box-shadow: 2px 2px gray;
  border-radius: 5px;
}

.deleteBtn,
.completionBtn {
  width: 50px;
  height: 30px;
  margin-top: 20px;
  text-align: center;
  background-color: rgb(247, 159, 108);
  text-decoration: none;
  color: black;
  box-shadow: 2px 2px gray;
  border-radius: 5px;
}
.homeBtn {
  margin-top: 100px;
}

.wrapper {
  width: 400px;
  margin-left: auto;
  margin-right: auto;
}
.homeBtn {
  width: 100px;
  margin-left: auto;
  margin-right: auto;
}
</style>
