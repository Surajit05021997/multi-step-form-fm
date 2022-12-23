<template>
  <p class="step-content-title">Personal Info</p>
  <p class="step-content-description">
    Please provide your name, email address and phone number.
  </p>
  <form class="personal-info-form">
    <div class="form-field">
      <label for="name">Name</label>
      <input type="text" id="name" placeholder="e.g. Surajit Maity" v-model="personalInfoLocal.name" required />
    </div>
    <div class="form-field">
      <label for="email-address">Email Address</label>
      <input
        type="email"
        id="email-address"
        placeholder="e.g. surajitmaity@xyz.com"
        v-model="personalInfoLocal.emailAddress"
      />
    </div>
    <div class="form-field">
      <label for="phone-number">Phone Number</label>
      <input type="text" id="phone-number" placeholder="+91 0123456789" v-model="personalInfoLocal.phoneNumber" />
    </div>
  </form>
  <button class="button next" @click="handleNextButton">Next Step</button>
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
    }
  }
};
</script>