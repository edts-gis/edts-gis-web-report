<template>
  <!-- Map -->
  <MapOrganism
    :configureMap="configureMap"
    :layers="layers"
  />
</template>

<script setup>
import MapOrganism from "@/components/organisms/MapOrganism.vue"

import { configureMap } from "@/maps/indomarco_pizza/script.js"

const layers = [
  {
    id: "kabkota-pizza",
    label: "Kabkota Pizza",
    url: "indomarco-pizza/geom-kabkota-pizza"
  },
  {
    id: "kelurahan",
    label: "Kelurahan",
    url: "indomarco-pizza/geom-indonesia-kelurahan"
  }
]
</script>