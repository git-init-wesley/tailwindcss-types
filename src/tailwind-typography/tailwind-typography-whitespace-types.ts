// noinspection JSUnusedGlobalSymbols

/**
 * @group Typography
 * @category Whitespace
 * @css
 * ```css
 * white-space: normal;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/whitespace)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/whitespace_normal.html)
 * @since Tailwind v3.2.7
 */
export type whitespace_normal = 'whitespace-normal'

/**
 * @group Typography
 * @category Whitespace
 * @css
 * ```css
 * white-space: nowrap;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/whitespace)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/whitespace_nowrap.html)
 * @since Tailwind v3.2.7
 */
export type whitespace_nowrap = 'whitespace-nowrap'

/**
 * @group Typography
 * @category Whitespace
 * @css
 * ```css
 * white-space: pre;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/whitespace)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/whitespace_pre.html)
 * @since Tailwind v3.2.7
 */
export type whitespace_pre = 'whitespace-pre'

/**
 * @group Typography
 * @category Whitespace
 * @css
 * ```css
 * white-space: pre-line;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/whitespace)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/whitespace_pre_line.html)
 * @since Tailwind v3.2.7
 */
export type whitespace_pre_line = 'whitespace-pre-line'

/**
 * @group Typography
 * @category Whitespace
 * @css
 * ```css
 * white-space: pre-wrap;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/whitespace)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/whitespace_pre_wrap.html)
 * @since Tailwind v3.2.7
 */
export type whitespace_pre_wrap = 'whitespace-pre-wrap'

/**
 * @group Typography
 * @category Whitespace
 * @example
 * ```ts
 * let value: Whitespace //Only tailwindcss types
 * let value: string | Whitespace //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/whitespace)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/Whitespace.html)
 * @since Tailwind v3.2.7
 */
export type Whitespace =
    whitespace_normal | whitespace_nowrap
    | whitespace_pre
    | whitespace_pre_line
    | whitespace_pre_wrap
