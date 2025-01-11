<script setup>
 import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
 const locale = zhCn
// // 引入自定义组件
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
// <!-- js 代码, setup 标识通常和组合式 API 搭配使用, 用于告诉 Vue 需要在编译时进行一些处理，让我们可以更简洁地使用组合式 API -->
</script> 

<template>
   <!-- 设置语言为中文 -->
   <el-config-provider :locale="locale">
      <router-view></router-view>
   </el-config-provider>
</template>

<style >
/* 自定义顶部加载 Loading 颜色 */
#nprogress .bar {
   background: #409eff!important;
}
</style>
