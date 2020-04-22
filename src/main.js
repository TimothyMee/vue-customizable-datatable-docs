import Vue from 'vue'
import App from './App.vue';
import './assets/css/main.css';
import './assets/css/prism.css';
// import 'prismjs'
// import 'prismjs/themes/prism.css'

// import VueHighlightJS from 'vue-highlightjs';

// import css from 'highlight.js/lib/languages/css';
// import javascript from 'highlight.js/lib/languages/javascript';

// import 'highlight.js/styles/default.css';
Vue.config.productionTip = false


// Vue.use(VueHighlightJS, {
//   languages: {
//     css,
//     javascript,
//     VueHighlightJS
//   },
// });

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
