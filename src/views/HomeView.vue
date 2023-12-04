<style>
  @import '../assets/main.scss';
</style>


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
  
  <a href="#" @click.prevent="openModal">
    <div class="config-section-inner-option">
      <h2>RAM</h2>
      <h3>Model : ########</h3>
      <h3>Price : $$$</h3>
    </div>
  </a>
  <div v-if="isModalOpen" class="modal">
    <a href="#" @click.prevent="closeModal"> Close</a>
      <h1>Choose RAM</h1>
    </div>





  <div class="config-ection-inner-image">
  </div>

  <a href="#">
    <div class="config-section-inner-option">
      <h2>CPU</h2>
      <h3>Model : ########</h3>
      <h3>Price : $$$</h3>
    </div>
  </a>
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
      isModalOpen: false // start of closed
    };
  },
  methods: {
    openModal() {
      // Open mudal
      this.isModalOpen = true;
    },
    closeModal() {
      // Close
      this.isModalOpen = false;
    }
  }
};
</script>


