import type { RouteGroup } from '../route-group.types';

export interface ArticleAuthor {
	name: string;
	role?: string;
	bio?: string;
	credentials?: string[];
	profileUrl?: string;
}

export interface ArticleReviewer {
	name: string;
	role?: string;
	bio?: string;
	credentials?: string[];
	profileUrl?: string;
}

export interface ArticleSource {
	id: string;
	title: string;
	url?: string;
	publisher?: string;
	publishedAt?: string;
	accessedAt?: string;
}

export interface ArticleCitation {
	sourceId: string;
	label?: string;
}

export interface BreadcrumbItem {
	label: string;
	to?: string;
}

export interface TableOfContentsItem {
	id: string;
	label: string;
	level?: 2 | 3;
}

export interface FAQItem {
	id: string;
	question: string;
	answer: string;
}

export interface ArticleMetaData {
	publishedAt?: string;
	updatedAt?: string;
	reviewedAt?: string;
	readingTimeMinutes?: number;
	author?: ArticleAuthor;
	reviewer?: ArticleReviewer;
}

export interface RelatedQuestion {
	routeGroup: RouteGroup;
	slug: string;
	title: string;
	description?: string;
}

export interface QuestionArticle {
	routeGroup: RouteGroup;
	slug: string;
	title: string;
	description?: string;
	eyebrow?: string;
	meta?: ArticleMetaData;
	breadcrumbs?: BreadcrumbItem[];
	tableOfContents?: TableOfContentsItem[];
	faqs?: FAQItem[];
	sources?: ArticleSource[];
	relatedQuestions?: RelatedQuestion[];
}

export interface EvidenceLevel {
	label: string;
	description?: string;
}

export interface ComparisonColumn {
	key: string;
	label: string;
}

export interface ComparisonRow {
	label: string;
	values: Record<string, string>;
}

export interface DecisionTreeNode {
	id: string;
	label: string;
	description?: string;
	children?: DecisionTreeNode[];
	isTerminal?: boolean;
	recommendation?: string;
}

export interface KnowledgeGraphNode {
	id: string;
	label: string;
	description?: string;
}

export interface KnowledgeGraphEdge {
	from: string;
	to: string;
	label?: string;
}

export interface ChecklistItem {
	id: string;
	label: string;
	description?: string;
	checked?: boolean;
}

export interface TimelineEvent {
	id: string;
	date: string;
	title: string;
	description?: string;
}

export interface QuickFact {
	label: string;
	value: string;
}

export interface ArticleNavigationItem {
	label: string;
	to: string;
}

export type TemplateSectionVariant
	= | `definition`
		| `how-it-works`
		| `causes`
		| `signs`
		| `benefits`
		| `risks`
		| `side-effects`
		| `suitable-for`
		| `avoid-if`
		| `compatible-ingredients`
		| `avoid-combining`
		| `routine-steps`
		| `ingredient-spotlight`
		| `product-checklist`
		| `red-flags`
		| `green-flags`
		| `myths-reality`
		| `common-mistakes`
		| `practical-tips`
		| `key-takeaways`
		| `before-after-concept`;

export interface TemplateSectionProps {
	id?: string;
	title?: string;
	headingLevel?: 2 | 3;
}
