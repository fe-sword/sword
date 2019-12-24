<template>
    <main :class="mainClassName">
        <slot></slot>
    </main>
</template>

<script>
const prefix = 's-main';

export default {
    name: 'Main',

    computed: {
        mainClassName() {
            return prefix;
        },
    },
};
</script>
