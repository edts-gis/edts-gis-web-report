<template>
  <router-link 
    v-if="kind === 'main'"
    :to="to"
    class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
  >
    <!-- SideBarItem - Main -->
    <!-- Icon -->
    <svg v-if="pathD" class="w-5 h-5 text-white transition duration-75 group-hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
      <path v-for="d in props.pathD"
        :d="d"
      />
    </svg>

    <!-- Label -->
    <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap text-white group-hover:text-gray-900">
      {{ props.label }}
    </span>
  </router-link>

  <button
    v-else-if="kind === 'dropdown'"
    class="flex items-center w-full p-2 text-basetransition duration-75 rounded-lg hover:bg-gray-100 group"
    :aria-controls="props.dropdownID"
    :data-collapse-toggle="props.dropdownID"
  >
    <!-- SideBarItem - DropDown -->
    <!-- Icon -->
    <svg v-if="pathD" class="w-5 h-5 text-white transition duration-75 group-hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
      <path v-for="d in props.pathD"
        :d="d"
      />
    </svg>

    <!-- Label -->
    <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap text-white group-hover:text-gray-900">
      {{ props.label }}
    </span>

    <!-- Dropdown Icon -->
    <svg class="w-3 h-3 text-white group-hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
    </svg>

  </button>

  <router-link
    v-else-if="kind === 'sub'"
    :to="to"
    class="flex items-center w-full p-1 text-sm text-basetransition duration-75 rounded-lg text-white hover:bg-gray-100 hover:text-gray-900 group"
  >
    <!-- SideBarItem - SubItem -->
    <span class="pl-10">
      {{ props.label }}
    </span>
  </router-link>
</template>

<script setup>
const props = defineProps({
  label: String,
  kind: String,
  to: String,
  dropdownID: String,
  pathD: Array,
})
</script>