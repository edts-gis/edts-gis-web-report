<template>
  <!-- SideBar -->
  <SidebarOrganism />

  <!-- Page -->
  <div class="p-0 sm:ml-64">
    <router-view></router-view>
  </div>
</template>

<script setup>
import SidebarOrganism from '@/components/organisms/SidebarOrganism.vue'
</script>