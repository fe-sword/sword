<template>
    <div :class="rowClassName" :style="rowStyle" :is="tag">
        <slot></slot>
    </div>
</template>

<script>
const prefix = 's-row';
const Props = {
    align: new Set(['top', 'middle', 'bottom']),
    justify: new Set(['start', 'center', 'end', 'space-between', 'space-around']),
};

export default {
    name: 'Row',

    props: {
        tag: {
            type: String,
            default: 'div',
        },
        align: {
            type: String,
            default: 'top',
            validator(value) {
                return Props.align.has(value);
            },
        },
        justify: {
            type: String,
            default: 'start',
            validator(value) {
                return Props.justify.has(value);
            },
        },
        type: String,
        gutter: Number,
    },

    computed: {
        rowClassName() {
            return {
                [`${prefix}`]: true,
                [`${prefix}--flex`]: this.type === 'flex',
                [`is-align-${this.align}`]: this.align !== 'top',
                [`is-justify-${this.justify}`]: this.justify !== 'start',
            };
        },
        rowStyle() {
            const style = {};
            const bias = `-${this.gutter / 2}px`;

            if (this.gutter) {
                style.marginLeft = bias;
                style.marginRight = bias;
            }

            return style;
        },
    },
};
</script>