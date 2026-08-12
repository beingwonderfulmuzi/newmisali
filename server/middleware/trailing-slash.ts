import { defineEventHandler, getRequestURL, sendRedirect, setResponseStatus } from 'h3';

export default defineEventHandler((event) => {
	const url = getRequestURL(event);
	const pathname = url.pathname || ``;
	const excludedPrefixes = [`/_nuxt`, `/_ipx`, `/api`, `/.well-known`];
	const exactAssetRoots = new Set([`/_nuxt`, `/_nuxt/`, `/_ipx`, `/_ipx/`]);

	if (exactAssetRoots.has(pathname)) {
		setResponseStatus(event, 204);
		return ``;
	}

	if (!pathname || pathname === `/`) {
		return;
	}

	if (pathname.endsWith(`/`)) {
		return;
	}

	if (excludedPrefixes.some(prefix => pathname.startsWith(`${prefix}/`) || pathname === prefix)) {
		return;
	}

	// Skip static assets and file endpoints (e.g. robots.txt, sitemap.xml, css/js/images).
	if (/\.[A-Za-z0-9]+$/.test(pathname)) {
		return;
	}

	const query = url.search || ``;
	return sendRedirect(event, `${pathname}/${query}`, 301);
});
