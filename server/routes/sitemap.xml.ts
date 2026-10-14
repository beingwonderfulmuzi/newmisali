import { publicRoutes, news, downloads } from '../../app/data/school';

export default defineEventHandler((event) => {
	const config = useRuntimeConfig();
	const base = String(config.public.siteUrl || ``).replace(/\/$/, ``);
	const enabled = config.public.indexable === true && /^https:\/\//.test(base);
	const routes = enabled ? [...publicRoutes, ...(news.length ? [`/news`, ...news.map(item => `/news/${item.slug}`)] : []), ...(downloads.length ? [`/downloads`] : [])] : [];
	const escape = (value: string) => value.replace(/&/g, `&amp;`).replace(/</g, `&lt;`).replace(/"/g, `&quot;`);
	setHeader(event, `Content-Type`, `application/xml; charset=utf-8`);
	return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(path => `<url><loc>${escape(base + (path === `/` ? `/` : `${path}/`))}</loc></url>`).join(``)}</urlset>`;
});
