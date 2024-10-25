<template>
  <div class="h-full w-full">
    <div class="absolute z-10 py-2">
      <!-- Map Filters | Layers -->
      <MapFilterAtom
        :filterID="layerFilter.filterID"
        :filterLabel="layerFilter.filterLabel"
        :filterCheckbox="layerFilter.filterCheckbox"
        @add-option="showLayer"
        @remove-option="hideLayer"
      />
    </div>
    
    <!-- Map -->
    <MapAtom
      :configureMap="props.configureMap"
      :layers="props.layers"
      ref="mapController"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import MapFilterAtom from '@/components/atoms/MapFilterAtom.vue';
import MapAtom from '@/components/atoms/MapAtom.vue';

const props = defineProps({
  configureMap: Function,
  layers: Array
})

// Map Filter | Layers
const layerFilter = {
  filterID: "map-layers-filter",
  filterLabel: "Layers",
  filterCheckbox: props.layers.map((l) => {
    return {
      id: l.id,
      label: l.label,
      checkbox: true
    }
  })
}

// Map
const mapController = ref(null);
function hideLayer(layerID) {
  mapController.value.$.exposed.hideLayer(layerID);
}

function showLayer(layerID) {
  mapController.value.$.exposed.showLayer(layerID)
}
</script>