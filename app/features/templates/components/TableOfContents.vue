<script setup lang="ts">
import type { TableOfContentsItem } from '~/features/templates/template.types';

const props = defineProps<{ items: TableOfContentsItem[]; label?: string }>();

const activeId = ref(props.items[0]?.id ?? ``);
const mobileOpen = ref(false);
const prefersReducedMotion = ref(false);
let observer: IntersectionObserver | undefined;

onMounted(() => {
	prefersReducedMotion.value = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;

	const headings = props.items
		.map(item => document.getElementById(item.id))
		.filter((el): el is HTMLElement => el !== null);

	if (!headings.length) return;

	observer = new IntersectionObserver(
		(entries) => {
			const visible = entries
				.filter(entry => entry.isIntersecting)
				.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
			if (visible[0]?.target.id) {
				activeId.value = visible[0].target.id;
				if (typeof history !== `undefined` && history.replaceState) {
					history.replaceState(null, ``, `#${visible[0].target.id}`);
				}
			}
		},
		{ rootMargin: `-20% 0px -60% 0px`, threshold: [0, 0.25, 0.5, 1] },
	);

	for (const heading of headings) {
		observer.observe(heading);
	}
});

onUnmounted(() => {
	observer?.disconnect();
});

function scrollToSection(id: string, event: Event) {
	event.preventDefault();
	const el = document.getElementById(id);
	if (!el) return;
	activeId.value = id;
	el.focus({ preventScroll: true });
	el.scrollIntoView({ behavior: prefersReducedMotion.value ? `auto` : `smooth`, block: `start` });
	if (typeof history !== `undefined` && history.replaceState) {
		history.replaceState(null, ``, `#${id}`);
	}
	mobileOpen.value = false;
}
</script>

<template>
	<nav
		class="toc"
		:aria-label="label || 'Table of contents'"
	>
		<button
			type="button"
			class="toc__toggle"
			:aria-expanded="mobileOpen"
			aria-controls="toc-nav"
			@click="mobileOpen = !mobileOpen"
		>
			<span>{{ label || 'On this page' }}</span>
			<span aria-hidden="true">{{ mobileOpen ? '▲' : '▼' }}</span>
		</button>
		<div
			id="toc-nav"
			class="toc__nav"
			:class="mobileOpen && 'toc__nav--open'"
		>
			<ul
				class="toc__list"
				role="list"
			>
				<li
					v-for="item in items"
					:key="item.id"
					role="listitem"
				>
					<a
						:href="`#${item.id}`"
						class="toc__link"
						:class="[
							item.level === 3 && 'toc__link--level-3',
							activeId === item.id && 'toc__link--active',
						]"
						:aria-current="activeId === item.id ? 'location' : undefined"
						@click="scrollToSection(item.id, $event)"
					>{{ item.label }}</a>
				</li>
			</ul>
		</div>
	</nav>
</template>
