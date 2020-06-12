<template>
    <div id="nav">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <nav class="navbar navbar-expand-md bg-dark navbar-dark">
              <a class="navbar-brand" href="#">nav</a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavbar"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Music</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Fan</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Merch</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
        <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div class="carousel slide" id="carouselExIndicate" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExIndicate" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExIndicate" data-slide-to="1"></li>
              <li data-target="#carouselExIndicate" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="kvlt.jpg" class="d-block w-100">
              </div>
              <div class="carousel-item">
                <img src="KVLTTT.jpg" class="d-block w-100">
              </div>
              <div class="carousel-item">
                <img src="KVLTB.jpg" class="d-block w-100">
              </div>
            </div>
            <a
              href="#carouselExIndicate"
              class="carousel-control-prev"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="false"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              href="#carouselExIndicate"
              class="carousel-control-next"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="false"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
          <div class="blogContent">
          
          {{board.title}}
          Title: {{board.title}}<br>
          Description: {{board.description}}<br>
          Author: {{board.author}}<br>
       
            <div class="horLine"></div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
          <div class="sub"></div>
        </div>
      </div>
    </div>
    <footer>
      <div>
      </div>
    </footer>
  </div>
</template>
<script>
import firebase from '../Firebase'
import router from '../router'
export default {
  name: 'blog',
  data () {
    return {
      key: '',
      board: {}
    }
  },
  created () {
    const ref = firebase.firestore().collection('boards').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.key = doc.id;
        this.board = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
    editboard (id) {
      router.push({
        name: 'EditBoard',
        params: { id: id }
      })
    }
    // deleteboard (id) {
    //   firebase.firestore().collection('boards').doc(id).delete().then(() => {
    //     router.push({
    //       name: 'BoardList'
    //     })
    //   }).catch((error) => {
    //     alert("Error removing document: ", error);
    //   });
    // }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
  .edit-btn {
    margin-right: 20px;
    width: 70px;
  }
</style>