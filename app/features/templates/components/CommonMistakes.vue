<script setup lang="ts">
import type { TemplateSectionProps } from '~/features/templates/template.types';

defineProps<TemplateSectionProps>();
</script>

<template>
	<EditorialSection
		:id="id"
		:title="title"
		:heading-level="headingLevel"
		variant="common-mistakes"
	>
		<slot />
	</EditorialSection>
</template>
