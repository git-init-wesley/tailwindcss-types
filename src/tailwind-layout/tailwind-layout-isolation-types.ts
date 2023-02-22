// noinspection JSUnusedGlobalSymbols

/**
 * @group Layout
 * @category Isolation
 * @css
 * ```css
 * isolation: isolate;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/isolation)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/isolate.html)
 * @since Tailwind v3.2.7
 */
export type isolate = 'isolate'

/**
 * @group Layout
 * @category Isolation
 * @css
 * ```css
 * isolation: auto;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/isolation)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/isolation_auto.html)
 * @since Tailwind v3.2.7
 */
export type isolation_auto = 'isolation-auto'

/**
 * @group Layout
 * @category Isolation
 * @example
 * ```ts
 * let value: Isolation //Only tailwindcss types
 * let value: string | Isolation //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/isolation)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/Isolation.html)
 * @since Tailwind v3.2.7
 */
export type Isolation =
    isolate | isolation_auto
