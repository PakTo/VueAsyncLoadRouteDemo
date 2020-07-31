/**
 * @method 异步加载组件方法，可配置加载未完成时的Loading组件及加载失败时显示的Error组件
 * @param {Promise} AsyncView 需要异步加载的组件
 * @param {Object|Promise} LoadingComponent 加载未完成时的Loading组件
 * @param {Object|Promise} ErrorComponent 加载失败时的Error组件
 */
const asyncLoadComponent = (AsyncView, LoadingComponent, ErrorComponent) => {
  const AsyncComponent = () => ({
    // 需要加载的组件 (应该是一个 `Promise` 对象)
    component: AsyncView,
    // 异步组件加载时使用的组件
    loading: LoadingComponent,
    // 加载失败时使用的组件
    error: ErrorComponent,
    // 展示加载时组件的延时时间。默认值是 200 (毫秒)
    delay: 200,
    // 如果提供了超时时间且组件加载也超时了，
    // 则使用加载失败时使用的组件。默认值是：`Infinity`
    timeout: null,
  });

  return Promise.resolve({
    functional: true,
    render: (h, { data, children }) => h(AsyncComponent, data, children)
  })
}

export default asyncLoadComponent;