<script setup lang="ts">
defineProps<{ statusCode?: number; title?: string; description?: string }>();
</script>

<template>
	<div
		class="error-state"
		role="alert"
	>
		<p
			v-if="statusCode"
			class="error-state__code"
		>
			{{ statusCode }}
		</p>
		<h1 class="error-state__title">
			{{ title || 'Something went wrong' }}
		</h1>
		<p
			v-if="description"
			class="error-state__desc"
		>
			{{ description }}
		</p>
		<div class="error-state__actions">
			<slot />
		</div>
	</div>
</template>
