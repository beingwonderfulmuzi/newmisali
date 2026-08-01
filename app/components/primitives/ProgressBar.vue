<script setup lang="ts">
const props = withDefaults(defineProps<{ value: number; max?: number; label?: string }>(), { max: 100 });
const percent = computed(() => Math.min(100, Math.max(0, (props.value / props.max) * 100)));
</script>

<template>
	<div class="progress">
		<p
			v-if="label"
			class="progress__label"
		>
			{{ label }}
		</p>
		<div
			class="progress__track"
			role="progressbar"
			:aria-valuenow="value"
			:aria-valuemin="0"
			:aria-valuemax="max"
			:aria-label="label"
		>
			<div
				class="progress__bar"
				:style="{ width: `${percent}%` }"
			/>
		</div>
	</div>
</template>
