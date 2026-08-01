export type RouteGroup
	= | `can`
		| `is`
		| `does`
		| `did`
		| `why`
		| `what`
		| `when`
		| `where`
		| `how`
		| `will`;

export interface RouteGroupDefinition {
	key: RouteGroup;
	label: string;
	questionStarter: string;
}

export type RouteGroupConfig = RouteGroupDefinition;
