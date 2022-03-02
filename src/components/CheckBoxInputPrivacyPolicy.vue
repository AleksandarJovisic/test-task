<template>
<div v-if="registrationInput != undefined" class="checkbox-wrapper">
  <input type="checkbox" id="checkBox" name="checkBox" @change="addDataToPayload()">
  <label for="scales">{{registrationInput.PrivacyPolicy.FieldLabel}}</label><a :href="registrationInput.PrivacyPolicyLink.href">{{registrationInput.PrivacyPolicyLink.text}}</a>
</div>
</template>

<script>
export default {
props:['registrationInput','inputname'],
data(){
    return{
        checkBox: document.getElementsByName("checkbox").checked
    }
},
methods:{
      addDataToPayload() {
        let checkBoxes = document.getElementsByName("checkBox");
      this.$store.commit('registration/addDataToPayload', {key: this.inputname, value: checkBoxes[0].checked})
    },
}
}
</script>

<style lang="scss" scoped>
.checkbox-wrapper{
  height: 22px;
width: 463px;
display: block;
text-align: left;
margin-left: 83px;
margin-top: 24px;
}
</style>