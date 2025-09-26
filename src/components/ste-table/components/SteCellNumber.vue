<template>
  <n-input-number
    :value="modelValue"
    :min="min"
    :max="max"
    :precision="precision"
    size="small"
    :placeholder="placeholder"
    @update:value="(v) => $emit('update:modelValue', v)"
  />
</template>

<script setup lang="ts">
import { NInputNumber } from 'naive-ui'

defineProps<{
  modelValue: number | null
  min?: number
  max?: number
  precision?: number
  placeholder?: string
}>()

defineEmits<{ 'update:modelValue': [number | null] }>()
</script>
