<template>
  <div class="link-wrapper">
<a :href="registrationInput.RegistrationLoginLink.url">{{registrationInput.RegistrationLoginLinkLabel}}</a>
  </div>
</template>

<script>
export default {
props:['registrationInput']
}
</script>

<style scoped lang="scss">
.link-wrapper{
        margin-top: 40px;
    text-align: left;
    margin-left: 83px;
}
</style>