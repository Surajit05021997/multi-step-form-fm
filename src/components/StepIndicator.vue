<template>
  <div class="step-indicator">
    <picture>
      <source srcset="../assets/bg-sidebar-mobile.svg" media="(max-width: 480px)">
      <source srcset="../assets/bg-sidebar-tablet.png" media="(max-width: 996px)">
      <img src="../assets/bg-sidebar-desktop.svg" alt="">
    </picture>
    <ol class="step-indicator-list">
      <li :class="this.$route.path === '/personalInfo' ? 'active' : ''">
        <div class="list-text">
          <p>STEP 1</p>
          <p class="fw-sb clr-n-100">YOUR INFO</p>
        </div>
      </li>
      <li :class="this.$route.path === '/plans' ? 'active' : ''">
        <div class="list-text">
          <p>STEP 2</p>
          <p class="fw-sb clr-n-100">SELECT PLAN</p>
        </div>
      </li>
      <li :class="this.$route.path === '/add-ons' ? 'active' : ''">
        <div class="list-text">
          <p>STEP 3</p>
          <p class="fw-sb clr-n-100">ADD-ONS</p>
        </div>
      </li>
      <li :class="this.$route.path === '/summary' ? 'active' : ''">
        <div class="list-text">
          <p>STEP 4</p>
          <p class="fw-sb clr-n-100">SUMMARY</p>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "StepIndicator",
};
</script>