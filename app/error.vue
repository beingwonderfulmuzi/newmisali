<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps<{ error: NuxtError }>();
const { theme } = useSchoolTheme();
useHead(() => ({ htmlAttrs: { 'data-theme': theme.value } }));

useSeoMeta({ title: `Page unavailable | New Misali Cadet School`, robots: `noindex, nofollow` });

const title = computed(() => {
	if (props.error.statusCode === 404) {
		return `Page not found`;
	}
	return props.error.statusMessage || `Something went wrong`;
});

const description = computed(() => {
	if (props.error.statusCode === 404) {
		return `The page you are looking for does not exist or may have moved.`;
	}
	return props.error.message;
});

function handleClearError() {
	clearError({ redirect: `/` });
}
</script>

<template>
	<Container>
		<ErrorState
			:status-code="error.statusCode"
			:title="title"
			:description="description"
		>
			<Button @click="handleClearError">
				Back to home
			</Button>
		</ErrorState>
	</Container>
</template>
