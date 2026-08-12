<script setup lang="ts">
import type { ArticleAuthor } from '~/features/templates/template.types';

defineProps<{ author: ArticleAuthor }>();
</script>

<template>
	<EditorialProfileBox
		:profile="author"
		label="Author"
		variant="author"
	>
		<template
			v-if="$slots.image"
			#image
		>
			<slot name="image" />
		</template>
	</EditorialProfileBox>
</template>
