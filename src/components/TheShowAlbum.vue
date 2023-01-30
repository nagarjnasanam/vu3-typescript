<template>
  <h2>Album Name: {{ album.collectionName }}</h2>
  <h4>Artwork</h4>
  <img :src="album.artworkUrl100" alt="" />
  <p><b>copyright</b>:{{album.copyright}}</p>
  <p><b>primaryGenreName</b>:{{album.primaryGenreName}}</p>
  <h4>Price: {{ album.collectionPrice }}-{{album.currency}}</h4>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Result } from "../types/itunes";

export default defineComponent({
  props: {
    album: {
      type: Object as PropType<Result>,
      required: true
    }
  },
  setup() {
    return {};
  }
});
</script>

<style scoped></style>
