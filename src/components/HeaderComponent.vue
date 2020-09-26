<template>
    <header id="header">
        
        <div class="center">
            <!--LOGO-->
            <div class="logo">
                <img src="../assets/logo1.png" class="app-logo" alt="logotipo">
                <span id="brand">
                    <strong>CHOOSEMS</strong>
                </span>
            </div>
             <!--MENU-->
             <nav id="menu">
                <ul>
                    <li>
                        <router-link to="/home" active-class="active">Home</router-link>
                    </li>
                    <li>
                       <router-link to="/all-multimedia" active-class="active">All content</router-link>
                    </li>
                    <li>
                        <router-link to="/about" active-class="active">About us</router-link>
                    </li>
                    
    
                    <li>
                        <a href="#">choosems@gmail.com</a>
                        
                    </li>
                </ul>
             </nav>
             <!--LIMPIAR LOS FLOTADOS-->
             <div class="clearfix"></div>
        </div>
    </header>

</template>

<script>
export default {
    name:'HeaderComponent.vue'
}
</script>