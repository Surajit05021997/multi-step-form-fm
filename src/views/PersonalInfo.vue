<template>
  <p class="step-content-title">Personal Info</p>
  <p class="step-content-description">
    Please provide your name, email address and phone number.
  </p>
  <form class="personal-info-form">
    <div class="form-field">
      <div>
        <label for="name">Name</label>
        <p v-if="!isNameValid" class="invalid-field">{{ this.nameErrorMsg }}</p>
      </div>
      <input type="text" id="name" placeholder="e.g. Surajit Maity" v-model="personalInfoLocal.name" />
    </div>
    <div class="form-field">
      <div>
        <label for="email-address">Email Address</label>
        <p v-if="!isEmailValid" class="invalid-field">{{ this.emailErrorMsg }}</p>
      </div>
      <input
        type="email"
        id="email-address"
        placeholder="e.g. surajitmaity@xyz.com"
        v-model="personalInfoLocal.emailAddress"
      />
    </div>
    <div class="form-field">
      <div>
        <label for="phone-number">Phone Number</label>
        <p v-if="!isPhoneNumberValid" class="invalid-field">{{ this.phoneNumberErrorMsg }}</p>
      </div>
      <input type="text" id="phone-number" placeholder="+91 0123456789" v-model="personalInfoLocal.phoneNumber" />
    </div>
  </form>
  <button class="button next" @click="validateForm">Next Step</button>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "Personal Info",
  data() {
    return {
      personalInfoLocal: {
        name: '',
        emailAddress: '',
        phoneNumber: '',
      },
      isNameValid: true,
      isEmailValid: true,
      isPhoneNumberValid: true,
      nameErrorMsg: '',
      emailErrorMsg: '',
      phoneNumberErrorMsg: '',
    };
  },
  created() {
    this.personalInfoLocal.name = this.personalInfo.name;
    this.personalInfoLocal.emailAddress = this.personalInfo.emailAddress;
    this.personalInfoLocal.phoneNumber = this.personalInfo.phoneNumber;
  },
  computed: {
    ...mapState(['personalInfo']),
  },
  methods: {
    ...mapActions(['setPersonalInfoAction']),
    handleNextButton() {
      this.setPersonalInfoAction(this.personalInfoLocal);
      this.$router.push({name: 'Plans'});
    },
    validateForm() {
      this.isNameValid = true;
      this.isEmailValid = true;
      this.isPhoneNumberValid = true;
      this.validateName();
      this.validateEmail();
      this.validatePhoneNumber();
      if(this.isNameValid && this.isEmailValid && this.isPhoneNumberValid) {
        this.handleNextButton();
      }
    },
    validateName() {
      if(!this.personalInfoLocal.name) {
        this.isNameValid = false;
        this.nameErrorMsg = 'Name cannot be empty';
      }
    },
    validateEmail() {
      if(!this.personalInfoLocal.emailAddress) {
        this.isEmailValid = false;
        this.emailErrorMsg = 'Email address cannot be empty';
        return;
      }
      const emailPattern =/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      this.isEmailValid = emailPattern.test(this.personalInfoLocal.emailAddress);
      this.emailErrorMsg = 'Please enter valid email address';
    },
    validatePhoneNumber() {
      if(!this.personalInfoLocal.phoneNumber) {
        this.isPhoneNumberValid = false;
        this.phoneNumberErrorMsg = 'Phone number cannot be empty';
        return;
      }
      const phoneNumberPattern = /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/;
      this.isPhoneNumberValid = phoneNumberPattern.test(this.personalInfoLocal.phoneNumber);
      this.phoneNumberErrorMsg = 'Please enter valid phone number';
    }
  }
};
</script>