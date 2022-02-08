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
   <button
     type="button"
     @click="submit"
   >
     Submit
   </button>
   <br>

   <button
    type="button"
    @click="getData">
    getData
   </button>
   <div id="user.name" />
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
   }
 },
 methods: {
   submit () {
     let dbUsers = this.$firestore.collection('users')
     dbUsers
       .add({
         name: this.user.name,
         email: this.user.email,
       })
       .then(ref => {
         console.log('Add ID: ', ref.id)
       })
   },
   getData () {
     let docUsers = this.$firestore.collection('users').doc('OD7LcfncYmf2q68p5ANl')
     docUsers
      .get()
      .then(function(doc) {
        document.getElementById("user.name").innerHTML = (doc.data().name)
      })
   },
 },
}
</script>
