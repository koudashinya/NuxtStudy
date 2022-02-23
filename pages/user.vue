<template>
  <div class="userPage">
    <h2>登録フォーム</h2>
    <label>
    <span>
      お名前:
    </span>
    <input type="text" v-model="user.name">
  </label>
  <label>
    <span>
      email:
    </span>
    <input type="text"  v-model="user.email" >
  </label>
  <br>
  <select name="pref_id" v-model="user.prefecture">
    <option value=""><div id="user.prefecture" />選択してください</option>
    <option value="北海道">北海道</option>
    <option value="青森県">青森県</option>
    <option value="岩手県">岩手県</option>
    <option value="宮城県">宮城県</option>
    <option value="秋田県">秋田県</option>
    <option value="山形県">山形県</option>
    <option value="福島県">福島県</option>
    <option value="茨城県">茨城県</option>
    <option value="栃木県">栃木県</option>
    <option value="群馬県">群馬県</option>
    <option value="埼玉県">埼玉県</option>
    <option value="千葉県">千葉県</option>
    <option value="東京都">東京都</option>
    <option value="神奈川県">神奈川県</option>
    <option value="新潟県">新潟県</option>
    <option value="富山県">富山県</option>
    <option value="石川県">石川県</option>
    <option value="福井県">福井県</option>
    <option value="山梨県">山梨県</option>
    <option value="長野県">長野県</option>
    <option value="岐阜県">岐阜県</option>
    <option value="静岡県">静岡県</option>
    <option value="愛知県">愛知県</option>
    <option value="三重県">三重県</option>
    <option value="滋賀県">滋賀県</option>
    <option value="京都府">京都府</option>
    <option value="大阪府">大阪府</option>
    <option value="兵庫県">兵庫県</option>
    <option value="奈良県">奈良県</option>
    <option value="和歌山県">和歌山県</option>
    <option value="鳥取県">鳥取県</option>
    <option value="島根県">島根県</option>
    <option value="岡山県">岡山県</option>
    <option value="広島県">広島県</option>
    <option value="山口県">山口県</option>
    <option value="徳島県">徳島県</option>
    <option value="香川県">香川県</option>
    <option value="愛媛県">愛媛県</option>
    <option value="高知県">高知県</option>
    <option value="福岡県">福岡県</option>
    <option value="佐賀県">佐賀県</option>
    <option value="長崎県">長崎県</option>
    <option value="熊本県">熊本県</option>
    <option value="大分県">大分県</option>
    <option value="宮崎県">宮崎県</option>
    <option value="鹿児島県">鹿児島県</option>
    <option value="沖縄県">沖縄県</option>
  </select>
  <div class="adddbUser">
    <button type="button" @click="submit">保存</button>
  </div>
  <br>
  <div class="getdataPage">
    <button @click="getData">取得データを見る</button>
  <br>
  <div class="userHome">
    <button><nuxt-link to="/">HOMEへ戻る</nuxt-link></button>
  </div>
  <div class="getUser">
  </div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        name: "",
        email: "",
        prefecture: "",
      },
  }
},
  methods: {
    submit() {
      const dbSet = this.$firestore.collection('users')
      dbSet.doc('ag53CThTWnsHvabWGbEK')
      .set({
        name: this.user.name,
        email: this.user.email,
        prefecture: this.user.prefecture
      })
      .then(ref => {
        //console.log('Add ID: ', ref.id);
        this.user.name = "",
        this.user.email = "",
        this.user.prefecture = ""
      })
    },
    // データ取得
    // dataの中に入れてバインドさせる
    getData() {
      const dbGet = this.$firestore.collection('users')
      dbGet.doc('ag53CThTWnsHvabWGbEK')
      .get().then((doc) => {
        this.user.name = doc.data().name
        this.user.email = doc.data().email
        this.user.prefecture = doc.data().prefecture
      })
    }
  }
}
</script>

<style scoped>
.userHome,
.adddbUser {
  border: solid;
  border-radius: 8px;
  display:inline-block;
  padding: 2px;
}
.userHome {
  margin-top: 20px;
}
</style>
