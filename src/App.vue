<template>
  <n-config-provider
    :theme="theme"
    :theme-overrides="themeOverrides"
    :locale="ruRU"
    :date-locale="dateRuRU"
  >
    <StePriceTable />
    <n-global-style />
  </n-config-provider>
</template>

<script setup lang="ts">
import StePriceTable from '@/components/ste-table/StePriceTable.vue'
import { NConfigProvider, NGlobalStyle } from 'naive-ui'
import { theme, themeOverrides } from '@/shared/theme'
import { ruRU, dateRuRU } from 'naive-ui'
</script>

<style lang="scss" scoped></style>
