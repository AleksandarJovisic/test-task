<template>
<div class="input-wrapper">
<input v-if="registrationInput != undefined" class="input-text" type="text" :placeholder="registrationInput.FieldLabel" @change="addDataToPayload(inputname, $event)">
</div>
  
</template>

<script>
export default {
props:['registrationInput', 'inputname'],
methods:{
      addDataToPayload(key, event) {
      this.$store.commit('registration/addDataToPayload', {key: key, value: event.target.value})
    },
}
}

</script>

<style scoped lang="scss">
.input-wrapper{

}
.input-text{
  width: 677px;
height: 48px;
padding-left: 16px;  
margin-top: 24px;
margin-left: 83px;
display: block;
border: 1px solid #82827D;
box-sizing: border-box;
color: #202624;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 22px;
letter-spacing: 0px;
text-align: left;
}
</style>