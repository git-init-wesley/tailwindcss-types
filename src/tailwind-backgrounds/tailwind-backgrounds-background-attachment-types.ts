// noinspection JSUnusedGlobalSymbols

/**
 * @group Backgrounds
 * @category Background Attachment
 * @css
 * ```css
 * background-attachment: fixed;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-attachment)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_fixed.html)
 * @since Tailwind v3.2.7
 */
export type bg_fixed = 'bg-fixed'

/**
 * @group Backgrounds
 * @category Background Attachment
 * @css
 * ```css
 * background-attachment: local;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-attachment)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_local.html)
 * @since Tailwind v3.2.7
 */
export type bg_local = 'bg-local'

/**
 * @group Backgrounds
 * @category Background Attachment
 * @css
 * ```css
 * background-attachment: scroll;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-attachment)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_scroll.html)
 * @since Tailwind v3.2.7
 */
export type bg_scroll = 'bg-scroll'

/**
 * @group Backgrounds
 * @category Background Attachment
 * @example
 * ```ts
 * let value: BackgroundAttachment //Only tailwindcss types
 * let value: string | BackgroundAttachment //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-attachment)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/BackgroundAttachment.html)
 * @since Tailwind v3.2.7
 */
export type BackgroundAttachment =
    bg_fixed | bg_local
    | bg_scroll
