<template>
    <footer :class="footerClassName" :style="footerStyle">
        <slot></slot>
    </footer>
</template>

<script>
const prefix = 's-footer';

export default {
    name: 'Footer',

    props: {
        height: {
            type: String,
            default: '60px',
        },
    },

    computed: {
        footerClassName() {
            return prefix;
        },
        footerStyle() {
            return {
                height: this.height,
            };
        },
    },
};
</script>
