<template>
  <div class="full-width center-content">
    <h1>Hello World1234567</h1>
    <hello-component :name="msg" />
  </div>
</template>
<script>
import HelloComponent from './components/HelloComponent.vue'
export default {
  components: {
    HelloComponent
  },
  data: () => {
    return {
      msg: 'world123'
    }
  }
}
</script>
<style>
@import '../assert/app.css';
</style>
