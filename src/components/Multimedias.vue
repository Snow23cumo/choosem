<template>
  <section id="multimedias-component">
    <div id="multimedias-list" v-if="multimedias && multimedias.length >=1">
      <multimedia class="multimedia-item" v-for="multimedia in multimedias " :key="multimedia.id">
        <div class="image-wrap">
          <img :src="ur+'/get-image/'+multimedia.image" :alt="multimedia.title" v-if="multimedia.image" />
          <img
            src="../assets/images/photo_default_4.png"
            :alt="multimedia.title"
            v-if="!multimedia.image"
            
          />
        </div>
        <h2>
          <a :to="{name:'multimedia', params:{id:multimedia._id}}">{{ multimedia.title }}</a>
        </h2>
        
        <router-link :to="{name:'multimedia', params:{id:multimedia._id}}">Más detalles</router-link>
        <h4>
        <a :to="{name:'multimedia', params:{id:multimedia._id}}">{{ multimedia.clasification }}</a></h4>
        <div class="clearfix"></div>
      </multimedia>
    </div>
    <div v-else-if="multimedias && multimedias.length < 1">No hay contenido para mostrar.</div>
    <div v-else>Cargando...</div>
  </section>
</template>

<script>
import { Global } from "../Global";

export default {
  name: "Multimedias.vue",
  props: ["multimedias"],
  data() {
    return {
      ur: Global.url
    };
  }
};
</script>