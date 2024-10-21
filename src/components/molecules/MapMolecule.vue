<template>
  <div id="map" class="h-full w-full"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getInitData, updateLayer } from "@/maps/data.js"

const props = defineProps({
    configureMap: Function,
    urlPath: Array,
})

const coreHostname = import.meta.env.VITE_CORE_HOSTNAME;
const refLayers = ref(null);
const [initData, totalPages] = await getInitData(coreHostname, props.urlPath);


onMounted(() => {
  const layers = props.configureMap(...initData);
  refLayers.value = layers;

  for (let i = 0; i < props.urlPath.length; i++) {
    updateLayer(refLayers.value[i], coreHostname, props.urlPath[i], totalPages[i]);
  }
})

</script>