import type { MDXComponents } from 'mdx/types'

// Los estilos de la prosa los aplica la clase .article-prose (globals.css)
// desde el layout del blog; aquí solo se registran overrides puntuales.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...components }
}
