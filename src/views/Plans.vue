<template>
  <p class="step-content-title">Select you plan</p>
  <p class="step-content-description">
    You have the option of monthly or yearly billing.
  </p>
  <div class="plan-card-container">
    <div class="plan-card" :class="selectedCard === 'Arcade'? 'active' : ''" @click="handlePlanCardClick('Arcade')">
      <img class="plan-icon" src="@/assets/icon-arcade.svg" alt="">
      <div>
        <p class="plan-type">Arcade</p>
        <p class="plan-billing-period" v-if="!billingChecked">$9/mo</p>
        <div v-else>
          <p class="plan-billing-period">$90/yr</p>
          <p class="clr-p-900 fs-875">2 months free</p>
        </div>
      </div>
    </div>
    <div class="plan-card" :class="selectedCard === 'Advanced'? 'active' : ''" @click="handlePlanCardClick('Advanced')">
      <img class="plan-icon" src="@/assets/icon-advanced.svg" alt="">
      <div>
        <p class="plan-type">Advanced</p>
        <p class="plan-billing-period" v-if="!billingChecked">$12/mo</p>
        <div v-else>
          <p class="plan-billing-period">$120/yr</p>
          <p class="clr-p-900 fs-875">2 months free</p>
        </div>
      </div>
    </div>
    <div class="plan-card" :class="selectedCard === 'Pro'? 'active' : ''" @click="handlePlanCardClick('Pro')">
      <img class="plan-icon" src="@/assets/icon-pro.svg" alt="">
      <div>
        <p class="plan-type">Pro</p>
        <p class="plan-billing-period" v-if="!billingChecked">$15/mo</p>
        <div v-else>
          <p class="plan-billing-period">$150/yr</p>
          <p class="clr-p-900 fs-875">2 months free</p>
        </div>
      </div>
    </div>
  </div>
  <div class="billing-period-selector">
    <p :class="!billingChecked ? 'clr-p-900 fw-b' : ''">Monthly</p>
    <div>
      <input type="checkbox" class="toggle" id="billing-toggle" v-model="billingChecked">
      <label for="billing-toggle"></label>
    </div>
    <p :class="billingChecked ? 'clr-p-900 fw-b' : ''">Yearly</p>
  </div>
  <button class="button back" @click="handleBackButton">Go Back</button>
  <button class="button next" @click="handleNextButton">Next Step</button>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Plans',
  data() {
    return {
      selectedCard: 'Arcade',
      billingChecked: false,
      planInfoLocal: {
        planType: 'Arcade',
        planBillingPeriod: 'Monthly',
        planPrice: 9,
      },
    };
  },
  created() {
    this.selectedCard = this.planInfo.planType;
    this.billingChecked = this.planInfo.planBillingPeriod === 'Yearly' ? true : false;
  },
  computed: {
    ...mapState(['planInfo']),
  },
  methods: {
    ...mapActions(['setPlanInfo']),
    handlePlanCardClick(planType) {
      this.selectedCard = planType;
    },
    handleBackButton() {
      this.$router.push({name: 'Personal Info'});
    },
    handleNextButton() {
      this.planInfoLocal.planType = this.selectedCard;
      this.planInfoLocal.planBillingPeriod = this.billingChecked? 'Yearly' : 'Monthly';
      if(this.planInfoLocal.planType === 'Arcade')
        this.planInfoLocal.planPrice = this.billingChecked? 90 : 9;
      else if(this.planInfoLocal.planType === 'Advanced')
        this.planInfoLocal.planPrice = this.billingChecked? 120 : 12;
      else if(this.planInfoLocal.planType === 'Pro')
        this.planInfoLocal.planPrice = this.billingChecked? 150 : 15;
      this.setPlanInfo(this.planInfoLocal);
      this.$router.push({name: 'Add Ons'});
    },
  },
}
</script>