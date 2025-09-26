<template>
  <n-switch :value="modelValue" size="small" @update:value="(v) => $emit('update:modelValue', v)" />
</template>
<script setup lang="ts">
import { NSwitch } from 'naive-ui'

defineProps<{ modelValue: boolean }>()
defineEmits<{ 'update:modelValue': [boolean] }>()
</script>
