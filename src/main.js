import '@/assets/main.css' // 引入 main.css 样式文件
import { createApp } from 'vue' // 引入 createApp 方法
import App from '@/App.vue' // 引入 App.vue 组件
import 'nprogress/nprogress.css' // 引入 nprogress 的样式文件
// 图片点击放大
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
// 导入路由
import router from '@/router'
//导入 Element Plus 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//跨浏览器的 CSS 动画库
import 'animate.css';
// 导入全局路由守卫
import '@/permission'
// 引入全局状态管理 Pinia
import pinia from '@/stores'

const app = createApp(App)

app.use(router)
app.use(VueViewer)
app.mount('#app')
// 应用 Pinia
app.use(pinia)
// 创建应用，并将 App 根组件挂载到 <div id="#app"></div> 中
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
