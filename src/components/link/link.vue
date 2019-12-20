<template>
    <a :class="linkAClassName" :href="linkHref" v-bind="$attrs" @click="handleClick">
        <i :class="icon" v-if="icon"></i>
        <span v-if="$slots.default">
            <slot></slot>
        </span>
        <template v-if="$slots.icon">
            <slot v-if="$slots.icon" name="icon"></slot>
        </template>
    </a>
</template>

<script>
const prefix = 's-link';

export default {
    name: 'Link',

    props: {
        type: {
            type: String,
            default: 'default',
        },
        underline: {
            type: Boolean,
            default: true,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        href: String,
        icon: String,
    },

    computed: {
        linkAClassName() {
            const { type, disabled, underline } = this;

            return {
                ['is-disabled']: disabled,
                ['is-underline']: underline && !disabled,
                [`${prefix}`]: true,
                [`${prefix}--${type}`]: !!type,
            };
        },
        linkHref() {
            return !this.disabled ? this.href : null;
        },
    },

    methods: {
        handleClick(event) {
            const { disabled, href } = this;

            if (!disabled) {
                if (!href) {
                    this.$emit('click', event);
                }
            }
        },
    },
};
</script>
