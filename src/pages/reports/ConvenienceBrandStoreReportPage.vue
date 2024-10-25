<template>
  <!-- Map -->
  <MapOrganism
    :configureMap="configureMap"
    :layers="layers"
  />
</template>

<script setup>
import MapOrganism from "@/components/organisms/MapOrganism.vue"

import { configureMap } from "@/maps/convenience_brand_store/script.js"

const layers = [
  {
    id: "populations",
    label: "Populations",
    url: "convenience-brand-store/populations"
  },
  {
    id: "brand-stores",
    label: "Brand Stores",
    url: "convenience-brand-store/brand-stores"
  }
]
</script>