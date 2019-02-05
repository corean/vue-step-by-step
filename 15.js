Vue.component('progress-view', {
  data() {
    return {
      percent: 50
    }
  },
methods: {
    increase() {
      this.percent += 10;
    }
}
});

new Vue({
  el: '#root',
});