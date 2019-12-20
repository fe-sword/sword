<template>
    <div :class="headerClassName" :style="headerStyle">
        <slot></slot>
    </div>
</template>

<script>
const prefix = 's-header';

export default {
    name: 'Header',

    props: {
        height: {
            type: String,
            default: '60px',
        },
    },

    computed: {
        headerClassName() {
            return prefix;
        },
        headerStyle() {
            return {
                height: this.height,
            };
        },
    },
};
</script>