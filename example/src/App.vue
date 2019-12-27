<template>
    <div id="app">
        <!-- <span>
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
        <span>
            5、Container
            <br />
        </span>
        <s-container>
            <s-aside width="200px">Aside</s-aside>
            <s-container>
                <s-header>Header</s-header>
                <s-main>Main</s-main>
                <s-footer>Footer</s-footer>
            </s-container>
        </s-container>-->
        <br />
        <br />
        <span>
            6、Button
            <br />
        </span>
        <s-button @click="eventEmit" :press="true">默认按钮</s-button>
        <s-button type="primary" @click="eventEmit" :press="true" :round="true">主要按钮</s-button>
        <s-button type="success" @click="eventEmit" :press="true">成功按钮</s-button>
        <s-button type="info" @click="eventEmit" :press="true">信息按钮</s-button>
        <s-button type="warning" @click="eventEmit" :press="true">警告按钮</s-button>
        <s-button type="danger" @click="eventEmit" :press="true">危险按钮</s-button>
        <br />
        <br />
        <s-button @click="eventEmit" :press="true" plain>默认按钮</s-button>
        <s-button type="primary" @click="eventEmit" :press="true" icon="s-icon-edit" plain>主要按钮</s-button>
        <s-button type="success" @click="eventEmit" :press="true" plain :round="true">成功按钮</s-button>
        <s-button type="info" @click="eventEmit" :press="true" plain>信息按钮</s-button>
        <s-button type="warning" @click="eventEmit" :press="true" plain>警告按钮</s-button>
        <s-button type="danger" @click="eventEmit" :press="true" plain>危险按钮</s-button>
        <br />
        <br />
        <s-button icon="s-icon-search" circle></s-button>
        <s-button type="primary" icon="s-icon-edit" circle></s-button>
        <s-button type="success" icon="s-icon-check" circle></s-button>
        <s-button type="info" icon="s-icon-message" circle></s-button>
        <s-button type="warning" icon="s-icon-star-off" circle></s-button>
        <s-button type="danger" icon="s-icon-delete" circle></s-button>
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
.s-header,
.s-footer {
    background-color: yellow;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.s-aside {
    background-color: blue;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.s-main {
    background-color: red;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body > .s-container {
    margin-bottom: 40px;
}

.s-container:nth-child(5) .s-aside,
.s-container:nth-child(6) .s-aside {
    line-height: 260px;
}

.s-container:nth-child(7) .s-aside {
    line-height: 320px;
}
</style>
