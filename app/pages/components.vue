<script setup lang="ts">
import {
	articleLinks,
	articleMeta,
	badgeVariants,
	breadcrumbs,
	buttonSizes,
	buttonVariants,
	cardVariants,
	checklistItems,
	comparisonColumns,
	comparisonRows,
	decisionTree,
	faqs,
	knowledgeEdges,
	knowledgeNodes,
	navItems,
	quickFacts,
	relatedQuestions,
	reviewer,
	selectOptions,
	sources,
	timelineEvents,
	tocItems,
	author,
} from '~/features/component-showcase/showcase.fixtures';

const selectValue = ref(`published`);
const email = ref(`reader@example.com`);
const search = ref(`variants`);
const agreed = ref(true);
const activeFilter = ref(`all`);
const disclosureOpen = ref(true);

const filterOptions = [
	{ id: `all`, label: `All` },
	{ id: `primitives`, label: `Primitives` },
	{ id: `blocks`, label: `Blocks` },
	{ id: `templates`, label: `Templates` },
];

const blockDemoProps = computed(() => ({
	items: articleLinks,
	title: `Shared card-list block`,
	description: `This block uses the same item fixture as the other card-based block examples.`,
}));

useSeoMeta({
	title: `Component showcase`,
	description: `A working preview of primitive, block, and template components using shared system fixtures.`,
});
</script>

<template>
	<Container>
		<div class="component-showcase">
			<Hero
				title="Component showcase"
				description="A working system page for checking primitives, blocks, template patterns, states, and shared styling in the running app."
				eyebrow="Design system"
			>
				<template #meta>
					<span>Shared primitive types</span>
					<span>Shared fixtures</span>
					<span>Token-driven CSS</span>
				</template>
			</Hero>

			<Breadcrumbs :items="breadcrumbs" />
			<QuickNavigationCards
				title="Jump to"
				:items="navItems.map(item => ({ id: item.to, label: item.label, to: item.to }))"
			/>

			<section
				id="primitives"
				class="component-showcase__section"
			>
				<SectionHeading
					title="Primitives"
					description="Core UI elements. Variants are typed in one shared primitive source and rendered from fixture arrays."
				/>

				<Card class="component-showcase__panel">
					<h3>Buttons</h3>
					<div class="component-showcase__row">
						<Button
							v-for="item in buttonVariants"
							:key="item.variant"
							:variant="item.variant"
						>
							{{ item.label }}
						</Button>
					</div>
					<div class="component-showcase__row">
						<Button
							v-for="item in buttonSizes"
							:key="item.size"
							:size="item.size"
							variant="outlined"
						>
							{{ item.label }}
						</Button>
						<Button loading>
							Loading
						</Button>
						<Button disabled>
							Disabled
						</Button>
					</div>
				</Card>

				<div class="component-showcase__card-grid">
					<Card
						v-for="item in cardVariants"
						:key="item.variant"
						:variant="item.variant"
						:raised="item.variant === 'featured'"
					>
						<Badge :variant="item.variant === 'informational' ? 'info' : item.variant === 'featured' ? 'success' : item.variant">
							{{ item.label }}
						</Badge>
						<h3>{{ item.label }} card</h3>
						<p>{{ item.description }}</p>
					</Card>
				</div>

				<Card class="component-showcase__panel">
					<h3>Labels, controls, and feedback</h3>
					<div class="component-showcase__row">
						<Badge
							v-for="item in badgeVariants"
							:key="item.variant"
							:variant="item.variant"
						>
							{{ item.label }}
						</Badge>
						<Tag>Static tag</Tag>
						<Tag href="/components">
							Linked tag
						</Tag>
					</div>
					<div class="component-showcase__row">
						<IconButton label="Add item">
							+
						</IconButton>
						<IconButton
							label="More options"
							variant="ghost"
						>
							...
						</IconButton>
						<Divider />
					</div>
					<div class="component-showcase__form">
						<Input
							id="showcase-email"
							v-model="email"
							label="Email"
							type="email"
							hint="Input state is bound on the page."
						/>
						<Select
							id="showcase-status"
							v-model="selectValue"
							label="Status"
							:options="selectOptions"
							hint="Select options come from the fixture file."
						/>
						<Checkbox
							id="showcase-checkbox"
							v-model="agreed"
							label="Include component states"
						/>
						<ProgressBar
							:value="72"
							label="System coverage"
						/>
					</div>
					<Disclosure
						id="showcase-disclosure"
						v-model:open="disclosureOpen"
						label="Disclosure component"
					>
						<p>This panel demonstrates the expandable primitive using bound open state.</p>
					</Disclosure>
					<LoadingState label="Loading state block with skeleton primitives" />
					<VisuallyHidden>Hidden accessibility text example.</VisuallyHidden>
				</Card>
			</section>

			<section
				id="blocks"
				class="component-showcase__section"
			>
				<SectionHeading
					title="Blocks"
					description="Reusable page sections. Card-list families are rendered dynamically from the same fixture to keep examples consistent."
				/>

				<Card class="component-showcase__panel">
					<h3>Navigation and search</h3>
					<SearchBox
						id="showcase-search"
						v-model="search"
						placeholder="Search system components"
					/>
					<Pagination
						:items="[
							{ label: 'Previous', disabled: true },
							{ label: '1', to: '/components', current: true },
							{ label: '2', to: '/components' },
							{ label: 'Next', to: '/components' },
						]"
					/>
					<InteractiveFilters
						v-model="activeFilter"
						:options="filterOptions"
						label="Component categories"
					/>
				</Card>

				<div class="component-showcase__block-grid">
					<Card class="component-showcase__panel">
						<PopularQuestions v-bind="blockDemoProps" />
					</Card>
					<Card class="component-showcase__panel">
						<Collections v-bind="blockDemoProps" />
					</Card>
					<Card class="component-showcase__panel">
						<ReadingPaths v-bind="blockDemoProps" />
					</Card>
					<Card class="component-showcase__panel">
						<RecentlyUpdated v-bind="blockDemoProps" />
					</Card>
					<Card class="component-showcase__panel">
						<ContinueLearning v-bind="blockDemoProps" />
					</Card>
					<Card class="component-showcase__panel">
						<FeaturedSeries v-bind="blockDemoProps" />
					</Card>
					<Card class="component-showcase__panel">
						<IfYouLikeThis v-bind="blockDemoProps" />
					</Card>
					<Card class="component-showcase__panel">
						<Leaderboards v-bind="blockDemoProps" />
					</Card>
					<Card class="component-showcase__panel">
						<StarterPacks v-bind="blockDemoProps" />
					</Card>
					<Card class="component-showcase__panel">
						<TopicExplorer v-bind="blockDemoProps" />
					</Card>
					<Card class="component-showcase__panel">
						<Timelines v-bind="blockDemoProps" />
					</Card>
					<Card class="component-showcase__panel">
						<ReadingTimeBundles v-bind="blockDemoProps" />
					</Card>
				</div>

				<Card class="component-showcase__panel">
					<h3>Structured blocks</h3>
					<ContentCard
						title="Content card"
						description="The base card used by many list blocks."
						to="/components"
						eyebrow="Block"
					/>
					<InsightBoxes
						:items="[
							{ id: 'one-source', title: 'Single source', body: 'Fixtures, labels, and options are centralized for this page.' },
							{ id: 'tokens', title: 'Token use', body: 'Page styling references the same CSS variables as the components.' },
						]"
					/>
					<MythVsReality
						title="Myth vs reality"
						:items="[{ id: 'm1', myth: 'A showcase can be static screenshots.', reality: 'It should render the real components in the app shell.' }]"
					/>
					<DecisionTrees
						title="Decision trees"
						:items="[{ id: 'tree', title: 'Choose a component layer', root: decisionTree }]"
					/>
					<KnowledgeMaps
						title="Knowledge maps"
						:items="[{ id: 'map', title: 'System dependencies', nodes: knowledgeNodes, edges: knowledgeEdges }]"
					/>
				</Card>

				<Card class="component-showcase__panel">
					<h3>Tables, media, and states</h3>
					<ComparisonTables
						title="Comparison tables"
						:items="[{ id: 'comparison', title: 'Layer comparison', columns: comparisonColumns, rows: comparisonRows }]"
					/>
					<ResponsiveTable caption="Responsive table">
						<thead>
							<tr>
								<th scope="col">
									Component
								</th>
								<th scope="col">
									Layer
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Button</td>
								<td>Primitive</td>
							</tr>
							<tr>
								<td>Checklist</td>
								<td>Template</td>
							</tr>
						</tbody>
					</ResponsiveTable>
					<Figure caption="Figure component with token-styled media">
						<div class="component-showcase__media-demo" />
					</Figure>
					<VisualGalleries
						title="Visual galleries"
						:items="[
							{ id: 'one', caption: 'Primary surface' },
							{ id: 'two', caption: 'Muted surface' },
						]"
					>
						<template #one>
							<div class="component-showcase__swatch component-showcase__swatch--brand" />
						</template>
						<template #two>
							<div class="component-showcase__swatch component-showcase__swatch--muted" />
						</template>
					</VisualGalleries>
					<div class="component-showcase__state-grid">
						<EmptyState
							title="Empty state"
							description="Nothing has been selected yet."
						>
							<Button variant="tonal">
								Add item
							</Button>
						</EmptyState>
						<ErrorState
							:status-code="500"
							title="Error state"
							description="The fallback component keeps actions visible."
						>
							<Button variant="outlined">
								Retry
							</Button>
						</ErrorState>
					</div>
				</Card>
			</section>

			<section
				id="templates"
				class="component-showcase__section"
			>
				<SectionHeading
					title="Article templates"
					description="Content templates are rendered with the same sample article data so their behavior can be compared in one place."
				/>

				<Card class="component-showcase__panel">
					<h3>Article shell and metadata</h3>
					<ArticleMeta :meta="articleMeta" />
					<TableOfContents
						:items="tocItems"
						label="Showcase contents"
					/>
					<StoryInBrief text="This page uses one fixture module for sample content and shared primitive type modules for variant values." />
					<QuickFacts
						title="Quick facts"
						:facts="quickFacts"
					/>
				</Card>

				<div class="component-showcase__template-grid">
					<Definition title="Definition">
						<Prose>
							<p>This template renders real slot content inside production styling.</p>
						</Prose>
					</Definition>
					<HowItWorks title="How it works">
						<Prose>
							<p>The wrapper owns spacing and heading treatment.</p>
						</Prose>
					</HowItWorks>
					<Causes title="Causes">
						<Prose>
							<p>Template shells support structured editorial sections.</p>
						</Prose>
					</Causes>
					<Signs title="Signs">
						<Prose>
							<p>Each section uses its component CSS class.</p>
						</Prose>
					</Signs>
					<Benefits title="Benefits">
						<Prose>
							<p>Content stays portable while styling stays local to the component.</p>
						</Prose>
					</Benefits>
					<Risks title="Risks">
						<Prose>
							<p>Risk sections use the same slot pattern as other templates.</p>
						</Prose>
					</Risks>
					<SideEffects title="Side effects">
						<Prose>
							<p>Article sections render in the same grid as the system page.</p>
						</Prose>
					</SideEffects>
					<SuitableFor title="Suitable for">
						<Prose>
							<p>Reusable shell for suitability guidance.</p>
						</Prose>
					</SuitableFor>
					<AvoidIf title="Avoid if">
						<Prose>
							<p>Warning-oriented template content can be previewed here.</p>
						</Prose>
					</AvoidIf>
					<CompatibleIngredients title="Compatible ingredients">
						<Prose>
							<p>Compatibility sections share the same prose primitives.</p>
						</Prose>
					</CompatibleIngredients>
					<AvoidCombining title="Avoid combining">
						<Prose>
							<p>Combining guidance uses a dedicated template wrapper.</p>
						</Prose>
					</AvoidCombining>
					<RoutineSteps title="Routine steps">
						<Prose>
							<p>Step-based content stays in a reusable shell.</p>
						</Prose>
					</RoutineSteps>
					<IngredientSpotlight title="Ingredient spotlight">
						<Prose>
							<p>Spotlight content renders as a template component.</p>
						</Prose>
					</IngredientSpotlight>
					<ProductChecklist title="Product checklist">
						<Prose>
							<p>Product guidance can reuse the article section style.</p>
						</Prose>
					</ProductChecklist>
					<RedFlags title="Red flags">
						<Prose>
							<p>Red-flag sections stay visually consistent across articles.</p>
						</Prose>
					</RedFlags>
					<GreenFlags title="Green flags">
						<Prose>
							<p>Positive guidance uses the paired template wrapper.</p>
						</Prose>
					</GreenFlags>
					<MythsReality title="Myths reality">
						<Prose>
							<p>This template is separate from the block-level myth vs reality list.</p>
						</Prose>
					</MythsReality>
					<CommonMistakes title="Common mistakes">
						<Prose>
							<p>Mistake lists can be authored with shared prose.</p>
						</Prose>
					</CommonMistakes>
					<PracticalTips title="Practical tips">
						<Prose>
							<p>Tips use the same heading and content shell pattern.</p>
						</Prose>
					</PracticalTips>
					<KeyTakeaways title="Key takeaways">
						<Prose>
							<p>Takeaways render as a dedicated template section.</p>
						</Prose>
					</KeyTakeaways>
					<BeforeAfterConcept title="Before after concept">
						<Prose>
							<p>Conceptual comparison content renders with its disclaimer.</p>
						</Prose>
					</BeforeAfterConcept>
				</div>

				<Card class="component-showcase__panel">
					<h3>Interactive article templates</h3>
					<Checklist
						title="Checklist"
						:items="checklistItems"
					/>
					<FAQs
						title="FAQs"
						:items="faqs"
					/>
					<EvidenceBadge
						label="Moderate evidence"
						explanation="The disclosure is part of the evidence badge component."
					/>
					<ScientificEvidence
						title="Scientific evidence"
						summary="Evidence components can render summary, strength, limitations, uncertainty, and references from structured props."
						strength="Moderate"
						limitations="Examples are illustrative and use local fixture content."
						uncertainty="Production content should cite actual sources."
						:references="sources"
					/>
					<Timeline
						title="Timeline"
						:events="timelineEvents"
					/>
					<Comparison
						title="Comparison"
						:columns="comparisonColumns"
						:rows="comparisonRows"
					/>
					<KnowledgeGraph
						title="Knowledge graph"
						:nodes="knowledgeNodes"
						:edges="knowledgeEdges"
					/>
				</Card>

				<Card class="component-showcase__panel">
					<h3>Article support components</h3>
					<AuthorBox :author="author" />
					<ReviewerBox :reviewer="reviewer" />
					<ContentDisclaimer text="This is a component preview and not production editorial guidance." />
					<CorrectionNotice
						text="Updated the showcase to use centralized fixtures."
						corrected-at="August 1, 2026"
					/>
					<VisualExplanation
						title="Visual explanation"
						caption="Visual explanation media slot."
					>
						<div class="component-showcase__media-demo component-showcase__media-demo--compact" />
					</VisualExplanation>
					<Citation
						:citation="{ sourceId: 'source-tokens', label: 'Local source' }"
						:sources="sources"
					/>
					<SourcesList :sources="sources" />
					<RelatedQuestions :items="relatedQuestions" />
					<ArticleNavigation
						:previous="{ label: 'Home', to: '/' }"
						:next="{ label: 'Example article', to: '/what/is-an-editorial-system' }"
					/>
				</Card>
			</section>

			<section
				id="chrome"
				class="component-showcase__section"
			>
				<SectionHeading
					title="App chrome"
					description="Layout-level components are active on this page through the default layout."
				/>
				<Card class="component-showcase__panel">
					<Prose>
						<p>The page is wrapped by <code>SkipLink</code>, <code>SiteHeader</code>, and <code>SiteFooter</code>. The header and footer both consume the same navigation array from the layout, so the Components link is defined once there.</p>
					</Prose>
				</Card>
			</section>
		</div>
	</Container>
</template>

<style scoped>
.component-showcase {
	display: grid;
	gap: 2.5rem;
	padding-block: 3rem 4rem;
}

.component-showcase__section {
	display: grid;
	gap: 1rem;
}

.component-showcase__panel {
	display: grid;
	gap: 1rem;
}

.component-showcase__panel h3,
.component-showcase__card-grid h3 {
	margin: 0;
}

.component-showcase__panel p,
.component-showcase__card-grid p {
	margin: 0;
	color: var(--color-text-secondary);
}

.component-showcase__row {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 0.75rem;
}

.component-showcase__card-grid,
.component-showcase__block-grid,
.component-showcase__template-grid,
.component-showcase__state-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
	gap: 1rem;
}

.component-showcase__card-grid .card {
	display: grid;
	align-content: start;
	gap: 0.75rem;
	min-height: 12rem;
}

.component-showcase__card-grid .badge {
	justify-self: start;
}

.component-showcase__form {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr));
	gap: 1rem;
	align-items: start;
}

.component-showcase__block-grid {
	align-items: start;
}

.component-showcase__template-grid {
	align-items: start;
}

.component-showcase__template-grid > * {
	margin: 0;
}

.component-showcase__media-demo {
	min-height: 12rem;
	border: 1px solid var(--color-border);
	border-radius: var(--radius-md);
	background:
		linear-gradient(135deg, rgb(30 77 58 / 0.14), transparent 40%),
		linear-gradient(45deg, var(--color-surface-muted), var(--color-surface));
}

.component-showcase__media-demo--compact {
	min-height: 8rem;
}

.component-showcase__swatch {
	aspect-ratio: 4 / 3;
}

.component-showcase__swatch--brand {
	background: rgb(30 77 58 / 0.18);
}

.component-showcase__swatch--muted {
	background: var(--color-surface-muted);
}
</style>
