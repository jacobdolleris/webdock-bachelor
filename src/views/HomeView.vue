

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
        :btitle="'Ram'"
        :bmodel="'Model: Stefan'"
        :bprice="'Price: 1000 $'"
        :mtitle="'Choose Ram'"
        :array="listItems.components.memory.user_selectable_options"
      />
    </div>


  <div class="config-ection-inner-image">
  </div><!-- INNER IMAGE -->
  <div v-if="listItems.components && listItems.components.disks">
    <Modal
        :key="key"
        :btitle="'DISKS'"
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

  <hr id="checkout" style="margin-top: 50px;">




  </main>



  <main class="content--container">


<section class="content--container__checklist">

  <div class="checkout-box">
    <div class="checkout-box-header">
      <h2>Chosen Options</h2>
    </div>

    <div class="checkout-box-content">
      <Checkoutboxrow
      title='Cabinet'
      model='model2'
      cost='12.500 kr'
      number='2 stks'
      />
      <Checkoutboxrow
      title='CPU'
      model='model 2'
      cost='10.000 kr'
      number='2 stks'
      />
      <Checkoutboxrow
      title='RAM'
      model='model 3'
      cost='1058.500 kr'
      number='2 stks'
      />
      <Checkoutboxrow
      title='DISCS'
      model='model 4'
      cost='3500 kr'
      number='2 stks'
      />
      <Checkoutboxrow
      title='Port Speed'
      model='model 5'
      cost='10.000 kr'
      number='2 stks'
      />
    </div>
  </div><!-- Checkout Box -->

  <!-- <div v-if="selectedData" class="selected-data">
        <h2>Selected Model: {{ selectedData.model }}</h2>
        <h2>Selected Capacity: {{ selectedData.capacity }} <br></h2>
        <h2>Selected Pris: {{ selectedData.price_dkk_cent }} kr</h2>
      </div> -->

  <div class="total-cost-box">
    <h2 class="total-cost-title">Total Cost</h2>

  <div class="total-wrapper">
    <div class="total-cost">
    <h3>##.##.##,## $</h3>
    </div>
    <div class="checkout-btn">
      <h3>Checkout</h3>
    </div>
  </div>


    <p>(Value changes depending on chosen
      <br>
      selections)</p>
  </div><!-- Total Cost Box -->

</section><!-- Checkout Listing -->


<section class="content--container__checkinfo">
  <div class="text-wrapper">

    <h1>Information about <span style="color: #01A1A1">checkout</span></h1>
    <h2>Lorem ipsum dolor sit amet conectetur <span style="color: #01A1A1; text-decoration: underline;">adipisicing elit</span> Ipsum porro repellendus illo earum eos quam!</h2>
    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi distinctio incidunt ipsam neque ex aliquam nostrum architecto fugit. Ullam quasi hic nostrum similique praesentium dolores voluptate reprehenderit repellendus perferendis eius.</h3>

  </div>
</section><!-- Checkout Info -->



</main><!-- Content Container -->



  <div class="footer-replacement ignore"> <h2>Footer</h2></div>

</template>



<script setup>
import { ref, onMounted } from 'vue';
import Modal from '../components/Modal.vue';
import Checkoutboxrow from '@/components/Checkoutboxrow.vue'

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

<script>
export default {
  components: {
    Modal,
  },
  data() {
    return {
      listItems: {
        components: {
          disks: {
            user_selectable_options: [
              // Your disk options data here
            ],
          },
          memory: {
            user_selectable_options: [
              // Your memory options data here
            ],
          },
          // Add more components as needed
        },
      },
      selectedDisk: null,
      selectedMemory: null,
      // Add more variables for other components as needed
    };
  },
  methods: {
    selectDisk(disk) {
      this.selectedDisk = { ...disk };
    },
    selectMemory(memory) {
      this.selectedMemory = { ...memory };
    },
    // Add more methods for other components as needed
  },
};
</script>












