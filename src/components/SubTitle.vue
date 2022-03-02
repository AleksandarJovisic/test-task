<template>
<div class="headline-wrapper">
     <p class="headline" v-if="registrationInput != undefined">{{registrationInput}}</p>
</div>
</template>

<script>
export default {
props:['registrationInput']
}
</script>

<style scoped lang="scss">
.headline-wrapper{
width: 674px;
height: 44px;
margin-left: 83px;
margin-top: 32px;
margin-bottom: 56px;
}
.headline{
text-align: left;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 22px;
/* or 147% */


/* outer space */

color: #202624;
}

</style>