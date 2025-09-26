<template>
  <n-card title="СТЕ — цены и доступность" size="small" class="max-w-[1200px] mx-auto">
    <template v-if="loading">
      <LoadingPlaceholder />
    </template>

    <template v-else>
      <n-data-table
        :columns="columns"
        :data="rows"
        :single-line="false"
        :bordered="false"
        :row-key="rowKey"
        size="small"
      />
    </template>
  </n-card>
</template>

<script setup lang="ts">
import { NCard, NDataTable } from 'naive-ui'
import LoadingPlaceholder from '@/shared/ui/LoadingPlaceholder.vue'
import { useSteTable } from '@/components/ste-table/use/useSteTable'

const { loading, rows, columns, rowKey } = useSteTable()
</script>

<style scoped></style>
