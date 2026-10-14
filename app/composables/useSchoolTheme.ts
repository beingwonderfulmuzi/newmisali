export function useSchoolTheme() {
	const preference = useCookie<string>(`nmsc-theme`, {
		default: () => `light`,
		maxAge: 60 * 60 * 24 * 365,
		sameSite: `lax`,
	});
	const theme = useState<`light` | `dark`>(`school-theme`, () => preference.value === `dark` ? `dark` : `light`);
	function toggleTheme() {
		theme.value = theme.value === `dark` ? `light` : `dark`;
		preference.value = theme.value;
	}
	return { theme, toggleTheme };
}
