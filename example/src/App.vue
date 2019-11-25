<template>
    <div id="app">
        <div style="width: 100px;float: right;">
            <s-badge :count="100" :hidden="hidden">
                <span>消息</span>
            </s-badge>
            <br />
            <br />
            <br />
            <s-link type="info" @click="emitClick($event)">百度一下</s-link>
            <br />
            <br />
            <br />
            <button @click="handleClick($event)">点击一下</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            hidden: false,
        };
    },
    methods: {
        handleClick(e) {
            this.hidden = !this.hidden;
        },
        emitClick(e) {
            console.log(e);
        },
    },
};
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
