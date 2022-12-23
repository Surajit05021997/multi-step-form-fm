<template>
  <p class="step-content-title">Finishing up</p>
  <p class="step-content-description">
    Double check everything looks OK before comfirming.
  </p>
  <div class="summary">
    <div class="plan-info-summery">
      <div>
        <p class="fw-b clr-p-900">{{ this.planInfo.planType }} (<span>{{ this.planInfo.planBillingPeriod }}</span>)</p>
        <router-link :to="{ name: 'Plans' }">Change</router-link>
      </div>
      <p class="fw-b clr-p-900">${{ this.planInfo.planPrice }} <span>{{ this.planInfo.planBillingPeriod === 'Monthly' ? '/mo' : '/yr' }}</span></p>
    </div>
    <hr>
    <div class="add-ons-info-summary">
      <p v-if="!addOnsInfo.length">No add ons</p>
      <div class="add-on-summary" v-for="addOn in addOnsInfo" :key="addOn.addOnType">
        <p>{{ addOn.addOnType }}</p>
        <p>+${{ String(addOn.addOnPrice) + (this.planInfo.planBillingPeriod === 'Monthly' ? '/mo' : '/yr') }}</p>
      </div>
    </div>
  </div>
  <div class="total-price-info">
      <p>Total per {{ this.planInfo.planBillingPeriod === 'Monthly' ? 'month' : 'year' }}</p>
      <p class="fw-b clr-p-900 total-price">${{ String(totalPrice()) + (this.planInfo.planBillingPeriod === 'Monthly' ? '/mo' : '/yr') }}</p>
    </div>
  <button class="button back" @click="handleBackButton">Go Back</button>
  <button class="button next" @click="handleNextButton">Confirm</button>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Summary',
  created() {
  },
  computed: {
    ...mapState(['planInfo', 'addOnsInfo']),
  },
  methods: {
    totalPrice() {
      const planPrice = this.planInfo.planPrice;
      let addOnsPrice = 0;
      this.addOnsInfo.forEach(addOn => {
        addOnsPrice = addOnsPrice + addOn.addOnPrice;
      });
      return planPrice + addOnsPrice;
    },
    handleBackButton() {
      this.$router.push({name: 'Add Ons'});
    },
    handleNextButton() {
      this.$router.push({ name: 'Thank You Page' });
    }
  },
}
</script>