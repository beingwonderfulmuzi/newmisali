export type BadgeVariant = `default` | `success` | `warning` | `danger` | `info`;
export type ButtonVariant = `primary` | `tonal` | `outlined` | `text` | `secondary` | `ghost`;
export type ButtonSize = `sm` | `md` | `lg`;
export type CardVariant = `default` | `informational` | `featured` | `success` | `warning`;
export type ContainerWidth = `site` | `article` | `narrow`;
export type IconButtonVariant = `default` | `ghost`;

export interface FieldProps {
	id: string;
	label: string;
	hint?: string;
	disabled?: boolean;
	required?: boolean;
}

export interface SelectOption {
	value: string;
	label: string;
}
