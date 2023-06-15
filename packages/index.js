import Button from "./button/index.vue"

const install = (app, options) => {
    // 注册一个选项对象
    app.component('cat-button', Button)
}

export default {
    install,
    Button
}