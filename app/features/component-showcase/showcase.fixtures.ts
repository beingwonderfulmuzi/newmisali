import type {
	ArticleAuthor,
	ArticleMetaData,
	ArticleReviewer,
	ArticleSource,
	BreadcrumbItem,
	ChecklistItem,
	ComparisonColumn,
	ComparisonRow,
	DecisionTreeNode,
	FAQItem,
	KnowledgeGraphEdge,
	KnowledgeGraphNode,
	QuickFact,
	RelatedQuestion,
	TableOfContentsItem,
	TimelineEvent,
} from '~/features/templates/template.types';
import type { BadgeVariant, ButtonSize, ButtonVariant, CardVariant } from '~/components/primitives/primitive.types';

export const buttonVariants: Array<{ label: string; variant: ButtonVariant }> = [
	{ label: `Primary`, variant: `primary` },
	{ label: `Tonal`, variant: `tonal` },
	{ label: `Outlined`, variant: `outlined` },
	{ label: `Text`, variant: `text` },
	{ label: `Secondary`, variant: `secondary` },
	{ label: `Ghost`, variant: `ghost` },
];

export const buttonSizes: Array<{ label: string; size: ButtonSize }> = [
	{ label: `Small`, size: `sm` },
	{ label: `Medium`, size: `md` },
	{ label: `Large`, size: `lg` },
];

export const badgeVariants: Array<{ label: string; variant: BadgeVariant }> = [
	{ label: `Default`, variant: `default` },
	{ label: `Success`, variant: `success` },
	{ label: `Warning`, variant: `warning` },
	{ label: `Danger`, variant: `danger` },
	{ label: `Info`, variant: `info` },
];

export const cardVariants: Array<{ label: string; variant: CardVariant; description: string }> = [
	{ label: `Default`, variant: `default`, description: `Neutral surface for regular grouped content.` },
	{ label: `Informational`, variant: `informational`, description: `Contextual note treatment for supporting guidance.` },
	{ label: `Featured`, variant: `featured`, description: `Higher emphasis treatment for recommended content.` },
	{ label: `Success`, variant: `success`, description: `Positive state for confirmed or completed items.` },
	{ label: `Warning`, variant: `warning`, description: `Attention state for caveats and important limits.` },
];

export const navItems = [
	{ label: `Primitives`, to: `#primitives` },
	{ label: `Blocks`, to: `#blocks` },
	{ label: `Templates`, to: `#templates` },
	{ label: `Chrome`, to: `#chrome` },
];

export const selectOptions = [
	{ value: `draft`, label: `Draft` },
	{ value: `review`, label: `Review` },
	{ value: `published`, label: `Published` },
];

export const articleLinks = [
	{
		id: `planning`,
		title: `Plan the component library`,
		description: `Audit usage, align props, and document expected states.`,
		to: `/components`,
		meta: `System`,
	},
	{
		id: `variants`,
		title: `Define variants once`,
		description: `Keep prop unions and visible examples aligned from one source.`,
		to: `/components`,
		meta: `Tokens`,
	},
	{
		id: `qa`,
		title: `Verify real pages`,
		description: `Run components in production-like layout instead of isolated screenshots.`,
		to: `/components`,
		meta: `QA`,
	},
];

export const breadcrumbs: BreadcrumbItem[] = [
	{ label: `Home`, to: `/` },
	{ label: `Design system`, to: `/components` },
	{ label: `Showcase` },
];

export const comparisonColumns: ComparisonColumn[] = [
	{ key: `primitive`, label: `Primitive` },
	{ key: `block`, label: `Block` },
	{ key: `template`, label: `Template` },
];

export const comparisonRows: ComparisonRow[] = [
	{
		label: `Scope`,
		values: {
			primitive: `Small UI element`,
			block: `Reusable page section`,
			template: `Article pattern`,
		},
	},
	{
		label: `Source`,
		values: {
			primitive: `components/primitives`,
			block: `components/blocks`,
			template: `features/templates/components`,
		},
	},
];

export const checklistItems: ChecklistItem[] = [
	{ id: `variants`, label: `Variants render from shared options`, checked: true },
	{ id: `states`, label: `Disabled, loading, selected, and empty states are visible`, checked: true },
	{ id: `tokens`, label: `Styling uses CSS tokens instead of page-specific colors` },
];

export const faqs: FAQItem[] = [
	{
		id: `showcase-faq-source`,
		question: `Where does the showcase content come from?`,
		answer: `The demo values live in one fixture module so examples, labels, and variants stay aligned.`,
	},
	{
		id: `showcase-faq-add`,
		question: `How should a new component be added?`,
		answer: `Add the component implementation, export any shared variant type, then add one fixture entry and one preview block.`,
	},
];

export const timelineEvents: TimelineEvent[] = [
	{ id: `audit`, date: `Step 1`, title: `Audit`, description: `Find every component and its required props.` },
	{ id: `centralize`, date: `Step 2`, title: `Centralize`, description: `Move shared variant options into typed source modules.` },
	{ id: `preview`, date: `Step 3`, title: `Preview`, description: `Render the components together in one page.` },
];

export const quickFacts: QuickFact[] = [
	{ label: `Primitive variants`, value: String(buttonVariants.length + badgeVariants.length + cardVariants.length) },
	{ label: `Block demos`, value: `30` },
	{ label: `Template demos`, value: `34` },
];

export const knowledgeNodes: KnowledgeGraphNode[] = [
	{ id: `tokens`, label: `Tokens`, description: `Color, spacing, shadow, and radius values` },
	{ id: `types`, label: `Types`, description: `Shared variant unions` },
	{ id: `fixtures`, label: `Fixtures`, description: `One demo data source` },
	{ id: `page`, label: `Showcase`, description: `Rendered examples` },
];

export const knowledgeEdges: KnowledgeGraphEdge[] = [
	{ from: `tokens`, to: `page`, label: `style` },
	{ from: `types`, to: `fixtures`, label: `validate` },
	{ from: `fixtures`, to: `page`, label: `render` },
];

export const decisionTree: DecisionTreeNode = {
	id: `start`,
	label: `Do you need a new UI element?`,
	description: `Start by checking the current system.`,
	children: [
		{
			id: `primitive`,
			label: `It is a small control`,
			recommendation: `Add or extend a primitive and keep variants in primitive.types.ts.`,
			isTerminal: true,
		},
		{
			id: `block`,
			label: `It is a reusable page section`,
			recommendation: `Build it as a block and wire it to shared content fixtures.`,
			isTerminal: true,
		},
	],
};

export const author: ArticleAuthor = {
	name: `Design Systems Team`,
	role: `Component maintainers`,
	bio: `Owns shared primitives, page blocks, and article templates.`,
	credentials: [`Accessibility review`, `Nuxt component patterns`],
};

export const reviewer: ArticleReviewer = {
	name: `Editorial QA`,
	role: `Reviewer`,
	bio: `Checks consistency between content fixtures, variants, and rendered states.`,
	credentials: [`Content systems`, `Pattern governance`],
};

export const articleMeta: ArticleMetaData = {
	publishedAt: `2026-07-01`,
	updatedAt: `2026-08-01`,
	reviewedAt: `2026-08-01`,
	readingTimeMinutes: 4,
	author,
	reviewer,
};

export const sources: ArticleSource[] = [
	{
		id: `source-tokens`,
		title: `Local design tokens`,
		publisher: `tinymaster`,
		url: `/components`,
	},
	{
		id: `source-components`,
		title: `Component source files`,
		publisher: `tinymaster`,
		url: `/components`,
	},
];

export const relatedQuestions: RelatedQuestion[] = [
	{
		routeGroup: `what`,
		slug: `is-an-editorial-system`,
		title: `What is an editorial system?`,
		description: `How reusable content patterns fit together.`,
	},
	{
		routeGroup: `why`,
		slug: `use-route-groups-for-content`,
		title: `Why use route groups for content?`,
		description: `How routes map to real search intent.`,
	},
];

export const tocItems: TableOfContentsItem[] = [
	{ id: `primitives`, label: `Primitives` },
	{ id: `blocks`, label: `Blocks` },
	{ id: `templates`, label: `Templates` },
	{ id: `chrome`, label: `Chrome` },
];

export const contentTemplateComponents = [
	`Definition`,
	`HowItWorks`,
	`Causes`,
	`Signs`,
	`Benefits`,
	`Risks`,
	`SideEffects`,
	`SuitableFor`,
	`AvoidIf`,
	`CompatibleIngredients`,
	`AvoidCombining`,
	`RoutineSteps`,
	`IngredientSpotlight`,
	`ProductChecklist`,
	`RedFlags`,
	`GreenFlags`,
	`MythsReality`,
	`CommonMistakes`,
	`PracticalTips`,
	`KeyTakeaways`,
	`BeforeAfterConcept`,
] as const;

export const blockDemoComponents = [
	`PopularQuestions`,
	`Collections`,
	`ReadingPaths`,
	`RecentlyUpdated`,
	`ContinueLearning`,
	`FeaturedSeries`,
	`IfYouLikeThis`,
	`Leaderboards`,
	`StarterPacks`,
	`TopicExplorer`,
	`Timelines`,
	`ReadingTimeBundles`,
] as const;
