<template>
    <div :class="colClassName" :style="colStyle" :is="tag">
        <slot></slot>
    </div>
</template>

<script>
const prefix = 's-col';
const parentName = 'Row';
const Props = {
    size: new Set(['xs', 'sm', 'md', 'lg', 'xl']),
    prop: new Set(['span', 'offset', 'pull', 'push']),
};
const isNumber = value => {
    return typeof value === 'number';
};
const isObject = value => {
    return Object.prototype.toString.call(value) === '[object Object]';
};

export default {
    name: 'Col',

    props: {
        span: {
            type: Number,
            default: 24,
        },
        tag: {
            type: String,
            default: 'div',
        },
        pull: Number,
        push: Number,
        offset: Number,
        xs: [Number, Object],
        sm: [Number, Object],
        md: [Number, Object],
        lg: [Number, Object],
        xl: [Number, Object],
    },

    computed: {
        colClassName() {
            const classNameList = [`${prefix}`];

            Props.size.forEach(size => {
                if (isNumber(this[size])) {
                    classNameList.push(`${prefix}-${size}-${this[size]}`);
                } else if (isObject(this[size])) {
                    const props = this[size];

                    Object.keys(props).forEach(prop => {
                        const className = prop !== 'span' ? `${prefix}-${size}-${prop}-${props[prop]}` : `${prefix}-${size}-${props[prop]}`;

                        classNameList.push(className);
                    });
                }
            });

            Props.prop.forEach(prop => {
                if (this[prop] || this[prop] === 0) {
                    const className = prop !== 'span' ? `${prefix}-${prop}-${this[prop]}` : `${prefix}-${this[prop]}`;

                    classNameList.push(className);
                }
            });

            return classNameList;
        },
        colStyle() {
            const style = {};
            const bias = `${this.gutter / 2}px`;

            if (this.gutter) {
                style.paddingLeft = bias;
                style.paddingRight = bias;
            }

            return style;
        },
        gutter() {
            let parent = this.$parent;

            while (parent && parent.$options.name !== parentName) {
                parent = parent.$parent;
            }

            return parent ? parent.gutter : 0;
        },
    },
};
</script>