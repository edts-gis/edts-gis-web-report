<template>
  <div class="relative flex h-screen items-center justify-center">
    <Suspense>
      <template #default>
        <MapMolecule
          :configureMap="props.configureMap"
          :layers="props.layers"
        />
      </template>

      <template #fallback>
        <MapLoadingMolecule />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import MapLoadingMolecule from '@/components/molecules/MapLoadingMolecule.vue';
import MapMolecule from '@/components/molecules/MapMolecule.vue';

const props = defineProps({
  configureMap: Function,
  layers: Array
})
</script>