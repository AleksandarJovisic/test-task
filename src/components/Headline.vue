<template>
<div class="hadline-wrapper">
 <p class="headline" v-if="registrationInput != undefined">{{registrationInput}}</p>
</div>
</template>

<script>
export default {
props:['registrationInput']
}
</script>

<style scoped lang="scss">
.hadline-wrapper{
width: 433px;
height: 56px;
margin-left: 83px;
margin-top: 117px;
}
.headline{
text-align: left;
font-style: normal;
font-weight: 500;
font-size: 48px;
line-height: 56px;
letter-spacing: -0.5px;
color: #202624;
}

</style>