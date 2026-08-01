<script setup lang="ts">
import type { NavLink } from './SiteHeader.vue';

const props = withDefaults(defineProps<{
	siteName?: string;
	description?: string;
	navLinks?: NavLink[];
}>(), {
	navLinks: () => [],
});

const appConfig = useAppConfig();
const siteName = computed(() => props.siteName ?? appConfig.site.name);
const description = computed(() => props.description ?? appConfig.site.description);
const year = new Date().getFullYear();
</script>

<template>
	<footer class="site-footer">
		<Container class="site-footer__inner">
			<div>
				<p class="site-footer__brand">
					{{ siteName }}
				</p>
				<p
					v-if="description"
					class="site-footer__desc"
				>
					{{ description }}
				</p>
			</div>
			<nav
				v-if="navLinks.length"
				class="site-footer__nav"
				aria-label="Footer"
			>
				<ul class="site-footer__list">
					<li
						v-for="link in navLinks"
						:key="link.to"
					>
						<NuxtLink
							:to="link.to"
							class="site-footer__link"
						>{{ link.label }}</NuxtLink>
					</li>
				</ul>
			</nav>
			<p class="site-footer__copy">
				&copy; {{ year }} {{ siteName }}
			</p>
		</Container>
	</footer>
</template>
