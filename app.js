const app = Vue.createApp({
  data() {
    return {
      title: 'Class Binding',
      books: [
        {
          title: 'Name of the wind',
          author: 'Partrick Rothfussss',
          isFav: true,
        },
        {
          title: 'The way of kings',
          author: 'Brandom Sanderson',
          isFav: false,
        },
        {
          title: 'The final Empire',
          author: 'Brandom Sanderson',
          isFav: false,
        },
      ],
    }
  },

  methods: {
    toggleFav(index) {
      this.books[index].isFav = !this.books[index].isFav
    },
  },

  computed: {},
})

app.mount('#app')
