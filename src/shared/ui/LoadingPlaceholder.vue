<template>
  <n-card size="small">
    <div class="loading">
      <n-skeleton text :repeat="1" width="40%" />
      <n-skeleton text :repeat="1" width="70%" />
      <n-skeleton text :repeat="1" width="55%" />
      <n-divider />
      <n-spin description="Загружаем данные таблицы..." />
    </div>
  </n-card>
</template>

<script setup lang="ts">
import { NSkeleton, NSpin, NCard, NDivider } from 'naive-ui'
</script>

<style scoped>
.loading {
  display: grid;
  gap: 12px;
}
</style>
