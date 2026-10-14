<script setup lang="ts">
const { theme, toggleTheme } = useSchoolTheme();
</script>

<template>
	<button
		type="button"
		class="theme-switcher"
		:aria-label="theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'"
		:title="theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'"
		@click="toggleTheme"
	>
		<svg
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
			aria-hidden="true"
		>
			<path
				v-if="theme === 'light'"
				d="M20.8 13a8.8 8.8 0 0 1-9.8-9.8A9 9 0 1 0 20.8 13Z"
			/>
			<template v-else>
				<circle
					cx="12"
					cy="12"
					r="4"
				/>
				<path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5" />
			</template>
		</svg>
	</button>
</template>
