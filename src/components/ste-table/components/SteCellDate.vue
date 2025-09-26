<template>
  <n-date-picker
    type="date"
    size="small"
    format="dd.MM.yyyy"
    clearable
    :value="modelValue"
    placeholder="Выберите дату"
    @update:value="(v) => $emit('update:modelValue', v)"
  />
</template>

<script setup lang="ts">
import { NDatePicker } from 'naive-ui'
defineProps<{ modelValue: number | null }>()
defineEmits<{ 'update:modelValue': [number | null] }>()
</script>
