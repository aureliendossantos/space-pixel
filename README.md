# Formation PICO-8

Code source du site "Space Pixel" disponible à l'adresse [space-pixel.netlify.app](https://space-pixel.netlify.app)

## Modifier le site

- Le contenu se trouve dans `./src/docs/fr`

- Les médias se trouvent dans `./public`

Pour prévisualiser le site à l'adresse `localhost:3000` :

```
npm install
npm run dev
```

## Héberger le site

- Héberger le site automatiquement avec [Netlify](https://www.netlify.com/) : forkez ce dépôt sur votre compte GitHub. Sur Netlify, créez un projet en connectant votre dépôt. Le dépôt est déjà paramétré, vous n'avez donc rien d'autre à faire. Le site sera disponible en quelques secondes à l'adresse de votre choix.

    Il est également possible d'utiliser des alternatives à Netlify, notamment [Vercel](https://vercel.com/).

- Pour construire le site en vue de l'héberger manuellement, utilisez `npm run build`. Le site se trouvera dans le dossier `./dist`.
