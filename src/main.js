import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('size', {
  bind(el, binding){
    if (binding.arg==='margin') {
      el.style.margin = binding.value
    }

    else if (binding.arg==='padding') {
      el.style.padding = binding.value
    }
    else{
      el.style.fontSize = binding.value
    }
    
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
