// noinspection JSUnusedGlobalSymbols

/**
 * @group Backgrounds
 * @category Background Repeat
 * @css
 * ```css
 * background-repeat: repeat;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-repeat)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_repeat.html)
 * @since Tailwind v3.2.7
 */
export type bg_repeat = 'bg-repeat'

/**
 * @group Backgrounds
 * @category Background Repeat
 * @css
 * ```css
 * background-repeat: no-repeat;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-repeat)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_no_repeat.html)
 * @since Tailwind v3.2.7
 */
export type bg_no_repeat = 'bg-no-repeat'

/**
 * @group Backgrounds
 * @category Background Repeat
 * @css
 * ```css
 * background-repeat: repeat-x;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-repeat)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_repeat_x.html)
 * @since Tailwind v3.2.7
 */
export type bg_repeat_x = 'bg-repeat-x'

/**
 * @group Backgrounds
 * @category Background Repeat
 * @css
 * ```css
 * background-repeat: repeat-y;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-repeat)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_repeat_y.html)
 * @since Tailwind v3.2.7
 */
export type bg_repeat_y = 'bg-repeat-y'

/**
 * @group Backgrounds
 * @category Background Repeat
 * @css
 * ```css
 * background-repeat: round;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-repeat)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_repeat_round.html)
 * @since Tailwind v3.2.7
 */
export type bg_repeat_round = 'bg-repeat-round'

/**
 * @group Backgrounds
 * @category Background Repeat
 * @css
 * ```css
 * background-repeat: space;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-repeat)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_repeat_space.html)
 * @since Tailwind v3.2.7
 */
export type bg_repeat_space = 'bg-repeat-space'

/**
 * @group Backgrounds
 * @category Background Repeat
 * @example
 * ```ts
 * let value: BackgroundRepeat //Only tailwindcss types
 * let value: string | BackgroundRepeat //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-repeat)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/BackgroundRepeat.html)
 * @since Tailwind v3.2.7
 */
export type BackgroundRepeat =
    bg_repeat | bg_no_repeat
    | bg_repeat_x
    | bg_repeat_y
    | bg_repeat_round
    | bg_repeat_space
