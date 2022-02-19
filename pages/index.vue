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
  <br>
  <br>
  <!-- 課題2 -->
  <h2>登録フォーム</h2>
  <select name="pref_id">
    <option value="">選択してください</option>
    <option value="1">北海道</option>
    <option value="2">青森県</option>
    <option value="3">岩手県</option>
    <option value="4">宮城県</option>
    <option value="5">秋田県</option>
    <option value="6">山形県</option>
    <option value="7">福島県</option>
    <option value="8">茨城県</option>
    <option value="9">栃木県</option>
    <option value="10">群馬県</option>
    <option value="11">埼玉県</option>
    <option value="12">千葉県</option>
    <option value="13">東京都</option>
    <option value="14">神奈川県</option>
    <option value="15">新潟県</option>
    <option value="16">富山県</option>
    <option value="17">石川県</option>
    <option value="18">福井県</option>
    <option value="19">山梨県</option>
    <option value="20">長野県</option>
    <option value="21">岐阜県</option>
    <option value="22">静岡県</option>
    <option value="23">愛知県</option>
    <option value="24">三重県</option>
    <option value="25">滋賀県</option>
    <option value="26">京都府</option>
    <option value="27">大阪府</option>
    <option value="28">兵庫県</option>
    <option value="29">奈良県</option>
    <option value="30">和歌山県</option>
    <option value="31">鳥取県</option>
    <option value="32">島根県</option>
    <option value="33">岡山県</option>
    <option value="34">広島県</option>
    <option value="35">山口県</option>
    <option value="36">徳島県</option>
    <option value="37">香川県</option>
    <option value="38">愛媛県</option>
    <option value="39">高知県</option>
    <option value="40">福岡県</option>
    <option value="41">佐賀県</option>
    <option value="42">長崎県</option>
    <option value="43">熊本県</option>
    <option value="44">大分県</option>
    <option value="45">宮崎県</option>
    <option value="46">鹿児島県</option>
    <option value="47">沖縄県</option>
    </select>
    <button v-on:click="clickPrefectures">保存</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      user: {
        name: "",
        email: "",
        prefectures: ""
      },
      todos: [],
      // v-modelから渡ってくる値
      newItem: ""
  }
},
  methods: {
    submit() {
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
      // 都道府県追加
      clickPrefectures: function() {
        const adddb = this.$firestore.collection('users').doc('2IE3BIvLjwVqnZoW7jBY')
        console.log(this.this.user.prefectures)
        adddb
          .set({
            prefectures: this.user.prefectures,
          })
          .then(ref => {
            console.log(ref.id)
          })
      }
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
