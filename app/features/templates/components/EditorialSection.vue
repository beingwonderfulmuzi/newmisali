<script setup lang="ts">
import type { TemplateSectionProps, TemplateSectionVariant } from '~/features/templates/template.types';

const props = withDefaults(defineProps<TemplateSectionProps & {
	variant: TemplateSectionVariant;
}>(), {
	headingLevel: 2,
});

const headingTag = computed(() => props.headingLevel === 3 ? `h3` : `h2`);
const titleId = computed(() => props.id && props.title ? `${props.id}-title` : undefined);
</script>

<template>
	<section
		:id="id"
		class="editorial-section"
		:class="`editorial-section--${variant}`"
		:aria-labelledby="titleId"
	>
		<component
			:is="headingTag"
			v-if="title"
			:id="titleId"
			class="editorial-section__title"
		>
			{{ title }}
		</component>
		<div class="editorial-section__content">
			<slot />
		</div>
		<slot name="after" />
	</section>
</template>
