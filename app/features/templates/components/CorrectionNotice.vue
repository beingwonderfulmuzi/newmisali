<script setup lang="ts">
defineProps<{ text: string; title?: string; correctedAt?: string }>();
</script>

<template>
	<aside
		class="correction-notice"
		role="note"
		aria-live="polite"
	>
		<p class="correction-notice__title">
			{{ title || 'Correction' }}
		</p>
		<p class="correction-notice__text">
			{{ text }}
		</p>
		<p
			v-if="correctedAt"
			class="correction-notice__date"
		>
			Updated {{ correctedAt }}
		</p>
	</aside>
</template>
