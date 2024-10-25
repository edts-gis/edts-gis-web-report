<template>
  <!-- Section Header -->
  <SectionHeaderAtom
    :header="header"
    :subHeader="subHeader"
  />
</template>

<script setup>
import SectionHeaderAtom from '@/components/atoms/SectionHeaderAtom.vue';

const header = "EDTS | GIS Web Report"
const subHeader = "Collection of EDTS Spatial Report (design with QGIS)"

</script>
