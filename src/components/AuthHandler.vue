<template>
  <div>
    <p>Logging in, Please Wait...</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AuthHandler",
  methods: mapActions(["finalizeLogin"]),
  created() {
    this.finalizeLogin(window.location.hash);
  },
};
</script>

<style scoped>
div {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
