<template>
  <ul class="space-y-2 font-medium">
    <li>
      <!-- Home -->
      <SidebarItemAtom
        label="Home"
        kind="main"
        to="/"
        :pathD="pathDMap.home"
      />
    </li>

    <li>
      <!-- Reports -->
      <SidebarItemAtom
        label="Reports"
        kind="dropdown"
        :dropdownID="reportsDropdownData.id"
        :pathD="pathDMap.reports"
      />
      <!-- Report Sub-List -->
      <ul :id="reportsDropdownData.id" class="py-2 space-y-2">
        <li v-for="subItem in reportsDropdownData.subItems">
          <SidebarItemAtom
            :label="subItem.label"
            kind="sub"
            :to="subItem.to"
          />
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
import SidebarItemAtom from '@/components/atoms/SidebarItemAtom.vue';

const pathDMap = {
  home: [
    "M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"
  ],
  reports: [
    "M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z",
    "M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
  ]
}

const reportsDropdownData = {
  id: "reports-dropdown",
  subItems: [
    {
      "label": "Indomarco Pizza",
      "to": "/reports/indomarco-pizza"
    },
    {
      "label": "Convenience Brand Store",
      "to": "/reports/convenience-brand-store"
    }
  ]
}
</script>