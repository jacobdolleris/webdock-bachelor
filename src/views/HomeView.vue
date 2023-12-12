

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
    <div v-if="listItems.components && listItems.components.memory">
      <Modal
        :key="key"
        :btitle="'RAM'"
        :bmodel="'Model: Stefan'"
        :bprice="'Price: 1000 $'"
        :mtitle="'Choose RAM'"
        :array="listItems.components.memory.user_selectable_options"
      />
    </div>



  <div class="config-ection-inner-image">
  </div><!-- INNER IMAGE -->
  <div v-if="listItems.components && listItems.components.disks">
      <Modal
        :btitle="'Disks'"
        :bmodel="'Model: Stefan'"
        :bprice="'Price: 1000 $'"
        :mtitle="'Choose CPU'"
        :array="listItems.components.disks.user_selectable_options"
      />
    </div>

  </div>

  <div class="config-section-inner">

    
    <div v-if="listItems.components && listItems.components.cpu">
      <Modal
        :key="key"
        :btitle="'CPU'"
        :bmodel="'Model: Stefan'"
        :bprice="'Price: 1000 $'"
        :mtitle="'Choose CPU'"
        :array="listItems.components.cpu.user_selectable_options"
      />
    </div>





    <div v-if="listItems.components && listItems.components.network">
      <Modal
        :key="key"
        :btitle="'Port Speed'"
        :bmodel="'Model: Arni'"
        :bprice="'Price: 500 $'"
        :mtitle="'Choose Port Speed'"
        :array="listItems.components.network.user_selectable_options"
      />
    </div>



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



<script setup>
import { ref, onMounted } from 'vue';
import Modal from '../components/Modal.vue';

const listItems = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('https://webdock.io/en/platform_data/getConfigurationData');
    const finalRes = await response.json();
    listItems.value = finalRes;
  } catch (error) {
    console.error('Fejl ved indlæsning af JSON-data:', error);
  }
});
</script>









