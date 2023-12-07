<script setup>
import Modal from '../components/Modal.vue';
import data from '../assets/data.json';

export default {
  data() {
    return {
      server: data,
    };
  },
};
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

  <Modal
  btitle='RAM'
  bmodel='Model: Stefan'
  bprice='Price: 1000 $'
  mtitle='Choose RAM'
  />

  <div class="config-ection-inner-image">
  </div><!-- INNER IMAGE -->

  <Modal
  btitle='CPU'
  bmodel='Model: Jacob'
  bprice='Price: 2000 $'
  mtitle='Choose CPU'
  />
</div>

<div class="config-section-inner">
  <Modal
  btitle='Port Speed'
  bmodel='Model: Arni'
  bprice='Price: 500 $'
  mtitle='Choose Port Speed'
  />

  <Modal
  btitle='DISCS'
  bmodel='Model: Søren'
  bprice='Price: 50 $'
  mtitle='Choose DISCS'
  />

    </div>
    <div style="text-align: center;">
      <h2 style="margin-bottom: 20px;">Checkout</h2>
    <a href="#checkout"><img src="../assets/img/icons/Arrow.png" alt=""></a>  
</div>

</section>
<section>

  <hr id="checkout" style="margin-top: 50px;">


</section>

  </main>


  <div class="footer-replacement ignore"> <h2>Footer</h2></div>

</template>








