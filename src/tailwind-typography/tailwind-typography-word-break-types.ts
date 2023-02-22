// noinspection JSUnusedGlobalSymbols

/**
 * @group Typography
 * @category Word Break
 * @css
 * ```css
 * overflow-wrap: normal;word-break: normal;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/word-break)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/break_normal.html)
 * @since Tailwind v3.2.7
 */
export type break_normal = 'break-normal'

/**
 * @group Typography
 * @category Word Break
 * @css
 * ```css
 * overflow-wrap: break-word;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/word-break)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/break_words.html)
 * @since Tailwind v3.2.7
 */
export type break_words = 'break-words'

/**
 * @group Typography
 * @category Word Break
 * @css
 * ```css
 * word-break: break-all;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/word-break)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/break_all.html)
 * @since Tailwind v3.2.7
 */
export type break_all = 'break-all'

/**
 * @group Typography
 * @category Word Break
 * @css
 * ```css
 * word-break: keep-all;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/word-break)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/break_keep.html)
 * @since Tailwind v3.2.7
 */
export type break_keep = 'break-keep'

/**
 * @group Typography
 * @category Word Break
 * @example
 * ```ts
 * let value: WordBreak //Only tailwindcss types
 * let value: string | WordBreak //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/word-break)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/WordBreak.html)
 * @since Tailwind v3.2.7
 */
export type WordBreak =
    break_normal | break_words
    | break_all
    | break_keep
