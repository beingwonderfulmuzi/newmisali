<script setup lang="ts">
import { navigation, school } from '~/data/school';
</script>

<template>
	<div class="site-shell">
		<SkipLink />
		<SiteHeader
			:site-name="school.name"
			:nav-links="navigation"
		/>
		<main
			id="main-content"
			class="site-main"
			tabindex="-1"
		>
			<slot />
		</main>
		<SiteFooter
			:site-name="school.name"
			:description="school.address"
			:nav-links="[...navigation, { label: 'Principal', to: '/principal' }, { label: 'Admissions', to: '/admissions' }, { label: 'Privacy', to: '/privacy' }]"
		/>
	</div>
</template>
