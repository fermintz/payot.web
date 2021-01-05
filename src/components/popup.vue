<template>
  <v-dialog v-model="dialog" width="unset">
    <div class="popup">
      <a @click="openPdf"><img src="/img/main_popup.png" /></a>
      <v-btn icon class="closeBtn" @click="dialog = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
    };
  },
  methods: {
    openPdf() {
      const filePath = `http://www.payot-inc.com/pdf/kiosk_2020.pdf`;
      window.open(filePath, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.popup {
  position: relative;
  img {
    width: 100%;
  }

  a {
    cursor: pointer;
  }

  .closeBtn {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 20px;
    right: 20px;
    background: #292929;

    .v-icon {
      color: #fff;
    }
  }
}
</style>