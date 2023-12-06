<script setup>

</script>

<template>


  <main class="content">


 <header>
  <h1>Configure your <u>OWN</u> VPS server with <u>YOUR</u> own cinfiguration settings</h1>
  <h2>For the best experience!</h2>
  <a href="#config"><img src="../assets/img/icons/Arrow.png" alt=""></a>
  <hr id="config">
 </header>




<div class="DD-box">
  <div class="dropdown">
  <button class="dropdown-btn">Choose Carbinet</button>
  <div class="dropdown-content">
  <a href="#">Carbinet 1</a>
  <a href="#">Carbinet 2</a>
  <a href="#">Carbinet 3</a>
  </div>
</div>
</div>
<section class="config-section">





 



<div class="config-section-inner">
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
  <a href="#" @click.prevent="openModul3">
    <div class="config-section-inner-option option-midt">
    <h2>Port Speed</h2>
    <h3>Model : ########</h3>
    <h3>Price : $$$</h3>
  </div>
</a>
  
<div v-if="isModul3Open" class="modal">
    <div class="modal-inner">
      
      <h1>Choose Port Speed</h1>
      <a href="#" @click.prevent="closeModul3">Close</a>
    </div>
    </div>

  <a href="#" @click.prevent="openModul4" style="margin-top: 100px;">
    <div class="config-section-inner-option">
    <h2>DISCS</h2>
    <h3>Model : ########</h3>
    <h3>Price : $$$</h3>
  </div>
</a>



<div v-if="isModul4Open" class="modal">
    <div class="modal-inner">
      
      <h1>Choose DISCS</h1>
      <a href="#" @click.prevent="closeModul4">Close</a>
    </div>
    </div>

    <div style="text-align: center; margin-top: 100px;">
      <h2>Checkout</h2>
    <a href="#config" style="margin-top: 100px;"><img src="../assets/img/icons/Arrow.png" alt=""></a>


    </div>
  
<a href="#" @click.prevent="openModul5">
    <div class="config-section-inner-option option-midt">
    <h2>Raid Controller</h2>
    <h3>Model : ########</h3>
    <h3>Price : $$$</h3>
  </div>
</a>
<div v-if="isModul5Open" class="modal">
    <div class="modal-inner">
      
      <h1>Choose Raid Controller</h1>
      <a href="#" @click.prevent="closeModul5">Close</a>
    </div>
    </div>
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
    width: 40%;
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
    openModul3() {
      this.isModul3Open = true;
    },
    openModul4() {
      this.isModul4Open = true;
    },
    openModul5() {
      this.isModul5Open = true;
    },
  

    closeModul() {
      this.isModulOpen = false;
    },
    closeModul2() {
      this.isModul2Open = false;
    },
    closeModul3() {
      this.isModul3Open = false;
    },
    closeModul4() {
      this.isModul4Open = false;
    },
    closeModul5() {
      this.isModul5Open = false;
    }
  }
};
</script>



