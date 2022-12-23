<template>
  <p class="step-content-title">Pick add-ons</p>
  <p class="step-content-description">
    Add-ons help enhance your gaming experience.
  </p>
  <div class="add-ons-list">
    <div class="add-ons-list-item" :class="isOnlineServiceCheckedLocal ? 'active' : ''">
      <label for="online-service">
        <input type="checkbox" id="online-service" v-model="isOnlineServiceCheckedLocal">
        <div class="checkbox-text">
          <div>
            <p class="clr-p-900 fw-b">Online service</p>
            <p>Access to multiplayer games</p>
          </div>
          <div>
            <p v-if="planInfo.planBillingPeriod === 'Monthly'">+$1/mo</p>
            <p v-else>+$10/yr</p>
          </div>
        </div>
      </label>
    </div>
    <div class="add-ons-list-item" :class="isLargeStorageCheckedLocal ? 'active' : ''">
      <label for="large-storage">
        <input type="checkbox" id="large-storage" v-model="isLargeStorageCheckedLocal">
        <div class="checkbox-text">
          <div>
            <p class="clr-p-900 fw-b">Large storage</p>
            <p>Extra 1TB of cloud save</p>
          </div>
          <div>
            <p v-if="planInfo.planBillingPeriod === 'Monthly'">+$2/mo</p>
            <p v-else>+$20/yr</p>
          </div>
        </div>
      </label>
    </div>
    <div class="add-ons-list-item" :class="isCustomizableProfileCheckedLocal ? 'active' : ''">
      <label for="customizable-profile">
        <input type="checkbox" id="customizable-profile" v-model="isCustomizableProfileCheckedLocal">
        <div class="checkbox-text">
          <div>
            <p class="clr-p-900 fw-b">Customizable profile</p>
            <p>Customize theme on your profile</p>
          </div>
          <div>
            <p v-if="planInfo.planBillingPeriod === 'Monthly'">+$2/mo</p>
            <p v-else>+$20/yr</p>
          </div>
        </div>
      </label>
    </div>
  </div>
  <button class="button back" @click="handleBackButton">Go Back</button>
  <button class="button next" @click="handleNextButton">Next Step</button>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Add Ons',
  data() {
    return {
      isOnlineServiceCheckedLocal: false,
      isLargeStorageCheckedLocal: false,
      isCustomizableProfileCheckedLocal: false,
      addOnsInfoLocal: [],
    };
  },
  created() {
    this.isOnlineServiceCheckedLocal = this.isOnlineServiceChecked;
    this.isLargeStorageCheckedLocal = this.isLargeStorageChecked;
    this.isCustomizableProfileCheckedLocal = this.isCustomizableProfileChecked;
  },
  computed: {
    ...mapState(['planInfo', 'addOnsInfo', 'isOnlineServiceChecked', 'isLargeStorageChecked', 'isCustomizableProfileChecked']),
  },
  methods: {
    ...mapActions(['setAddOnsInfo', 'setIsOnlineServiceChecked', 'setIsLargeStorageChecked', 'setIsCustomizableProfileChecked']),
    handleBackButton() {
      this.$router.push({name: 'Plans'});
    },
    handleNextButton() {
      if(this.isOnlineServiceCheckedLocal) {
        this.addOnsInfoLocal.push({
          addOnType: 'Online service',
          addOnPrice: this.planInfo.planBillingPeriod === 'Monthly' ? 1 : 10,
        })
      }
      if(this.isLargeStorageCheckedLocal) {
        this.addOnsInfoLocal.push({
          addOnType: 'Large storage',
          addOnPrice: this.planInfo.planBillingPeriod === 'Monthly' ? 2 : 20,
        })
      }
      if(this.isCustomizableProfileCheckedLocal) {
        this.addOnsInfoLocal.push({
          addOnType: 'Customizable profile',
          addOnPrice: this.planInfo.planBillingPeriod === 'Monthly' ? 2 : 20,
        })
      }
      this.setAddOnsInfo(this.addOnsInfoLocal);
      this.setIsOnlineServiceChecked(this.isOnlineServiceCheckedLocal);
      this.setIsLargeStorageChecked(this.isLargeStorageCheckedLocal);
      this.setIsCustomizableProfileChecked(this.isCustomizableProfileCheckedLocal);
      this.$router.push({name: 'Summary'});
    },
  },
};
</script>