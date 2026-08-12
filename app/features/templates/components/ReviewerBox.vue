<script setup lang="ts">
import type { ArticleReviewer } from '~/features/templates/template.types';

defineProps<{ reviewer: ArticleReviewer }>();
</script>

<template>
	<EditorialProfileBox
		:profile="reviewer"
		label="Reviewer"
		variant="reviewer"
	>
		<template
			v-if="$slots.image"
			#image
		>
			<slot name="image" />
		</template>
	</EditorialProfileBox>
</template>
