<script setup lang="ts">
import { isRouteGroup } from '~/features/route-groups';
import { buildArticleStructuredData, buildBreadcrumbStructuredData, buildFAQStructuredData } from '~/features/templates/template.seo';
import { getExampleArticle } from '~/features/templates/template.example';
import { normalizeRouteParam } from '~/features/templates/template.utils';

const route = useRoute();
const requestUrl = useRequestURL();

const routeGroup = normalizeRouteParam(route.params.routeGroup);
const slug = normalizeRouteParam(route.params.slug);

if (!routeGroup || !slug || !isRouteGroup(routeGroup)) {
	throw createError({ statusCode: 404, statusMessage: `Page not found` });
}

const article = getExampleArticle(routeGroup, slug);

if (!article) {
	throw createError({ statusCode: 404, statusMessage: `Article not found` });
}

const pageUrl = `${requestUrl.origin}/${routeGroup}/${slug}`;

useSeoMeta({
	title: article.title,
	description: article.description,
	ogTitle: article.title,
	ogDescription: article.description,
});

useHead({
	script: [
		{
			type: `application/ld+json` as const,
			innerHTML: JSON.stringify(buildArticleStructuredData({
				title: article.title,
				description: article.description,
				url: pageUrl,
				meta: article.meta,
				sources: article.sources,
			})),
		},
		...(article.breadcrumbs?.length
			? [{
					type: `application/ld+json` as const,
					innerHTML: JSON.stringify(buildBreadcrumbStructuredData({
						items: article.breadcrumbs,
						baseUrl: requestUrl.origin,
					})),
				}]
			: []),
		...(article.faqs?.length
			? [{
					type: `application/ld+json` as const,
					innerHTML: JSON.stringify(buildFAQStructuredData({ faqs: article.faqs })),
				}]
			: []),
	],
});
</script>

<template>
	<Container width="site">
		<QuestionPage>
			<template #header>
				<Breadcrumbs
					v-if="article.breadcrumbs"
					:items="article.breadcrumbs"
				/>
				<Hero
					:eyebrow="article.eyebrow"
					:title="article.title"
					:description="article.description"
				/>
				<ArticleMeta
					v-if="article.meta"
					:meta="article.meta"
				/>
				<StoryInBrief
					v-if="article.description"
					:text="article.description"
				/>
			</template>

			<template
				v-if="article.tableOfContents?.length"
				#tableOfContents
			>
				<TableOfContents :items="article.tableOfContents" />
			</template>

			<Definition
				id="definition"
				title="Definition"
			>
				<Prose>
					<p>
						An editorial system is a structured way to publish helpful, question-led content using reusable presentation components, semantic markup, and project-specific data — without locking you into a single CMS or content model.
					</p>
				</Prose>
			</Definition>

			<HowItWorks
				id="how-it-works"
				title="How it works"
			>
				<Prose>
					<p>
						Route groups mirror common search prefixes. Templates provide editorial sections. Blocks compose listing and navigation patterns. Each project wires its own content source into this presentation layer.
					</p>
				</Prose>
			</HowItWorks>

			<Benefits
				id="benefits"
				title="Benefits"
			>
				<Prose>
					<ul>
						<li>Consistent reader experience across question types</li>
						<li>Accessible, token-driven styling without utility sprawl in components</li>
						<li>SEO-friendly structure with structured data helpers</li>
					</ul>
				</Prose>
			</Benefits>

			<PracticalTips
				id="practical-tips"
				title="Practical tips"
			>
				<Prose>
					<ol>
						<li>Start from the example article and replace sections incrementally.</li>
						<li>Keep TableOfContents as the only scroll-spy on the page.</li>
						<li>Add sources and reviewer metadata when content is evidence-based.</li>
					</ol>
				</Prose>
			</PracticalTips>

			<template #supporting>
				<FAQs
					v-if="article.faqs?.length"
					id="faqs"
					title="FAQs"
					:items="article.faqs"
				/>
				<SourcesList
					v-if="article.sources?.length"
					id="sources"
					:sources="article.sources"
				/>
				<AuthorBox
					v-if="article.meta?.author"
					:author="article.meta.author"
				/>
				<ContentDisclaimer
					text="This base provides editorial structure and examples. Replace with project-specific guidance reviewed by qualified professionals where applicable."
				/>
			</template>

			<template #related>
				<RelatedQuestions
					v-if="article.relatedQuestions?.length"
					:items="article.relatedQuestions"
				/>
			</template>
		</QuestionPage>
	</Container>
</template>
