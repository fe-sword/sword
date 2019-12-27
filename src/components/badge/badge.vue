<template>
    <div :class="badgeClassName">
        <slot></slot>
        <transition name="s-zoom-in-center">
            <sup v-show="show" v-text="content" :class="badgeCountClassName"></sup>
        </transition>
    </div>
</template>

<script>
const prefix = 's-badge';
const Props = {
    type: new Set(['primary', 'success', 'warning', 'info', 'danger']),
};

export default {
    name: 'Badge',

    props: {
        count: {
            type: Number,
            default: 0,
        },
        max: {
            type: Number,
            default: 99,
        },
        type: {
            type: String,
            validator(value) {
                return Props.type.has(value);
            },
        },
        isDot: Boolean,
        hidden: Boolean,
    },

    computed: {
        badgeClassName() {
            return {
                [`${prefix}`]: true,
            };
        },
        badgeCountClassName() {
            const { type, isDot, $slots } = this;

            return {
                ['is-dot']: isDot,
                ['is-fixed']: $slots.default,
                [`${prefix}__content`]: true,
                [`${prefix}__content--${type}`]: true,
            };
        },
        show() {
            const { hidden, content, isDot } = this;

            return !hidden && (content || content === 0 || isDot);
        },
        content() {
            const { isDot, count, max } = this;

            if (isDot) {
                return null;
            }

            if (!isNaN(count) && !isNaN(max)) {
                return max < count ? `${max}+` : count;
            }

            return count;
        },
    },
};
</script>
