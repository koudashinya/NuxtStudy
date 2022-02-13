<template>
 <div class="page">
   <label>
     <span>
       お名前:
     </span>
     <input
       type="text"
       v-model="user.name"
     >
   </label>
   <label>
     <span>
       email:
     </span>
     <input
       type="text"
       v-model="user.email"
     >
   </label>
   <button type="button" @click="submit">
     Submit
   </button>
   <br>
   <br>
   <!--課題1-->
   <!--v-modelでdataと連動させる-->
   <input type="text" v-model="listAdd">
   <button type="button" v-on:click="addTodo">追加ボタン</button>
   <ul>
     <li v-for="value in todos" :key="value.listId">
       {{value.name}}
     </li>
   </ul>
  </div>
</template>

<script>

export default {
 data () {
   return {
     user: {
       name: "",
       email: ""
     },
     addTodo:"",
     todos: [],
     num: 0,
     // v-modelから渡ってくる値
     listAdd: '',

   }
 },
 methods: {
   submit () {
     const dbUsers = this.$firestore.collection('users')
     dbUsers
       .add({
         name: this.user.name,
         email: this.user.email,
       })
       .then(ref => {
         console.log('Add ID: ', ref.id)
       })
   },
 },
 addTodo: function() {
   this.todos.push({listId: this.num, name : 'listAdd'});
 }
 
}
</script>
