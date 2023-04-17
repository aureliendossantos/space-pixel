import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import { defineConfig } from 'astro/config';
import AutoImport from 'astro-auto-import';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkSmartypants from 'remark-smartypants';
import { asideAutoImport, astroAsides } from './integrations/astro-asides';
import { astroCodeSnippets, codeSnippetAutoImport } from './integrations/astro-code-snippets';
import { sitemap } from './integrations/sitemap';
import { autolinkConfig } from './plugins/rehype-autolink-config';
import { rehypei18nAutolinkHeadings } from './plugins/rehype-i18n-autolink-headings';
import { rehypeTasklistEnhancer } from './plugins/rehype-tasklist-enhancer';
import { remarkFallbackLang } from './plugins/remark-fallback-lang';
import { theme } from './syntax-highlighting-theme';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	site: 'https://space-pixel.netlify.app/',
	integrations: [
		tailwind({
			config: { applyBaseStyles: false },
		}),
		AutoImport({
			imports: [
				asideAutoImport,
				codeSnippetAutoImport,
				'~/components/Badge.astro',
				'~/components/Button.astro',
				'~/components/tabs/PackageManagerTabs.astro',
				'~/components/FileTree.astro',
				'~/components/Checklist.astro',
				'~/components/Spoiler.astro',
				'~/components/tutorial/Box.astro',
				'~/components/tutorial/MultipleChoice.astro',
				'~/components/tutorial/Option.astro',
				'~/components/tutorial/PreCheck.astro',
				'~/components/tutorial/Lede.astro',
				'~/components/tutorial/MemoList.astro',
				'~/components/Video.astro',
			],
		}),
		preact({
			compat: true,
		}),
		sitemap(),
		astroAsides(),
		astroCodeSnippets(),
		mdx(),
	],
	markdown: {
		syntaxHighlight: 'shiki',
		shikiConfig: {
			theme,
		},
		// Override with our own config
		smartypants: false,
		remarkPlugins: [
			[
				remarkSmartypants,
				{
					dashes: false,
				},
			],
			// Add our custom plugin that marks links to fallback language pages
			remarkFallbackLang(),
		],
		rehypePlugins: [
			rehypeSlug,
			// This adds links to headings
			[rehypeAutolinkHeadings, autolinkConfig],
			// Tweak GFM task list syntax
			rehypeTasklistEnhancer(),
			// Translates the autolink headings anchors
			rehypei18nAutolinkHeadings(),
		],
	},
});
