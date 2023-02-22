// noinspection JSUnusedGlobalSymbols

/**
 * @group Borders
 * @category Divide Style
 * @css
 * ```css
 * border-style: solid;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/divide-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/divide_solid.html)
 * @since Tailwind v3.2.7
 */
export type divide_solid = 'divide-solid'

/**
 * @group Borders
 * @category Divide Style
 * @css
 * ```css
 * border-style: dashed;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/divide-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/divide_dashed.html)
 * @since Tailwind v3.2.7
 */
export type divide_dashed = 'divide-dashed'

/**
 * @group Borders
 * @category Divide Style
 * @css
 * ```css
 * border-style: dotted;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/divide-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/divide_dotted.html)
 * @since Tailwind v3.2.7
 */
export type divide_dotted = 'divide-dotted'

/**
 * @group Borders
 * @category Divide Style
 * @css
 * ```css
 * border-style: double;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/divide-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/divide_double.html)
 * @since Tailwind v3.2.7
 */
export type divide_double = 'divide-double'

/**
 * @group Borders
 * @category Divide Style
 * @css
 * ```css
 * border-style: none;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/divide-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/divide_none.html)
 * @since Tailwind v3.2.7
 */
export type divide_none = 'divide-none'

/**
 * @group Borders
 * @category Divide Style
 * @example
 * ```ts
 * let value: DivideStyle //Only tailwindcss types
 * let value: string | DivideStyle //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/divide-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/DivideStyle.html)
 * @since Tailwind v3.2.7
 */
export type DivideStyle =
    divide_solid | divide_dashed
    | divide_dotted
    | divide_double
    | divide_none
