<script setup lang="ts">
const open = defineModel<boolean>(`open`, { default: false });
const props = defineProps<{ id: string; label: string }>();
const panelId = computed(() => `${props.id}-panel`);
</script>

<template>
	<div class="disclosure">
		<button
			:id="id"
			type="button"
			class="disclosure__button"
			:aria-expanded="open"
			:aria-controls="panelId"
			@click="open = !open"
		>
			<span>{{ label }}</span>
			<span
				class="disclosure__icon"
				aria-hidden="true"
			>▼</span>
		</button>
		<div
			v-show="open"
			:id="panelId"
			class="disclosure__panel"
			role="region"
			:aria-labelledby="id"
		>
			<slot />
		</div>
	</div>
</template>
