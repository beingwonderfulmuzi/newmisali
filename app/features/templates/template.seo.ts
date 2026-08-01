import type {
	ArticleAuthor,
	ArticleMetaData,
	ArticleReviewer,
	ArticleSource,
	BreadcrumbItem,
	FAQItem,
} from './template.types';

interface ArticleStructuredDataInput {
	title: string;
	description?: string;
	url: string;
	meta?: ArticleMetaData;
	sources?: ArticleSource[];
}

interface FAQStructuredDataInput {
	faqs: FAQItem[];
}

interface BreadcrumbStructuredDataInput {
	items: BreadcrumbItem[];
	baseUrl: string;
}

function authorToSchema(author: ArticleAuthor) {
	const schema: Record<string, string | string[]> = {
		'@type': `Person`,
		'name': author.name,
	};
	if (author.role) {
		schema.jobTitle = author.role;
	}
	if (author.profileUrl) {
		schema.url = author.profileUrl;
	}
	return schema;
}

export function buildArticleStructuredData(input: ArticleStructuredDataInput) {
	const schema: Record<string, unknown> = {
		'@context': `https://schema.org`,
		'@type': `Article`,
		'headline': input.title,
		'mainEntityOfPage': input.url,
	};

	if (input.description) {
		schema.description = input.description;
	}

	if (input.meta?.publishedAt) {
		schema.datePublished = input.meta.publishedAt;
	}

	if (input.meta?.updatedAt) {
		schema.dateModified = input.meta.updatedAt;
	}

	if (input.meta?.author) {
		schema.author = authorToSchema(input.meta.author);
	}

	if (input.meta?.reviewer) {
		schema.reviewedBy = authorToSchema(input.meta.reviewer as ArticleReviewer);
	}

	if (input.sources?.length) {
		schema.citation = input.sources
			.filter(source => source.title)
			.map(source => ({
				'@type': `CreativeWork`,
				'name': source.title,
				...(source.url ? { url: source.url } : {}),
				...(source.publisher ? { publisher: { '@type': `Organization`, 'name': source.publisher } } : {}),
			}));
	}

	return schema;
}

export function buildFAQStructuredData(input: FAQStructuredDataInput) {
	return {
		'@context': `https://schema.org`,
		'@type': `FAQPage`,
		'mainEntity': input.faqs.map(faq => ({
			'@type': `Question`,
			'name': faq.question,
			'acceptedAnswer': {
				'@type': `Answer`,
				'text': faq.answer,
			},
		})),
	};
}

export function buildBreadcrumbStructuredData(input: BreadcrumbStructuredDataInput) {
	const itemListElement = input.items.map((item, index) => {
		const entry: Record<string, unknown> = {
			'@type': `ListItem`,
			'position': index + 1,
			'name': item.label,
		};
		if (item.to) {
			entry.item = item.to.startsWith(`http`) ? item.to : `${input.baseUrl}${item.to}`;
		}
		return entry;
	});

	return {
		'@context': `https://schema.org`,
		'@type': `BreadcrumbList`,
		itemListElement,
	};
}
