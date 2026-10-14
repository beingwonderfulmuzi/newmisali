<script setup lang="ts">
import { news } from '~/data/school';

const route = useRoute();
const item = news.find(record => record.slug === route.params.slug);
if (!item) throw createError({ statusCode: 404, statusMessage: `School update not found` });
useSchoolSeo(item.title, item.description);
</script>

<template>
	<div v-if="item">
		<PageIntro
			eyebrow="School Updates"
			:title="item.title"
			:description="item.description"
		/><Container
			width="article"
			class="section-space"
		>
			<time v-if="item.date">{{ item.date }}</time><Prose><p>{{ item.body }}</p></Prose><NuxtLink
				to="/news"
				class="text-link"
			>← All updates</NuxtLink>
		</Container>
	</div>
</template>
