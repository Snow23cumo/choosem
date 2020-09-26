<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <multimedia class="multimedia-item multimedia-detail" v-if="multimedia">
          <div class="image-wrap">
           
            <img :src="ur + '/get-image/'+ multimedia.image" :alt="multimedia.title" v-if="multimedia.image" />
            <img src="../assets/images/photo_default_4.png" :alt="multimedia.title" v-else />
          </div>
          <h1 class="subheader">{{multimedia.title}}</h1>
          <h3>Sinopsis:</h3>
          <p>{{multimedia.sinopsis}}</p>
          <p><b>Géneros: </b>{{multimedia.category}}</p>
          <p><b>Fecha de estreno: </b>{{multimedia.realase_date}}</p>
          <p><b>Elenco: </b>{{multimedia.cast}}</p>
          <p><b>Idioma: </b>{{multimedia.language}}</p>
          <p><b>Personajes: </b>{{multimedia.characters}}</p>
          <p><b>Clasificación: </b>{{multimedia.clasification}}</p>
          <p><b>Duración: </b>{{multimedia.runtime}}</p>

        </multimedia>
      </section>
      
      <div class="clearfix"></div>

      <br>
      
    </div>
  </div>
</template>
<script>

import { Global } from "../Global";
import axios from "axios";
import swal from "sweetalert";

export default {
  name: "Multimedia.vue",

  components: {
   
  },
  data() {
    return {
      ur: Global.url,
      multimedia: null
    };
  },
  mounted() {
    var multimediaId = this.$route.params.id;
    this.getMultimedia(multimediaId);
  },
  methods: {
    getMultimedia(multimediaId) {
      axios.get(this.ur + "/multimedia/" + multimediaId).then(res => {
        if (res.data.status == "success") {
          this.multimedia = res.data.multimedia;
        }
      });
    },
    deleteMultimedia(multimediaId) {
      swal({
        title: "¿Estás seguro de querer eliminar el registro?",
        text: "Si lo eliminas no podrás recuperarlo!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          axios.delete(this.ur + "/multimedia/" + multimediaId).then(res => {
            if (res) {
              swal(
                "Contenido eliminado",
                "Contenido eliminado correctamente",
                "success"
              );
            }

            this.$router.push("/home");
          });
        } else {
          swal("Ufff casi !!! no has eliminado nada,tranqui");
        }
      });
    }
  }
};
</script>