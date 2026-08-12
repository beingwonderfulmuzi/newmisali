export interface BlockCardItem {
	id: string;
	title: string;
	description?: string;
	to?: string;
	meta?: string;
}

export interface BlockCardListProps {
	items: BlockCardItem[];
	title?: string;
	description?: string;
}

export type BlockCardListLayout = `grid` | `stack`;
