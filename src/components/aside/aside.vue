<template>
    <aside :class="asideClassName" :style="asideStyle">
        <slot></slot>
    </aside>
</template>

<script>
const prefix = 's-aside';

export default {
    name: 'Aside',

    props: {
        width: {
            type: String,
            default: '300px',
        },
    },

    computed: {
        asideClassName() {
            return prefix;
        },
        asideStyle() {
            return {
                width: this.width,
            };
        },
    },
};
</script>
