<template>
  <div>
    <div class="image-container" v-if="isLoggedIn">
      <img v-for="image in allImages" :src="image.link" :key="image.id" />
    </div>
    <div v-else class="loggedOut">
      Please login to get Started
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ImageGallery",
  computed: mapGetters(["allImages", "isLoggedIn"]),
  methods: mapActions(["fetchImages"]),
  created() {
    this.fetchImages();
  },
};
</script>

<style scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}

.image-container img {
  max-width: 100%;
  padding: 5px;
}
.loggedOut {
  text-align: center;
  margin-top: 30%;
  font-size: 5vw;
}
</style>
