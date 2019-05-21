<template>
    <div class="footer">Last login from: {{ last_address }} </div>
</template>

<script>
export default {
  props: [
    'last_address'
  ]
}
</script>

<style scoped>
.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: rgb(78, 99, 110);
    color: white;
    text-align: center;
}
</style>