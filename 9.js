Vue.component('task-list', {
  template: `
  <div>
    <task v-for="task in tasks" v-text="task.description"></task>
  </div>
`,
  data() {
    return {
      tasks: [
        {description: 'Go to the store', completed: true},
        {description: 'Finish screencast', completed: false},
        {description: 'Make donation', completed: false},
        {description: 'Clear inbox', completed: false},
        {description: 'Make dinner', completed: false},
        {description: 'Clean room', completed: true},
      ],
    }
  },
  // completed: {
  //   incompleteTasks() {
  //     return this.tasks.filter(task => !task.completed );
  //   }
  // },
});

Vue.component('task', {
  template: `<li><slot></slot></li>`
});

Vue.component('message', {
  props: ['title', 'body'],
  template: `<article class="message" v-show="isVisible">
        <div class="message-header">
            <p>{{ title }}</p>
            <button class="delete" aria-label="delete" @click="isVisible = false"></button>
        </div>
        <div class="message-body">
            {{ body }}
        </div>
    </article>`,
  data() {
    return {
      isVisible: true,
    };
  },
});