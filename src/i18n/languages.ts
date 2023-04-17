/**
 * Map of language codes to a written out language name.
 * Used to populate the language switcher in the navbar.
 */
export default {
	fr: 'Français',
} as const;

export const rtlLanguages = new Set(['ar']);
