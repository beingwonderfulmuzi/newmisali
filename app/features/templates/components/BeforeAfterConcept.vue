<script setup lang="ts">
import type { TemplateSectionProps } from '~/features/templates/template.types';

withDefaults(defineProps<TemplateSectionProps & { disclaimer?: string }>(), {
	disclaimer: `Illustrative comparison only - individual results vary and this is not medical or professional advice.`,
});
</script>

<template>
	<EditorialSection
		:id="id"
		:title="title"
		:heading-level="headingLevel"
		variant="before-after-concept"
	>
		<slot />
		<template #after>
			<p
				v-if="disclaimer"
				class="before-after-concept__disclaimer"
			>
				{{ disclaimer }}
			</p>
		</template>
	</EditorialSection>
</template>
