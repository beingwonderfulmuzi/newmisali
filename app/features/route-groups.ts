import type { RouteGroup, RouteGroupDefinition } from './route-group.types';

export const ROUTE_GROUPS: readonly RouteGroupDefinition[] = [
	{ key: `can`, label: `Can`, questionStarter: `Can` },
	{ key: `is`, label: `Is`, questionStarter: `Is` },
	{ key: `does`, label: `Does`, questionStarter: `Does` },
	{ key: `did`, label: `Did`, questionStarter: `Did` },
	{ key: `why`, label: `Why`, questionStarter: `Why` },
	{ key: `what`, label: `What`, questionStarter: `What` },
	{ key: `when`, label: `When`, questionStarter: `When` },
	{ key: `where`, label: `Where`, questionStarter: `Where` },
	{ key: `how`, label: `How`, questionStarter: `How` },
	{ key: `will`, label: `Will`, questionStarter: `Will` },
] as const;

const ROUTE_GROUP_SET = new Set<string>(ROUTE_GROUPS.map(group => group.key));

export function isRouteGroup(value: string): value is RouteGroup {
	return ROUTE_GROUP_SET.has(value);
}

export function getRouteGroupDefinition(key: RouteGroup): RouteGroupDefinition {
	const definition = ROUTE_GROUPS.find(group => group.key === key);
	if (!definition) {
		throw new Error(`Unknown route group: ${key}`);
	}
	return definition;
}
