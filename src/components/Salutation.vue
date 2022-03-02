<template>
  <div class="salutation-wrapper">
<p class="salutation-label">{{registrationInput.Salutation.FieldLabel}}</p>
<div v-for="choice in registrationInput.SalutationSource"  :key="choice.ID" class="radio-wrapper">
<input type="radio" id="myChoice1" name="radio" :value="choice.Name" @change="addDataToPayload(choice.Name)"/>
<label for="myChoice1">{{choice.Name}}
</label>
</div>
  </div>
</template>

<script>
export default {
props:['registrationInput', 'inputname'],
methods:{
      addDataToPayload() {
        let radios = document.getElementsByName("radio");
        radios.forEach(element => {
          if(element.checked == true){
 this.$store.commit('registration/addDataToPayload', {key: this.inputname, value: element.value})
          }
        });
     
    },
}
}
</script>

<style scoped lang="scss">
.radio-wrapper{
    display: inline;
}
.myChoice1{
float: left;
padding: 0 1em;
text-align: center;
}
.salutation-wrapper{
width: 674px;
height: 15px;
margin-left: 83px;
text-align: left;
margin-bottom: 56px;
}
.salutation-label{
font-size: 15px;
font-weight: 600;
line-height: 15px;
color: #202624;
}
</style>