<template>
  <div class="general">
    <Slider></Slider>
    <div class="center">
      <section id="content">
      
        
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
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Multimedias from "./Multimedias";
/**clase */
import {Global} from '../Global';

export default {
  name: "LastMultimedias",
  components: {
    Slider,
    Sidebar,
    Multimedias
  },
  mounted() {
    this.getLastMultimedias();
  },
  data() {
    return {
      ur:Global.url,
      multimedias: null
    };
  },
  methods: {
    getLastMultimedias() {
      axios.get(this.ur+"/multimedias/true").then(res => {
        if (res.data.status == "success") {
          this.multimedias = res.data.multimedias;
          console.log(this.multimedias);
        }
      });
    }
  }
};
</script>












