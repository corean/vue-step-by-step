Vue.component('tabs', {
  template: `
<div>
  <div class="tabs">
      <ul>
          <li v-for="tab in tabs" :class="{ 'is-active' : tab.isActive }">
            <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a> 
          </li> 
      </ul>
  </div>
  <div class="tabs-details">
      <slot></slot>
  </div>
</div>
`,
  created() {
    this.tabs = this.$children;
  },
  data() {
    return {
      tabs: [],
    };
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = (tab.name == selectedTab.name);
      });
    },
  },
  computed: {},
});

Vue.component('tab', {
  props: {
    selected: {default: false},
    name: {required: true},
  },
  template: `
<div v-if="isActive"><slot></slot></div>
  `,
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    href() {
      return '#' + (this.name).toLowerCase().replace(/ /g, '-');
    },
  },
  mounted() {
    this.isActive = this.selected;
  },
});

new Vue({
  el: '#root',
});