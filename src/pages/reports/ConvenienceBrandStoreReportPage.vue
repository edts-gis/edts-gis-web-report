<template>
  <!-- Map -->
  <MapOrganism
    :configureMap="configureMap"
    :urlPath="urlPath"
  />
</template>

<script setup>
import MapOrganism from "@/components/organisms/MapOrganism.vue"

import { configureMap } from "@/maps/convenience_brand_store/script.js"

const urlPath = [
  "convenience-brand-store/populations",
  "convenience-brand-store/brand-stores"
]
</script>