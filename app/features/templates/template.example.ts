import type { QuestionArticle } from './template.types';

export const EXAMPLE_ARTICLE_SLUG = `is-an-editorial-system`;
export const EXAMPLE_ROUTE_GROUP = `what` as const;

export const exampleQuestionArticle: QuestionArticle = {
	routeGroup: EXAMPLE_ROUTE_GROUP,
	slug: EXAMPLE_ARTICLE_SLUG,
	title: `What is an editorial system?`,
	description: `A practical introduction to building editorial systems from real search questions, reusable presentation components, and project-specific content.`,
	eyebrow: `Editorial foundations`,
	meta: {
		publishedAt: `2026-01-15`,
		updatedAt: `2026-07-01`,
		readingTimeMinutes: 6,
		author: {
			name: `Editorial Team`,
			role: `Content strategist`,
			bio: `Builds question-led editorial experiences from search intent and reader needs.`,
		},
	},
	breadcrumbs: [
		{ label: `Home`, to: `/` },
		{ label: `What`, to: `/what/is-an-editorial-system` },
		{ label: `What is an editorial system?` },
	],
	tableOfContents: [
		{ id: `definition`, label: `Definition`, level: 2 },
		{ id: `how-it-works`, label: `How it works`, level: 2 },
		{ id: `benefits`, label: `Benefits`, level: 2 },
		{ id: `practical-tips`, label: `Practical tips`, level: 2 },
		{ id: `faqs`, label: `FAQs`, level: 2 },
		{ id: `sources`, label: `Sources`, level: 2 },
	],
	faqs: [
		{
			id: `faq-1`,
			question: `Does an editorial system require a CMS?`,
			answer: `No. This base provides structure and presentation. Each project can choose how content is authored and stored.`,
		},
		{
			id: `faq-2`,
			question: `Can I add new question routes beyond the starter groups?`,
			answer: `The base defines ten route groups aligned with common search questions. Projects extend content within those groups rather than inventing a fixed taxonomy upfront.`,
		},
	],
	sources: [
		{
			id: `source-1`,
			title: `Google Search Central: Create helpful content`,
			url: `https://developers.google.com/search/docs/fundamentals/creating-helpful-content`,
			publisher: `Google`,
		},
		{
			id: `source-2`,
			title: `Web Content Accessibility Guidelines (WCAG) 2.2`,
			url: `https://www.w3.org/TR/WCAG22/`,
			publisher: `W3C`,
		},
	],
	relatedQuestions: [
		{
			routeGroup: `how`,
			slug: `to-structure-question-pages`,
			title: `How to structure question pages`,
			description: `A lightweight page shell for search-led articles.`,
		},
		{
			routeGroup: `why`,
			slug: `use-route-groups-for-content`,
			title: `Why use route groups for content`,
			description: `Organizing articles around real search intent.`,
		},
	],
};

export function getExampleArticle(
	routeGroup: string,
	slug: string,
): QuestionArticle | undefined {
	if (routeGroup === EXAMPLE_ROUTE_GROUP && slug === EXAMPLE_ARTICLE_SLUG) {
		return exampleQuestionArticle;
	}
	return undefined;
}
