// noinspection JSUnusedGlobalSymbols

/**
 * @group Typography
 * @category List Style Position
 * @css
 * ```css
 * list-style-position: inside;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/list-style-position)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/list_inside.html)
 * @since Tailwind v3.2.7
 */
export type list_inside = 'list-inside'

/**
 * @group Typography
 * @category List Style Position
 * @css
 * ```css
 * list-style-position: outside;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/list-style-position)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/list_outside.html)
 * @since Tailwind v3.2.7
 */
export type list_outside = 'list-outside'

/**
 * @group Typography
 * @category List Style Position
 * @example
 * ```ts
 * let value: ListStylePosition //Only tailwindcss types
 * let value: string | ListStylePosition //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/list-style-position)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/ListStylePosition.html)
 * @since Tailwind v3.2.7
 */
export type ListStylePosition =
    list_inside | list_outside
