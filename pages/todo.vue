<template>
<div class="pageTodo">
  <!--課題1-->
  <!--v-modelでdataと連動させる-->
  <h2>TODOLIST</h2>
  <input type="text" v-model="newItem" >
  <button @click="addItem">ADD</button>
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <span v-bind:class="{activ: todo.isDone}">{{ todo.item }}</span>
      <button @click="deleteItem(index)">削除</button>
      <button @click="addLine(index)">完了</button>
    </li>
  </ul>
  <nuxt-link to="/">HOMEへ戻る</nuxt-link>
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
  // -------------課題1------------------------------
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
#app ul{
  list-style:none;
}
.activ {
  text-decoration: line-through;
}
</style>
