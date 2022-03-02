<template>
<div class="button-wrapper">
  <button class="submit-button" @click="register()">{{registrationInput.RegistrationSaveButtonLabel}}</button>
</div>

</template>

<script>
import { mapState } from "vuex";
export default {
props:['registrationInput'],
      computed:{
        ...mapState({
      payload: (state) => state.registration.payload,
    })
  },
methods:{
    register(payload) {
     this.$store.dispatch('registration/register', payload)
    },
}
}
</script>

<style scoped lang="scss">
.button-wrapper{
    margin-top: 40px;
    text-align: left;
}
.submit-button{
height: 48px;
width: 198px;
margin-left: 83px;
border-radius: 0px;
background: #D2E143;
font-size: 13px;
font-style: normal;
font-weight: 500;
line-height: 18px;
letter-spacing: 0px;
text-align: center;
outline: none;
border: none;
}
</style>