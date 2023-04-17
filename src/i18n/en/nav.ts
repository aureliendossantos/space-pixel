/**
 * This configures the navigation sidebar.
 * All other languages follow this ordering/structure and will fall back to
 * English for any entries they haven’t translated.
 *
 * - All entries MUST include `text` and `key`
 * - Heading entries MUST include `header: true` and `type`
 * - Link entries MUST include `slug` (which excludes the language code)
 */
export default [
	{ text: 'Start Here', header: true, type: 'learn', key: 'startHere' },
	{ text: 'Getting Started', slug: 'bien-demarrer', key: 'getting-started' },
	{ text: 'Installation', slug: 'installation', key: 'install' },
	{ text: 'Essayer des jeux', slug: 'jouer', key: 'jouer' },

	{ text: 'Tutoriel', header: true, type: 'learn', key: 'tutorials' },
	{ text: 'Jeu n°1 - Créer un petit jeu', slug: 'premier-jeu/0-introduction', key: 'first' },
	{ text: 'Jeu n°2 - Créer un shooter', slug: 'shooter/0-introduction', key: 'shooter' },

	{ text: 'Core Concepts', header: true, type: 'learn', key: 'coreConcepts' },
	{ text: "L'éditeur de dessin", slug: 'astuces/sprites', key: 'graphismes' },
	{ text: "L'éditeur de carte", slug: 'astuces/carte', key: 'carte' },
	{ text: "L'éditeur d'effets sonores", slug: 'astuces/sons', key: 'sons' },
	{ text: 'Exporter le jeu', slug: 'astuces/exporter', key: 'export' },
] as const;
