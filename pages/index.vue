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
    getchData
   </button>
   <p>{{ dbData }}</p>
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
     dbData: "",
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
     let dbData = []
     this.dbData = dbData
     docUsers.get()
      .then(function(doc) {
        dbData.push(doc.data().name) // DBの中のdataのname
      })
   },
 },
}
</script>
