<template>
    <button
        :type="nativeType"
        :class="buttonClassName"
        :disabled="buttonDisabled"
        @click="handleClick"
    >
        <i class="s-icon-loading" v-if="loading"></i>
        <i :class="icon" v-if="icon && !loading"></i>
        <slot></slot>
    </button>
</template>

<script>
const prefix = 's-button';
const Props = {
    size: new Set(['', 'medium', 'small', 'mini']),
    nativeType: new Set(['button', 'submit', 'reset']),
    type: new Set(['', 'primary', 'success', 'warning', 'info', 'danger']),
};

export default {
    name: 'Button',

    inject: {
        from: {
            default: {},
        },
        formItem: {
            default: {},
        },
    },

    props: {
        icon: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: '',
            validator(value) {
                return Props.type.has(value);
            },
        },
        size: {
            type: String,
            default: '',
            validator(value) {
                return Props.size.has(value);
            },
        },
        nativeType: {
            type: String,
            default: 'button',
            validator(value) {
                return Props.nativeType.has(value);
            },
        },
        plain: Boolean,
        round: Boolean,
        press: Boolean,
        circle: Boolean,
        loading: Boolean,
        disabled: Boolean,
    },

    computed: {
        buttonClassName() {
            return {
                ['button']: true,
                [`${prefix}`]: true,
                ['is-plain']: this.plain,
                ['is-round']: this.round,
                ['is-press']: this.press,
                ['is-circle']: this.circle,
                ['is-loading']: this.loading,
                ['is-disabled']: this.buttonDisabled,
                [`${prefix}--${this.type}`]: this.type,
                [`${prefix}--${this.buttonSize}`]: this.buttonSize,
            };
        },
        buttonSize() {
            return this.size || this.formItem.size || (this.$SWORD || {}).size;
        },
        buttonDisabled() {
            return this.disabled || this.from.disabled || this.loading;
        },
    },

    methods: {
        handleClick(event) {
            this.$emit('click', event);
        },
    },
};
</script>