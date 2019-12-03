<template>
    <div id="app">
        <span>
            1、Badge
            <br />
        </span>
        <s-badge :count="100" :hidden="hidden">
            <span>消息</span>
        </s-badge>
        <br />
        <br />
        <button @click="handleClick($event)">点击一下</button>
        <br />
        <br />
        <span>
            2、Link
            <br />
        </span>
        <s-link type="success" icon="s-icon-eleme" @click="eventEmit($event)">百度一下</s-link>
        <br />
        <br />
        <span>
            3、Avatar
            <br />
        </span>
        <s-avatar src="/favicon.ico" alt="这是两把剑" :errorCb="eventEmit" @click="eventEmit($event)">刘培</s-avatar>
        <br />
        <br />
        <span>
            4、Row-Col
            <br />
        </span>
        <s-row :gutter="20">
            <s-col :span="8" :xs="{span: 4}">
                <div style="background: red;">1</div>
            </s-col>
            <s-col :span="8" :xs="{span: 4}">
                <div style="background: yellow;">2222</div>
            </s-col>
            <s-col :span="8" :xs="{span: 4}">
                <div style="background: gray;">3</div>
            </s-col>
        </s-row>
        <br />
        <br />
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
        eventEmit(e) {
            console.log(e);
            return true;
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
