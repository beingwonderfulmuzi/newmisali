<script setup lang="ts">
import type { NavLink } from './SiteHeader.vue';
import { school } from '~/data/school';

const props = withDefaults(defineProps<{ siteName?: string; description?: string; navLinks?: NavLink[] }>(), { navLinks: () => [] });
const appConfig = useAppConfig();
const siteName = computed(() => props.siteName ?? appConfig.site.name);
const description = computed(() => props.description ?? appConfig.site.description);
const year = new Date().getFullYear();
</script>

<template>
	<footer class="site-footer">
		<Container>
			<div class="site-footer__inner">
				<div>
					<p class="eyebrow">
						Dera Ghazi Khan · Punjab
					</p><p class="site-footer__brand">
						{{ siteName }}
					</p><p class="site-footer__desc">
						{{ description }}
					</p><a
						:href="school.directions"
						target="_blank"
						rel="noopener noreferrer"
						class="site-footer__link"
					>Find directions ↗</a>
				</div>
				<nav aria-label="Footer">
					<p class="eyebrow">
						Explore the school
					</p><ul class="site-footer__list">
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
			</div>
			<div class="site-footer__bottom">
				<p>© {{ year }} {{ siteName }}. All rights reserved.</p><p>Learning. Character. Community.</p>
			</div>
		</Container>
	</footer>
</template>
