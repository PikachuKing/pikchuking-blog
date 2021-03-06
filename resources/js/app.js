window._ = require('lodash');

try {
    window.$ = window.jQuery = require('jquery');

    require('foundation-sites');
} catch (e) {
}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

import Vue from 'vue';
import router from './routes.js'
import store from './store.js'
// highlight.js代码高亮插件
import Highlight from './highlight.js';
Vue.use(Highlight);

//全局过滤器
Vue.filter('formatTimer', function (value) {
    var date = new Date(value);
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
});

// 将 Vue 挂载到 ID 为 app 的页面元素上
new Vue({
    router,
    store
}).$mount('#app');

