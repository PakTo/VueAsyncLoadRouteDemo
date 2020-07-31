# Vue异步加载组件方法
## :bug:已知问题
在路由中使用该方法加载的页面级组件，无法使用组件内的路由钩子函数（如`beforeRouteEnter`, `beforeRouteUpdate`, `beforeRouteLeave`），全局路由钩子函数仍可用
## 使用方法
### 组件内使用
```html
<template>
  <div>
    <my-component />
  </div>
</template>
<script>
  import asyncLoad from 'asyncLoadComponent.js';
  const MyComponent = () => asyncLoad(import('@/components/MyComponent.vue'));

  export default {
    components: { MyComponent };
  };
</script>
```

### 路由内使用
```javascript
import VueRouter from 'vue-router';
import asyncLoad from 'asyncLoadComponent.js';

const router = new VueRouter({
  routes: [
    // others route
    {
      path: '/about',
      name: 'About',
      component: () => asyncLoad(import('@/views/About.vue'))
    }
  ]
})
export default router;
```