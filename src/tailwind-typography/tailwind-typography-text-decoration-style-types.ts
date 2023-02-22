// noinspection JSUnusedGlobalSymbols

/**
 * @group Typography
 * @category Text Decoration Style
 * @css
 * ```css
 * text-decoration-style: solid;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/text-decoration-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/decoration_solid.html)
 * @since Tailwind v3.2.7
 */
export type decoration_solid = 'decoration-solid'

/**
 * @group Typography
 * @category Text Decoration Style
 * @css
 * ```css
 * text-decoration-style: double;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/text-decoration-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/decoration_double.html)
 * @since Tailwind v3.2.7
 */
export type decoration_double = 'decoration-double'

/**
 * @group Typography
 * @category Text Decoration Style
 * @css
 * ```css
 * text-decoration-style: dotted;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/text-decoration-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/decoration_dotted.html)
 * @since Tailwind v3.2.7
 */
export type decoration_dotted = 'decoration-dotted'

/**
 * @group Typography
 * @category Text Decoration Style
 * @css
 * ```css
 * text-decoration-style: dashed;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/text-decoration-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/decoration_dashed.html)
 * @since Tailwind v3.2.7
 */
export type decoration_dashed = 'decoration-dashed'

/**
 * @group Typography
 * @category Text Decoration Style
 * @css
 * ```css
 * text-decoration-style: wavy;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/text-decoration-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/decoration_wavy.html)
 * @since Tailwind v3.2.7
 */
export type decoration_wavy = 'decoration-wavy'

/**
 * @group Typography
 * @category Text Decoration Style
 * @example
 * ```ts
 * let value: TextDecorationStyle //Only tailwindcss types
 * let value: string | TextDecorationStyle //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/text-decoration-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/TextDecorationStyle.html)
 * @since Tailwind v3.2.7
 */
export type TextDecorationStyle =
    decoration_solid | decoration_double
    | decoration_dotted
    | decoration_dashed
    | decoration_wavy
