<template>
    <section :class="containerClassName">
        <slot></slot>
    </section>
</template>

<script>
const prefix = 's-container';
const Props = {
    direction: new Set(['vertical', 'horizontal']),
};

export default {
    name: 'Container',

    props: {
        direction: {
            type: String,
            validator(value) {
                return Props.direction.has(value);
            },
        },
    },

    computed: {
        containerClassName() {
            return {
                ['is-vertical']: this.isVertical,
                [`${prefix}`]: true,
            };
        },
        isVertical() {
            const { direction, $slots } = this;

            if (direction === 'vertical') {
                return true;
            } else if (direction === 'horizontal') {
                return false;
            }

            const slots = $slots && $slots.default;

            if (slots) {
                const hasHeaderOrFooter = slots.some(vnode => {
                    const tag = vnode.componentOptions && vnode.componentOptions.tag;

                    return tag === 's-header' || tag === 's-footer';
                });

                return hasHeaderOrFooter;
            } else {
                return false;
            }
        },
    },
};
</script>