const app = Vue.createApp({
    data() {
      return {
        todos: [],
        newTodo: "",
      };
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim() !== "") {
          this.todos.push({ text: this.newTodo, completed: false });
          this.newTodo = "";
        }
      },
      deleteTodo(index) {
        this.todos.splice(index, 1);
      },
      toggleCompleted(index) {
        this.todos[index].completed = !this.todos[index].completed;
      },
    },
  });
  
  app.mount("#app");