<template>
  <div class="general">
    <Slider :texto="'Búsqueda: ' + searchString"></Slider>
    <div class="center">
      <section id="content">
        <h1 class="subheader" v-if="multimedias">Contenido encontrado.</h1>
        <h1 class="subheader" v-else>Sin resultados</h1>
        <div id="multimedias" v-if="multimedias">
          <Multimedias :multimedias="multimedias"></Multimedias>
         
        </div>
        <div v-else>No hay contenido que coincida con su búsqueda.</div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
/**importacion de axios */
import axios from "axios";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Multimedias from "./Multimedias";
/**clase */
import {Global} from '../Global';

export default {
  name: "Search",
  components: {
    Slider,
    Sidebar,
    Multimedias
  },
  mounted() {
     this.searchString = this.$route.params.searchString; 
    this.getMultimediasBySearch(this.searchString);
  },
  data() {
    return {
      ur:Global.url,
      multimedias: null,
      searchString:null
    };
  },
  methods: {
    getMultimediasBySearch(searchString) {
      axios.get(this.ur+"/search/"+searchString).then(res => {
        if (res.data.status == "success") {
          this.multimedias = res.data.multimedias;
          console.log(this.multimedias);
        }
      });
    }
  }
};
</script>