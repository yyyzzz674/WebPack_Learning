<template>
  <h2>Hello {{ name }}</h2>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  created() {
    const arr = [1, 2, 3]
    const arr1 = [...arr, 4]
    alert(arr1)
  }
}
</script>
<style>
h1 {
  color: red;
}
</style>
