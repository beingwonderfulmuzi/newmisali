<script setup lang="ts">
import type { CollectionsItem } from '~/components/blocks/Collections.vue';
import type { PopularQuestionsItem } from '~/components/blocks/PopularQuestions.vue';
import type { ReadingPathsItem } from '~/components/blocks/ReadingPaths.vue';
import type { RecentlyUpdatedItem } from '~/components/blocks/RecentlyUpdated.vue';

const { site } = useAppConfig();

useSeoMeta({
	title: site.name,
	description: site.description,
	ogTitle: site.name,
	ogDescription: site.description,
});

const popularQuestions: PopularQuestionsItem[] = [
	{
		id: `q1`,
		title: `What is an editorial system?`,
		description: `How question-led content, reusable templates, and route groups fit together.`,
		to: `/what/is-an-editorial-system`,
		meta: `What`,
	},
	{
		id: `q2`,
		title: `How to structure question pages`,
		description: `A practical shell for search-led articles with TOC and supporting sections.`,
		to: `/how/to-structure-question-pages`,
		meta: `How`,
	},
	{
		id: `q3`,
		title: `Why use route groups for content`,
		description: `Organizing articles around real search intent instead of arbitrary categories.`,
		to: `/why/use-route-groups-for-content`,
		meta: `Why`,
	},
];

const collections: CollectionsItem[] = [
	{
		id: `c1`,
		title: `Getting started`,
		description: `Core concepts for building on this editorial base.`,
		to: `/what/is-an-editorial-system`,
		meta: `4 articles`,
	},
	{
		id: `c2`,
		title: `Page structure`,
		description: `Templates, blocks, and the question page shell.`,
		to: `/how/to-structure-question-pages`,
		meta: `3 articles`,
	},
];

const readingPaths: ReadingPathsItem[] = [
	{
		id: `p1`,
		title: `Build your first question page`,
		description: `Start with the example article, then adapt templates for your topic.`,
		to: `/what/is-an-editorial-system`,
	},
	{
		id: `p2`,
		title: `Understand route groups`,
		description: `Map content to can, is, does, why, what, and other search-led prefixes.`,
		to: `/why/use-route-groups-for-content`,
	},
];

const recentlyUpdated: RecentlyUpdatedItem[] = [
	{
		id: `r1`,
		title: `What is an editorial system?`,
		description: `Updated with TOC scroll-spy and supporting sections.`,
		to: `/what/is-an-editorial-system`,
		meta: `Jul 2026`,
	},
];
</script>

<template>
	<Container>
		<Hero
			:title="site.name"
			:description="site.description"
			eyebrow="Editorial base"
		>
			<template #meta>
				<span>Question-led content</span>
				<span>Token-driven CSS</span>
				<span>Accessible components</span>
			</template>
		</Hero>

		<PopularQuestions
			title="Popular questions"
			description="Starter examples aligned with common search intent."
			:items="popularQuestions"
		/>

		<Collections
			title="Collections"
			description="Curated groups to explore related topics."
			:items="collections"
		/>

		<ReadingPaths
			title="Reading paths"
			description="Suggested sequences for new contributors."
			:items="readingPaths"
		/>

		<RecentlyUpdated
			title="Recently updated"
			:items="recentlyUpdated"
		/>
	</Container>
</template>
