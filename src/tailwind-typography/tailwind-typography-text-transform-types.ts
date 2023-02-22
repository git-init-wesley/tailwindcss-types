// noinspection JSUnusedGlobalSymbols

/**
 * @group Typography
 * @category Text Transform
 * @css
 * ```css
 * text-transform: uppercase;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/text-transform)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/uppercase.html)
 * @since Tailwind v3.2.7
 */
export type uppercase = 'uppercase'

/**
 * @group Typography
 * @category Text Transform
 * @css
 * ```css
 * text-transform: lowercase;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/text-transform)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/lowercase.html)
 * @since Tailwind v3.2.7
 */
export type lowercase = 'lowercase'

/**
 * @group Typography
 * @category Text Transform
 * @css
 * ```css
 * text-transform: capitalize;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/text-transform)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/capitalize.html)
 * @since Tailwind v3.2.7
 */
export type capitalize = 'capitalize'

/**
 * @group Typography
 * @category Text Transform
 * @css
 * ```css
 * text-transform: none;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/text-transform)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/normal_case.html)
 * @since Tailwind v3.2.7
 */
export type normal_case = 'normal-case'

/**
 * @group Typography
 * @category Text Transform
 * @example
 * ```ts
 * let value: TextTransform //Only tailwindcss types
 * let value: string | TextTransform //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/text-transform)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/TextTransform.html)
 * @since Tailwind v3.2.7
 */
export type TextTransform =
    uppercase | lowercase
    | capitalize
    | normal_case
