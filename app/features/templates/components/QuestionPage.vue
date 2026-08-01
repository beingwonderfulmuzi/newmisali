<script setup lang="ts">
withDefaults(defineProps<{ sidebar?: boolean }>(), { sidebar: true });
</script>

<template>
	<article class="question-page">
		<div
			class="question-page__layout"
			:class="sidebar && 'question-page__layout--sidebar'"
		>
			<div class="question-page__main">
				<header
					v-if="$slots.header"
					class="question-page__header"
				>
					<slot name="header" />
				</header>
				<div
					v-if="$slots.summary"
					class="question-page__summary"
				>
					<slot name="summary" />
				</div>
				<aside
					v-if="$slots.tableOfContents && !sidebar"
					class="question-page__toc-mobile"
				>
					<slot name="tableOfContents" />
				</aside>
				<div class="question-page__content">
					<slot />
				</div>
				<aside
					v-if="$slots.supporting"
					class="question-page__supporting"
				>
					<slot name="supporting" />
				</aside>
				<aside
					v-if="$slots.related"
					class="question-page__related"
				>
					<slot name="related" />
				</aside>
			</div>
			<aside
				v-if="sidebar && $slots.tableOfContents"
				class="question-page__sidebar"
			>
				<slot name="tableOfContents" />
			</aside>
		</div>
	</article>
</template>
