<template>
    <span :class="avatarClassName" :style="avatarStyle" @click="handleClick($event)">
        <template v-if="isImageExist && src">
            <img
                :src="src"
                :alt="alt"
                :srcset="srcSet"
                :style="avatarImgStyle"
                @error="handleError($event)"
            />
        </template>
        <template v-else-if="icon">
            <i :class="icon" />
        </template>
        <template v-else>
            <slot></slot>
        </template>
    </span>
</template>

<script>
const prefix = 's-avatar';
const Props = {
    shape: new Set(['circle', 'square']),
    size: new Set(['large', 'medium', 'small']),
};
const isNumber = value => {
    return typeof value === 'number';
};
const isString = value => {
    return typeof value === 'string';
};

export default {
    name: 'Avatar',

    props: {
        size: {
            type: [Number, String],
            validator(value) {
                if (isString(size)) {
                    return Props.size.has(value);
                }
                return isNumber(value);
            },
        },
        shape: {
            type: String,
            default: 'circle',
            validator(value) {
                return Props.shape.has(value);
            },
        },
        fit: {
            type: String,
            default: 'cover',
        },
        src: String,
        alt: String,
        icon: String,
        srcSet: String,
        errorCb: Function,
    },

    data() {
        return {
            isImageExist: true,
        };
    },

    computed: {
        avatarClassName() {
            const { size, icon, shape } = this;

            return {
                [`${prefix}`]: true,
                [`${prefix}--icon`]: icon,
                [`${prefix}--${shape}`]: true,
                [`${prefix}--${size}`]: size && isString(size),
            };
        },
        avatarStyle() {
            const { size } = this;
            const style = {
                width: `${size}px`,
                height: `${size}px`,
                lineHeight: `${size}px`,
            };

            return isNumber(size) ? style : {};
        },
        avatarImgStyle() {
            return {
                'object-fit': this.fit,
            };
        },
    },

    methods: {
        handleClick(event) {
            this.$emit('click', event);
        },
        handleError(event) {
            const { errorCb } = this;
            const errorFlag = errorCb ? errorCb(event) : undefined;

            if (errorFlag) {
                this.isImageExist = false;
            }
        },
    },
};
</script>
