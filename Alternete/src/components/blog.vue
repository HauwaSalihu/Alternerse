<template>
<div class="blog-component">
  <b-card no-body class="overflow-hidden blog-card" v-for="board in boards" :key="board.key">
    <b-row no-gutters>
      <b-col md="5" class="blog-img">
        <b-card-img></b-card-img>
      </b-col>
      <b-col md="7">
        <b-card-body class="blog-text" :title="board.title">
          <b-card-text>
          Author: {{board.author}}<br>
         {{board.description}}<br>
          </b-card-text>
           <b-button @click.stop="details(data.item)" variant="primary">Details</b-button>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
</template>

<script>
import firebase from '../Firebase'
import router from '../router'
export default {
  name: 'BoardList',
  data () {
    return {
      fields: [
        { key: 'title', label: 'Title', sortable: true, 'class': 'text-left' },
        { key: 'author', label: 'Author', sortable: true, 'class': 'text-left' },
        { key: 'description', label: 'Description', sortable: true, 'class': 'text-left' },
        { key: 'actions', label: 'Action', 'class': 'text-center' }
      ],
      boards: [],
      errors: [],
      ref: firebase.firestore().collection('boards'),
    }
  },
  created () {
    this.ref.onSnapshot((querySnapshot) => {
      this.boards = [];
      querySnapshot.forEach((doc) => {
        this.boards.push({
          key: doc.id,
          title: doc.data().title,
          author: doc.data().author,
          description: doc.data().description
        });
      });
    });
  },
  methods: {
    details (board) {
      router.push({ name: 'ShowBoard', params: { id: board.key }})
    }
  }
}
</script>

<style>
 .blog-component{
   margin: 20px;
 }
 .blog-card{
   margin: 20px;
   max-width: 800px;
   max-height: 200px;
 }
 .blog-text{
   text-align: left;
 }
 .blog-img{

 }
</style>