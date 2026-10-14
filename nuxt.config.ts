// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
	modules: [`@nuxt/eslint`],
	ssr: true,
	components: [
		{
			path: `~/features`,
			pattern: `*/components/**/*.vue`,
			pathPrefix: false,
		},
		{
			path: `~/components`,
			pathPrefix: false,
		},
	],
	imports: {
		dirs: [
			`composables/**`,
		],
	},
	devtools: { enabled: false },
	css: [`~/assets/css/main.css`],
	runtimeConfig: {
		public: {
			siteUrl: process.env.NUXT_PUBLIC_SITE_URL || ``,
			indexable: process.env.NUXT_PUBLIC_INDEXABLE === `true`,
			apiBaseUrl: process.env.API_BASE_URL,
		},
	},
	buildDir: `.nuxt`,
	devServer: {
		host: `0.0.0.0`,
	},
	compatibilityDate: `2024-04-03`,
	nitro: {
		preset: `cloudflare_pages`,
		cloudflare: {
			// This app uses web APIs; no dashboard Node compatibility flag is required.
			nodeCompat: false,
			deployConfig: false,
		},
		// Preserve originals, but omit unused oversized/invalid media from deployments.
		ignore: [
			`**/videos/Annual-ceremony.mp4`,
			`**/videos/Annual-prize-distribution.mp4`,
			`**/videos/AQPHIq-GaJHjfZtVxPgt6hybnSR_IScjht6UjQgRrTUike4tNvOYgaWGBQbb0kh6rFFE1qadYb_HC4pDzw9BgN_-.mp4`,
			`**/videos/Students-playing.mp4`,
		],
	},
	vite: {
		build: {
			target: `esnext`,
		},
		plugins: [
			tailwindcss(),
		],
	},
	eslint: {
		config: {
			stylistic: {
				indent: `tab`,
				semi: true,
			},
		},
	},
});
