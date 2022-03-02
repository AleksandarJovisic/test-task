<template>
<div v-if="registrationInput != undefined" class="checkbox-wrapper">
  <input type="checkbox" id="checkBox2" name="checkBox2" @change="addDataToPayload()">
  <label for="scales">{{registrationInput.TermsAndConditions.FieldLabel}}</label><a :href="registrationInput.TermsAndConditionsLink.href">{{registrationInput.TermsAndConditionsLink.text}}</a>
</div>
</template>

<script>
export default {
props:['registrationInput', 'inputname'],
methods:{
      addDataToPayload() {
        let checkBoxes = document.getElementsByName("checkBox2");
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