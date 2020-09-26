<template>
  <aside id="sidebar">
    <div id="search" class="sidebar-item">
      <h3>Buscador</h3>
      <p>Ingresa el texto o palabra a buscar.</p>
      <form @submit.prevent="goSearch">
        <input type="text" name="search" v-model="searchString" />
        <input type="submit" name="submit" value="Buscar" class="btn btn-danger" />
      </form>
    </div>
  </aside>
  
</template>

<script>
export default {
  name: "Sidebar.vue",

  data(){
    return{
      searchString: null
    }
  },
  methods:{

    goSearch(){
      this.$router.push('/redirect/'+this.searchString);
    }
  }
};
</script>