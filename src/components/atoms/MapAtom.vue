<template>
  <div id="map" class="z-0 h-full w-full"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import { getInitData, mappingLayers, updateLayer } from "@/maps/data.js"

const props = defineProps({
  configureMap: Function,
  layers: Array,
})

// Map
const coreHostname = import.meta.env.VITE_CORE_HOSTNAME;
const initLayerData = await getInitData(coreHostname, props.layers);
const mapLayers = ref({});
const mapHandler = ref(null);

// Layers
function getLayer(layerID) {
  const filteredLayers = mapLayers.value.filter(l => l.id == layerID);
  if (filteredLayers.length > 0) {
    return filteredLayers[0];
  };
}

function hideLayer(layerID) {
  const mapLayer = getLayer(layerID);
  if (mapLayer) {
    mapHandler.value.removeLayer(mapLayer.layer);
  };
}

function showLayer(layerID) {
  const mapLayer = getLayer(layerID);
  if (mapLayer) {
    mapHandler.value.addLayer(mapLayer.layer);
  };
}

defineExpose({
  hideLayer,
  showLayer
})

// Component Lifecycle
onMounted(() => {
  // Initiate Map Styling
  const [initMapHandler, initMapLayers] = props.configureMap(...initLayerData.map((d) => d.data));
  mapHandler.value = initMapHandler;
  mapLayers.value = mappingLayers(props.layers, initMapLayers, initLayerData);

  // Async Concurrent Layer Data Updates
  mapLayers.value.forEach((ml) => {
    updateLayer(ml, coreHostname);
  })
})
</script>