<template>
<div v-if="registrationInput != undefined" class="checkbox-wrapper">
  <input type="checkbox" id="scales" name="scales">
  <label for="scales">{{registrationInput.FieldLabel}}</label>
</div>
</template>

<script>
export default {
props:['registrationInput']
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