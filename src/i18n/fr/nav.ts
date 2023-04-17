/**
 * Ceci configure la barre latérale de navigation.
 * Toutes les autres langues suivent cet ordre/structure et reviendront à l'anglais pour toutes les entrées non traduites.
 */
import { NavDictionary } from '../translation-checkers';

export default NavDictionary({
	startHere: 'Commencez ici',
	'getting-started': 'Bien démarrer',
	install: 'Installer PICO-8',
	jouer: 'Essayer des jeux',

	first: 'Jeu n°1 : premier jeu',
	shooter: 'Jeu n°2 : shooter spatial',

	coreConcepts: 'Mémos',
	graphismes: "L'éditeur de sprite",
	carte: "L'éditeur de carte",
	sons: "L'éditeur d'effet sonore",
	export: 'Exporter le jeu',
	'visual-studio-code': 'Utiliser Visual Studio Code',
});
