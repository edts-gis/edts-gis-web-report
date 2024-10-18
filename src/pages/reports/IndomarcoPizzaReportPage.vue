<template>
  <!-- Map -->
  <MapOrganism
    :configureMap="configureMap"
    :urlPath="urlPath"
  />
</template>

<script setup>
import MapOrganism from "@/components/organisms/MapOrganism.vue"

import { configureMap } from "@/maps/indomarco_pizza/script.js"

const urlPath = [
  "indomarco-pizza/geom-kabkota-pizza",
  "indomarco-pizza/geom-indonesia-kelurahan"
]
</script>