<template>
  <v-dialog v-model="visible" width overlay-opacity="0.9" >
    <div class="photoBox" @click="visible = false">
      <div class="photo">
        <v-img :src="'/contents/' + imageFile" height="640" contain/>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      imageFile: "",
    };
  },
  methods: {
    showImage(imageFilePath) {
      this.imageFile = imageFilePath;
      this.visible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.photoBox{
  .photo{
    
  }
}
</style>
