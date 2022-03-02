<template>
  <div class="hello">
    <Headline v-bind:registrationInput="registrationFormData.RegistrationTitle"/>
    <SubTitle v-bind:registrationInput="registrationFormData.RegistrationIntroductionText" />
    <Salutation v-bind:registrationInput="registrationFormData" inputname="salutation"/>
    <FormInput v-bind:registrationInput="registrationFormData.FirstName" inputname="firstName"/>
    <FormInput v-bind:registrationInput="registrationFormData.LastName" inputname="lastName"/>
    <FormInput v-bind:registrationInput="registrationFormData.Email" inputname="email"/>
    <FormInput v-bind:registrationInput="registrationFormData.Password" inputname="password"/>
    <PasswordDescription />
    <CheckBoxInputNewsletter v-bind:registrationInput="registrationFormData.Newsletter"/>
    <CheckBoxInputPrivacyPolicy v-bind:registrationInput="registrationFormData" inputname="privacyPolicy"/>
    <CheckBoxInputTermsAndConditions v-bind:registrationInput="registrationFormData" inputname="terms"/>
    <SubmitButton v-bind:registrationInput="registrationFormData"/>
    <LoginLink v-bind:registrationInput="registrationFormData"/>
  </div>
</template>

<script>
import FormInput from '../components/FormInput.vue'
import CheckBoxInputNewsletter from '../components/CheckBoxInputNewsletter.vue'
import CheckBoxInputPrivacyPolicy from '../components/CheckBoxInputPrivacyPolicy.vue'
import CheckBoxInputTermsAndConditions from '../components/CheckBoxInputTermsAndConditions.vue'
import Headline from '../components/Headline.vue'
import SubTitle from '../components/SubTitle.vue'
import Salutation from '../components/Salutation.vue'
import PasswordDescription from '../components/PasswordDescription.vue'
import SubmitButton from '../components/SubmitButton.vue'
import LoginLink from '../components/LoginLink.vue'
import { mapState } from "vuex";
export default {
  name: 'RegistraionForm',
  data(){
    return{
      
    }
  },
      computed:{
        ...mapState({
      registrationFormData: (state) => state.registration.registrationFormData,
    })
  },
  components:{
    FormInput,
    CheckBoxInputNewsletter,
    CheckBoxInputPrivacyPolicy,
    CheckBoxInputTermsAndConditions,
    Headline,
    SubTitle,
    Salutation,
    PasswordDescription,
    SubmitButton,
    LoginLink
  },
    created(){
    this.$store.dispatch('registration/getRegistrationFormData')
  }
}
</script>


<style lang="scss">

</style>
