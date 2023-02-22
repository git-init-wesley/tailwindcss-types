// noinspection JSUnusedGlobalSymbols

/**
 * @group Borders
 * @category Border Style
 * @css
 * ```css
 * border-style: solid;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/border-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/border_solid.html)
 * @since Tailwind v3.2.7
 */
export type border_solid = 'border-solid'

/**
 * @group Borders
 * @category Border Style
 * @css
 * ```css
 * border-style: dashed;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/border-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/border_dashed.html)
 * @since Tailwind v3.2.7
 */
export type border_dashed = 'border-dashed'

/**
 * @group Borders
 * @category Border Style
 * @css
 * ```css
 * border-style: dotted;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/border-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/border_dotted.html)
 * @since Tailwind v3.2.7
 */
export type border_dotted = 'border-dotted'

/**
 * @group Borders
 * @category Border Style
 * @css
 * ```css
 * border-style: double;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/border-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/border_double.html)
 * @since Tailwind v3.2.7
 */
export type border_double = 'border-double'

/**
 * @group Borders
 * @category Border Style
 * @css
 * ```css
 * border-style: hidden;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/border-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/border_hidden.html)
 * @since Tailwind v3.2.7
 */
export type border_hidden = 'border-hidden'

/**
 * @group Borders
 * @category Border Style
 * @css
 * ```css
 * border-style: none;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/border-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/border_none.html)
 * @since Tailwind v3.2.7
 */
export type border_none = 'border-none'

/**
 * @group Borders
 * @category Border Style
 * @example
 * ```ts
 * let value: BorderStyle //Only tailwindcss types
 * let value: string | BorderStyle //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/border-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/BorderStyle.html)
 * @since Tailwind v3.2.7
 */
export type BorderStyle =
    border_solid | border_dashed
    | border_dotted
    | border_double
    | border_hidden
    | border_none
