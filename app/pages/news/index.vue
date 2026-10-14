<script setup lang="ts">
import { news } from '~/data/school';

useSchoolSeo(`School Updates`, `Official school announcements and updates from New Misali Cadet School. No announcements are currently published.`);
</script>

<template>
	<div>
		<PageIntro
			eyebrow="School Updates"
			title="From the school."
			description="A place for confirmed announcements and information for the school community."
		/><Container class="collection-page">
			<div
				v-if="news.length"
				class="news-list"
			>
				<article
					v-for="item in news"
					:key="item.slug"
				>
					<time v-if="item.date">{{ item.date }}</time><h2><NuxtLink :to="`/news/${item.slug}`">{{ item.title }}</NuxtLink></h2><p>{{ item.description }}</p>
				</article>
			</div><EmptyState
				v-else
				title="No announcements published yet."
				description="When confirmed school updates are available, they will appear here. For current admission information, please enquire directly at the school."
			>
				<Button
					to="/contact"
					variant="outlined"
				>
					Contact & location ↗
				</Button>
			</EmptyState><NuxtLink
				to="/gallery"
				class="full-width-link"
			><span>In the meantime, explore school life in photographs.</span><span aria-hidden="true">↗</span></NuxtLink>
		</Container>
	</div>
</template>
