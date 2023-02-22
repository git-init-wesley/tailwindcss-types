// noinspection JSUnusedGlobalSymbols

/**
 * @group Transitions-Animation
 * @category Animation
 * @css
 * ```css
 * animation: none;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/animation)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/animate_none.html)
 * @since Tailwind v3.2.7
 */
export type animate_none = 'animate-none'

/**
 * @group Transitions-Animation
 * @category Animation
 * @css
 * ```css
 * animation: spin 1s linear infinite;@keyframes spin {  from {    transform: rotate(0deg);  }  to {    transform: rotate(360deg);  }}
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/animation)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/animate_spin.html)
 * @since Tailwind v3.2.7
 */
export type animate_spin = 'animate-spin'

/**
 * @group Transitions-Animation
 * @category Animation
 * @css
 * ```css
 * animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;@keyframes ping {  75%, 100% {    transform: scale(2);    opacity: 0;  }}
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/animation)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/animate_ping.html)
 * @since Tailwind v3.2.7
 */
export type animate_ping = 'animate-ping'

/**
 * @group Transitions-Animation
 * @category Animation
 * @css
 * ```css
 * animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;@keyframes pulse {  0%, 100% {    opacity: 1;  }  50% {    opacity: .5;  }}
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/animation)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/animate_pulse.html)
 * @since Tailwind v3.2.7
 */
export type animate_pulse = 'animate-pulse'

/**
 * @group Transitions-Animation
 * @category Animation
 * @css
 * ```css
 * animation: bounce 1s infinite;@keyframes bounce {  0%, 100% {    transform: translateY(-25%);    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);  }  50% {    transform: translateY(0);    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);  }}
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/animation)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/animate_bounce.html)
 * @since Tailwind v3.2.7
 */
export type animate_bounce = 'animate-bounce'

/**
 * @group Transitions-Animation
 * @category Animation
 * @example
 * ```ts
 * let value: Animation //Only tailwindcss types
 * let value: string | Animation //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/animation)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/Animation.html)
 * @since Tailwind v3.2.7
 */
export type Animation =
    animate_none | animate_spin
    | animate_ping
    | animate_pulse
    | animate_bounce
