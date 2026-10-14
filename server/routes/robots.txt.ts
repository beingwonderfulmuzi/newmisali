import { news, downloads } from '../../app/data/school';

export default defineEventHandler((event) => {
	const config = useRuntimeConfig();
	const base = String(config.public.siteUrl || ``).replace(/\/$/, ``);
	setHeader(event, `Content-Type`, `text/plain; charset=utf-8`);
	if (config.public.indexable !== true || !/^https:\/\//.test(base)) return `User-agent: *\nDisallow: /\n`;
	return `User-agent: *\nAllow: /\nDisallow: /components\n${news.length ? `` : `Disallow: /news\n`}${downloads.length ? `` : `Disallow: /downloads\n`}Sitemap: ${base}/sitemap.xml\n`;
});
