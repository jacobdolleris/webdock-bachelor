<script setup>

</script>

<template>

<div class="top-menu-replacement ignore"><h2>Top Menu</h2></div>

  <main class="content">


 <header>
  <h1>Configure your <u>OWN</u> VPS server with <u>YOUR</u> own cinfiguration settings</h1>
  <h2>For the best experience!</h2>
  <a href="#"><img src="../assets/img/icons/Arrow.png" alt=""></a>
  <hr>
 </header>






<section class="config-section">



<div class="config-section-inner">
  <!-- Virkene modul -->
  <div>
    <a href="#" @click.prevent="openModul">
      <div class="config-section-inner-option">
        <h2>RAM</h2>
        <h3>Model: ########</h3>
        <h3>Pris: $$$</h3>
      </div>
    </a>

  </div>

  <div v-if="isModulOpen" class="modal">
    <div class="modal-inner">
      
      <h1>Choose RAM</h1>
      <a href="#" @click.prevent="closeModul">Close</a>
    </div>
    </div>

<!-- SLUT -->


  <div class="config-ection-inner-image">
  </div>

  <a href="#" @click.prevent="openModul2">
      <div class="config-section-inner-option">
        <h2>CPU</h2>
        <h3>Model: ########</h3>
        <h3>Pris: $$$</h3>
      </div>
    </a>

  </div>

  <div v-if="isModul2Open" class="modal">
    <div class="modal-inner">
      
      <h1>Choose CPU</h1>
      <a href="#" @click.prevent="closeModul2">Close</a>
    </div>
    </div>


<div class="config-section-inner">
  <a href="#">
    <div class="config-section-inner-option option-midt">
    <h2>Port Speed</h2>
    <h3>Model : ########</h3>
    <h3>Price : $$$</h3>
  </div>
</a>
  

  <a href="#">
    <div class="config-section-inner-option">
    <h2>DISCS</h2>
    <h3>Model : ########</h3>
    <h3>Price : $$$</h3>
  </div>
</a>
  
<a href="#">
    <div class="config-section-inner-option option-midt">
    <h2>Raid Controller</h2>
    <h3>Model : ########</h3>
    <h3>Price : $$$</h3>
  </div>
</a>
</div>



</section>


  </main>


  <div class="footer-replacement ignore"> <h2>Footer</h2></div>

</template>


<style lang="scss" scoped>
  @import '../assets/main.scss';
header{
  text-align: center;
  h1{
    width: 35%;
    margin: auto;
    padding:40px;
  }
  img{
    margin: 40px;
  }

}


</style>


<script>
export default {
  data() {
    
    
    return {
      isModulOpen: false,
      isModul2Open:false,
      isModul3Open:false,
      isModul4Open:false,
      isModul5Open:false
    };
  },
  methods: {
    openModul() {
      this.isModulOpen = true;
    },
    openModul2() {
      this.isModul2Open = true;
    },
  




    closeModul() {
      this.isModulOpen = false;
    },
    closeModul2() {
      this.isModul2Open = false;
    }
  }
};
</script>



