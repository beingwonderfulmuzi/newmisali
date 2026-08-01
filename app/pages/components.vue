<script setup lang="ts">
const selectValue = ref(`published`);
const email = ref(`reader@example.com`);
const agreed = ref(true);

const selectOptions = [
	{ value: `draft`, label: `Draft` },
	{ value: `review`, label: `Review` },
	{ value: `published`, label: `Published` },
];

useSeoMeta({
	title: `Component showcase`,
	description: `A working preview of primitive component variants and states.`,
});
</script>

<template>
	<Container>
		<div class="component-showcase">
			<header class="component-showcase__header">
				<Tag>Design system</Tag>
				<h1>Component showcase</h1>
				<p>
					A practical page for checking primitive components, variants, sizes, and common states in the running app.
				</p>
			</header>

			<section class="component-showcase__section">
				<div class="component-showcase__section-header">
					<h2>Buttons</h2>
					<p>Primary actions, softer emphasis, outlines, and low-emphasis text actions.</p>
				</div>
				<div class="component-showcase__surface">
					<div class="component-showcase__row">
						<Button>Primary</Button>
						<Button variant="tonal">
							Tonal
						</Button>
						<Button variant="outlined">
							Outlined
						</Button>
						<Button variant="text">
							Text
						</Button>
					</div>
					<div class="component-showcase__row">
						<Button size="sm">
							Small
						</Button>
						<Button>Medium</Button>
						<Button size="lg">
							Large
						</Button>
						<Button loading>
							Loading
						</Button>
						<Button disabled>
							Disabled
						</Button>
					</div>
				</div>
			</section>

			<section class="component-showcase__section">
				<div class="component-showcase__section-header">
					<h2>Cards</h2>
					<p>Default containers plus contextual and featured treatments.</p>
				</div>
				<div class="component-showcase__card-grid">
					<Card>
						<Badge>Default</Badge>
						<h3>Standard card</h3>
						<p>Neutral surface for regular grouped content and repeated items.</p>
					</Card>
					<Card variant="informational">
						<Badge variant="info">
							Informational
						</Badge>
						<h3>Useful context</h3>
						<p>Soft blue emphasis for notes, definitions, and supporting guidance.</p>
					</Card>
					<Card variant="featured">
						<Badge variant="success">
							Featured
						</Badge>
						<h3>Highlighted item</h3>
						<p>Raised treatment for recommended content, pinned blocks, and key calls to action.</p>
					</Card>
					<Card variant="warning">
						<Badge variant="warning">
							Warning
						</Badge>
						<h3>Needs attention</h3>
						<p>Warm treatment for caveats, limits, and decisions that need extra care.</p>
					</Card>
				</div>
			</section>

			<section class="component-showcase__section">
				<div class="component-showcase__section-header">
					<h2>Badges and tags</h2>
					<p>Compact labels for status, metadata, and filters.</p>
				</div>
				<div class="component-showcase__surface">
					<div class="component-showcase__row">
						<Badge>Default</Badge>
						<Badge variant="success">
							Success
						</Badge>
						<Badge variant="warning">
							Warning
						</Badge>
						<Badge variant="danger">
							Danger
						</Badge>
						<Badge variant="info">
							Info
						</Badge>
					</div>
					<div class="component-showcase__row">
						<Tag>Static tag</Tag>
						<Tag href="/components">
							Linked tag
						</Tag>
						<Tag>Editorial</Tag>
						<Tag>Reusable</Tag>
					</div>
				</div>
			</section>

			<section class="component-showcase__section">
				<div class="component-showcase__section-header">
					<h2>Form controls</h2>
					<p>Input, select, checkbox, and progress components with real state bound on the page.</p>
				</div>
				<div class="component-showcase__surface component-showcase__form">
					<Input
						id="showcase-email"
						v-model="email"
						label="Email"
						type="email"
						hint="Used to preview the input component."
					/>
					<Select
						id="showcase-status"
						v-model="selectValue"
						label="Status"
						:options="selectOptions"
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

.component-showcase__header {
	max-width: 44rem;
}

.component-showcase__header h1,
.component-showcase__section-header h2,
.component-showcase__card-grid h3 {
	margin-block: 0 0.5rem;
}

.component-showcase__header p,
.component-showcase__section-header p,
.component-showcase__card-grid p {
	margin: 0;
	color: var(--color-text-secondary);
}

.component-showcase__header .tag {
	margin-block-end: 0.75rem;
}

.component-showcase__section {
	display: grid;
	gap: 1rem;
}

.component-showcase__section-header {
	max-width: 38rem;
}

.component-showcase__surface {
	display: grid;
	gap: 1rem;
	padding: 1rem;
	border: 1px solid var(--color-border);
	border-radius: var(--radius-lg);
	background: var(--color-surface);
	box-shadow: var(--shadow-subtle);
}

.component-showcase__row {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 0.75rem;
}

.component-showcase__card-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
	gap: 1rem;
}

.component-showcase__card-grid .card {
	display: grid;
	align-content: start;
	gap: 0.75rem;
	min-height: 13rem;
}

.component-showcase__card-grid .badge {
	justify-self: start;
}

.component-showcase__form {
	grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr));
	align-items: start;
}
</style>
