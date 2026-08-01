<script setup lang="ts">
import type { NavLink } from '~/components/blocks/SiteHeader.vue';

const navLinks: NavLink[] = [
	{ label: `Home`, to: `/` },
	{ label: `Components`, to: `/components` },
	{ label: `Example article`, to: `/what/is-an-editorial-system` },
];
</script>

<template>
	<div class="site-shell">
		<SkipLink />
		<SiteHeader :nav-links="navLinks" />
		<main
			id="main-content"
			class="site-main"
		>
			<slot />
		</main>
		<SiteFooter :nav-links="navLinks" />
	</div>
</template>
