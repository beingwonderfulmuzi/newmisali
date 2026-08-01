export function normalizeRouteParam(
	param: string | string[] | undefined,
): string | undefined {
	if (param === undefined) {
		return undefined;
	}
	return Array.isArray(param) ? param[0] : param;
}

export function humanizeSlug(slug: string): string {
	return slug
		.split(`-`)
		.filter(Boolean)
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(` `);
}

export function ensureQuestionMark(text: string): string {
	const trimmed = text.trim();
	if (trimmed.endsWith(`?`)) {
		return trimmed;
	}
	return `${trimmed}?`;
}

export function estimateReadingTime(text: string, wordsPerMinute = 220): number {
	const words = text.trim().split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function formatArticleDate(
	date: string,
	locale = `en-US`,
): string {
	const parsed = new Date(date);
	if (Number.isNaN(parsed.getTime())) {
		return date;
	}
	return new Intl.DateTimeFormat(locale, {
		year: `numeric`,
		month: `long`,
		day: `numeric`,
	}).format(parsed);
}

export function buildQuestionPath(routeGroup: string, slug: string): string {
	return `/${routeGroup}/${slug}`;
}

export function buildQuestionTitle(
	questionStarter: string,
	slug: string,
): string {
	return ensureQuestionMark(`${questionStarter} ${humanizeSlug(slug).toLowerCase()}`);
}
