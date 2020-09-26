<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h1 style="font-size:50px">LISTADO DE SERIES Y PELÍCULAS</h1>
        <div id="multimedias">
         <Multimedias :multimedias="multimedias"></Multimedias>
          
        </div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
/**importacion de axios */
import axios from "axios";
import Sidebar from "./Sidebar";
import Multimedias from "./Multimedias";
/**clase */
import {Global} from '../Global';

export default {
  name: "AllMultimedia",
  components: {
    Sidebar,
    Multimedias
  },
  mounted() {
    this.getMultimedias();
  },
  data() {
    return {
      ur:Global.url,
      multimedias: null
    };
  },
  methods: {
    getMultimedias() {
      axios.get(this.ur+"/multimedias/").then(res => {
        if (res.data.status == "success") {
          this.multimedias = res.data.multimedias;
          console.log(this.multimedias);
        }
      });
    }
  }
};
</script>
