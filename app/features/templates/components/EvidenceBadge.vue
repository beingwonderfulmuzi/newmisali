<script setup lang="ts">
defineProps<{ label: string; explanation?: string }>();
const open = ref(false);
</script>

<template>
	<div class="evidence-badge">
		<span class="evidence-badge__label">
			<span
				class="evidence-badge__icon"
				aria-hidden="true"
			>◆</span>
			{{ label }}
		</span>
		<Disclosure
			v-if="explanation"
			id="evidence-explanation"
			v-model:open="open"
			label="What does this evidence level mean?"
		>
			<p class="evidence-badge__explanation">
				{{ explanation }}
			</p>
		</Disclosure>
	</div>
</template>
