<template>
  <!-- Drawer -->
  <SidebarDrawerMolecule :sidebarId="sidebarID" />

  <!-- Sidebar -->
  <aside :id="sidebarID" class="aside is-placed-left is-expanded fixed top-0 left-0 z-40 w-64 h-screen transition-transform translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-base-0">    
    <!-- Logo -->
    <router-link to="/" class="flex items-center ps-2.5 mb-5">
        <span class="self-center text-xl font-semibold whitespace-nowrap text-white">GIS Web Report</span>
    </router-link>
    
    <!-- Items -->
    <SidebarItemListMolecule :sidebarID="sidebarID" />
    </div>
  </aside>
</template>

<script setup>
import SidebarDrawerMolecule from '@/components/molecules/SidebarDrawerMolecule.vue'
import SidebarItemListMolecule from '@/components/molecules/SidebarItemListMolecule.vue';

const sidebarID = "sidebar"
</script>