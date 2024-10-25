<template>

  <div class="mx-2 relative">
    <!-- Map Filter -->
    <button
      :id="filterID"
      class="inline-flex px-4 py-2 items-center rounded-lg border-2 border-base-0 text-center text-sm font-bold text-base-0 bg-white hover:text-white hover:bg-base-0"
      type="button"
      @click="filterControl()"
    >
      {{ props.filterLabel }}
      <svg class="w-2.5 h-2.5 ms-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
      </svg>
    </button>
  
    <!-- Map Filter Checkboxes -->
    <div
      :id="filterCheckboxID"
      :class="filterCheckboxClass"
    >
      <ul
        class="p-3 space-y-3 text-sm text-base-0"
        :aria-labelledby="filterID"
      >
        <li v-for="f in props.filterCheckbox">
          <div class="flex items-center">
            <input
              type="checkbox"
              class="rounded w-4 h-4 text-base-0 bg-white border-base-0"
              v-model="filterCheckboxModel"
              :id="filterID + '-' + f.id"
              :value="f.id"
            >
            <label
              :for="f.id"
              class="ms-2 text-sm font-medium text-base-0"
            >
              {{ f.label }}
            </label>
          </div>
        </li>
      </ul>
    </div>
  </div>
  
</template>

<script setup>
import { computed, ref, watch } from 'vue';

const emits = defineEmits(["addOption", "removeOption"])

const props = defineProps({
  filterID: String,
  filterLabel: String,
  filterCheckbox: Array,
});

// Map Filter
const filterCollapse = ref(false);
const filterCheckboxClass = computed(() => {
  const baseClass = "absolute w-48 my-2 rounded-lg border-2 border-base-0 bg-white dropd"
  return (filterCollapse.value ? "" : "hidden") + " " + baseClass;
});
function filterControl() {
  filterCollapse.value = !filterCollapse.value;
}

// Map Filter Checkbox
const filterCheckboxModel = ref(props.filterCheckbox.map((l) => { return l.id; }));
const filterCheckboxID = computed(() => {
  return props.filterID + "-checkbox"
});

watch(filterCheckboxModel, async (newChecked, prevChecked) => {
    const removedLayer = prevChecked.filter(ch => !newChecked.includes(ch));
    if (removedLayer.length > 0) {
      emits("removeOption", removedLayer[0]);
    }

    const addedLayer = newChecked.filter(ch => !prevChecked.includes(ch));
    if (addedLayer.length > 0) {
      emits("addOption", addedLayer[0]);
    }
});
</script>