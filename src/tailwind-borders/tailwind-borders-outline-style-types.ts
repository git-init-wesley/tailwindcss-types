// noinspection JSUnusedGlobalSymbols

/**
 * @group Borders
 * @category Outline Style
 * @css
 * ```css
 * outline: 2px solid transparent;outline-offset: 2px;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/outline-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/outline_none.html)
 * @since Tailwind v3.2.7
 */
export type outline_none = 'outline-none'

/**
 * @group Borders
 * @category Outline Style
 * @css
 * ```css
 * outline-style: solid;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/outline-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/outline.html)
 * @since Tailwind v3.2.7
 */
export type outline = 'outline'

/**
 * @group Borders
 * @category Outline Style
 * @css
 * ```css
 * outline-style: dashed;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/outline-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/outline_dashed.html)
 * @since Tailwind v3.2.7
 */
export type outline_dashed = 'outline-dashed'

/**
 * @group Borders
 * @category Outline Style
 * @css
 * ```css
 * outline-style: dotted;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/outline-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/outline_dotted.html)
 * @since Tailwind v3.2.7
 */
export type outline_dotted = 'outline-dotted'

/**
 * @group Borders
 * @category Outline Style
 * @css
 * ```css
 * outline-style: double;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/outline-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/outline_double.html)
 * @since Tailwind v3.2.7
 */
export type outline_double = 'outline-double'

/**
 * @group Borders
 * @category Outline Style
 * @example
 * ```ts
 * let value: OutlineStyle //Only tailwindcss types
 * let value: string | OutlineStyle //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/outline-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/OutlineStyle.html)
 * @since Tailwind v3.2.7
 */
export type OutlineStyle =
    outline_none | outline
    | outline_dashed
    | outline_dotted
    | outline_double
