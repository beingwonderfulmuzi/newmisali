import { school, publicRoutes, news, downloads } from '~/data/school';

export function useSchoolSeo(title: string, description: string) {
	const config = useRuntimeConfig();
	const route = useRoute();
	const base = String(config.public.siteUrl || ``).replace(/\/$/, ``);
	const path = route.path.replace(/\/$/, ``) || `/`;
	const populated = publicRoutes.includes(path) || (downloads.length > 0 && path === `/downloads`) || (news.length > 0 && (path === `/news` || news.some(item => path === `/news/${item.slug}`)));
	const indexable = config.public.indexable === true && /^https:\/\//.test(base) && populated;
	const fullTitle = title === school.name ? title : `${title} | ${school.name}`;
	useSeoMeta({ title: fullTitle, description, ogTitle: fullTitle, ogDescription: description, ogType: `website`, ogSiteName: school.name, ogImage: base ? `${base}/images/29.webp` : undefined, twitterCard: `summary_large_image`, robots: indexable ? `index, follow` : `noindex, nofollow` });
	useHead({ htmlAttrs: { lang: `en` }, link: [{ rel: `icon`, type: `image/webp`, href: `/images/23.webp` }, ...(indexable ? [{ rel: `canonical` as const, href: `${base}${path === `/` ? `/` : `${path}/`}` }] : [])] });
}
