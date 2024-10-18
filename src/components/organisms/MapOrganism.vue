<template>
  <div class="h-screen flex items-center justify-center">
    <Suspense>
      <template #default>
        <MapMolecule
          :configureMap="props.configureMap"
          :urlPath="props.urlPath"
        />
      </template>
      <template #fallback>
        <MapLoadingMolecule />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { Suspense } from 'vue';

import MapLoadingMolecule from '@/components/molecules/MapLoadingMolecule.vue';
import MapMolecule from '@/components/molecules/MapMolecule.vue';

const props = defineProps({
  configureMap: Function,
  urlPath: Object
})

</script>