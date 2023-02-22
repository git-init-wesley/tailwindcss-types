// noinspection JSUnusedGlobalSymbols

/**
 * @group Interactivity
 * @category User Select
 * @css
 * ```css
 * user-select: none;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/user-select)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/select_none.html)
 * @since Tailwind v3.2.7
 */
export type select_none = 'select-none'

/**
 * @group Interactivity
 * @category User Select
 * @css
 * ```css
 * user-select: text;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/user-select)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/select_text.html)
 * @since Tailwind v3.2.7
 */
export type select_text = 'select-text'

/**
 * @group Interactivity
 * @category User Select
 * @css
 * ```css
 * user-select: all;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/user-select)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/select_all.html)
 * @since Tailwind v3.2.7
 */
export type select_all = 'select-all'

/**
 * @group Interactivity
 * @category User Select
 * @css
 * ```css
 * user-select: auto;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/user-select)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/select_auto.html)
 * @since Tailwind v3.2.7
 */
export type select_auto = 'select-auto'

/**
 * @group Interactivity
 * @category User Select
 * @example
 * ```ts
 * let value: UserSelect //Only tailwindcss types
 * let value: string | UserSelect //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/user-select)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/UserSelect.html)
 * @since Tailwind v3.2.7
 */
export type UserSelect =
    select_none | select_text
    | select_all
    | select_auto
