// noinspection JSUnusedGlobalSymbols

/**
 * @group Typography
 * @category List Style Type
 * @css
 * ```css
 * list-style-type: none;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/list-style-type)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/list_none.html)
 * @since Tailwind v3.2.7
 */
export type list_none = 'list-none'

/**
 * @group Typography
 * @category List Style Type
 * @css
 * ```css
 * list-style-type: disc;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/list-style-type)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/list_disc.html)
 * @since Tailwind v3.2.7
 */
export type list_disc = 'list-disc'

/**
 * @group Typography
 * @category List Style Type
 * @css
 * ```css
 * list-style-type: decimal;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/list-style-type)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/list_decimal.html)
 * @since Tailwind v3.2.7
 */
export type list_decimal = 'list-decimal'

/**
 * @group Typography
 * @category List Style Type
 * @example
 * ```ts
 * let value: ListStyleType //Only tailwindcss types
 * let value: string | ListStyleType //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/list-style-type)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/ListStyleType.html)
 * @since Tailwind v3.2.7
 */
export type ListStyleType =
    list_none | list_disc
    | list_decimal
