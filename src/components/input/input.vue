<template>
    <div class="inputClassName"></div>
</template>

<script>
const prefix = 's-input';

export default {
    name: 'Input',

    computed: {
        inputClassName() {
            return {
                [`${prefix}`]: true,
            };
        },
    },
};
</script>