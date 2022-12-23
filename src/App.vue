<template>
  <main>
    <step-indicator />
    <div class="step-content">
      <router-view />
    </div>
  </main>
</template>

<script>
import StepIndicator from './components/StepIndicator.vue';

export default {
  name: 'App',
  components: {
    StepIndicator,
  }
}
</script>