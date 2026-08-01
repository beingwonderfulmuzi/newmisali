<script setup lang="ts">
export interface NavLink {
	label: string;
	to: string;
}

const props = withDefaults(defineProps<{
	siteName?: string;
	navLinks?: NavLink[];
}>(), {
	navLinks: () => [],
});

const appConfig = useAppConfig();
const siteName = computed(() => props.siteName ?? appConfig.site.name);
const route = useRoute();
</script>

<template>
	<header class="site-header">
		<Container class="site-header__inner">
			<NuxtLink
				to="/"
				class="site-header__brand"
			>{{ siteName }}</NuxtLink>
			<nav
				v-if="navLinks.length"
				class="site-header__nav"
				aria-label="Main"
			>
				<ul class="site-header__list">
					<li
						v-for="link in navLinks"
						:key="link.to"
					>
						<NuxtLink
							:to="link.to"
							class="site-header__link"
							:aria-current="route.path === link.to ? 'page' : undefined"
						>{{ link.label }}</NuxtLink>
					</li>
				</ul>
			</nav>
		</Container>
	</header>
</template>
