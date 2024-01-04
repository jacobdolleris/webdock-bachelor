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
// const selectCabinetOption = ref(null);
const selectedMemoryOption = ref(null);
const selectedDiskOption = ref(null);
const selectedCpuOption = ref(null);
// const totalCost = parseInt((selectedMemoryOption ? selectedMemoryOption.price_dkk_cent : '')) + parseInt((selectedMemoryOption ? selectedMemoryOption.price_dkk_cent: ''));

const updateSelectedMemoryOption = (option) => {
  selectedMemoryOption.value = option;
};

const updateSelectedDiskOption = (option) => {
  selectedDiskOption.value = option;
};

const updateSelectedCpuOption = (option) => {
  selectedCpuOption.value = option;
};

// const updateSelectedCabinetOption = (option) => {
//   selectCabinetOption.value = option;
// };

const addToCheckout = (selectedOption) => {

  console.log('Valgt mulighed:', selectedOption);


  //  const priceInKr = selectedOption.price_dkk_cent / 100;


  //   updateTotalCost(priceInKr);
};

</script>

<template>


  <main class="content">


 <header>
  <h1>Configure your OWN VPS server with YOUR own cinfiguration settings</h1>
  <h2>For the best experience!</h2>
  
  <div class="goto-config">
    <a href="#config">

    <!-- <img src="../assets/img/icons/Arrow.png" alt=""> -->
    <div>
      &darr;

</div>
</a>
</div>
  <hr id="config">
 </header>

<div class="DD-box">
  <div class="dropdown">
  <button class="dropdown-btn">Choose Cabinet</button>
  <div class="dropdown-content">
  <a href="#">Cabinet 1</a>
  <a href="#">Cabinet 2</a>
  <a href="#">Cabinet 3</a>
  </div>
</div>
</div>

<section class="config-section">

  <div class="config-section-inner">


    <div v-if="listItems.components && listItems.components.cpu">
      <Modal
        :key="key"
        :btitle="'CPU'"
        :bmodel='selectedCpuOption ? selectedCpuOption.model : "Choose Option"'
        :bprice='selectedCpuOption ? selectedCpuOption.price_dkk_cent : 0'
        :mtitle="'Choose CPU'"
        :desc="listItems.components.cpu.description"
        :array="listItems.components.cpu.user_selectable_options"
        :selectedOption="selectedCpuOption"
        :updateSelectedOption="updateSelectedCpuOption"
        :addToCheckout="addToCheckout"
      />
    </div>
   


  <div class="config-ection-inner-image">
  </div><!-- INNER IMAGE -->

  <div v-if="listItems.components && listItems.components.memory">
        <Modal
          :key="key"
          :btitle="'Ram'"
          :bmodel='selectedMemoryOption ? selectedMemoryOption.model : "Choose Option"'
          :bprice='selectedMemoryOption ? selectedMemoryOption.price_dkk_cent : 0'
          :mtitle="'Choose RAM'"
          :desc="listItems.components.memory.description"
          :array="listItems.components.memory.user_selectable_options"
          :selectedOption="selectedMemoryOption"
          :updateSelectedOption="updateSelectedMemoryOption"
          :addToCheckout="addToCheckout"
        />
      </div>

  </div><!-- Config Section Inner -->

  <div class="config-section-inner">

    <div v-if="listItems.components && listItems.components.disks">
        <Modal
          :key="key"
          :btitle="'Discs'"
          :bmodel='selectedDiskOption ? selectedDiskOption.model : "Choose Option"'
          :bprice='selectedDiskOption ? selectedDiskOption.price_dkk_cent : 0'
          :mtitle="'Choose Disc'"
          :desc="listItems.components.disks.description"
          :array="listItems.components.disks.user_selectable_options"
          :selectedOption="selectedDiskOption"
          :updateSelectedOption="updateSelectedDiskOption"
          :addToCheckout="addToCheckout"
        />
      </div>
    


    <div v-if="listItems.components && listItems.components.network">
      <Modal
        :key="key"
        :btitle="'Port Speed'"
        :desc="listItems.components.network.description"
        :bmodel='selectedNetworkOption ? selectedNetworkOption.model : "Choose Option"'
        :bprice='selectedNetworkOption ? selectedNetworkOption.price_dkk_cent : 0'
        :mtitle="'Choose Port Speed'"
        :array="listItems.components.network.user_selectable_options"
      />
    </div>

    </div><!-- Config Section Inner -->
    <div class="goto-checkout">
      <h2 style="margin-bottom: 20px;">Checkout</h2>
      <a href="#checkout">

      <!-- <img src="../assets/img/icons/Arrow.png" alt=""> -->
      <div>
        &darr;

  </div>
</a>
</div><!-- go to checkout -->

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
      <!-- <Checkoutboxrow
      title='Cabinet'
      model='-'
      cost=''
      number='-'
      /> -->
      <Checkoutboxrow
      title='CPU'
      :model='selectedCpuOption ? selectedCpuOption.model : ""'
      :cost='selectedCpuOption ? selectedCpuOption.price_dkk_cent : null'
      number='1 pcs'
      @updateTotalCost="updateTotalCost('cpu', $event)"
      />
      <Checkoutboxrow
      title='RAM'
      :model='selectedMemoryOption ? selectedMemoryOption.model : "-"'
      :cost='selectedMemoryOption ? selectedMemoryOption.price_dkk_cent : null'
      number='1 pcs'
      @updateTotalCost="updateTotalCost('memory', $event)"
      />
      <Checkoutboxrow
      title='DISCS'
      :model='selectedDiskOption ? selectedDiskOption.model : "-"'
      :cost='selectedDiskOption ? selectedDiskOption.price_dkk_cent : null'
      number='1 pcs'
      @updateTotalCost="updateTotalCost('disk', $event)"
      />
      <!-- <Checkoutboxrow
      title='Port Speed'
      :model='selectedNetworkOption ? selectedNetworkOption.model : "-"'
      :cost='selectedNetworkOption ? selectedNetworkOption.price_dkk_cent : null'
      number='1 stks'
      /> -->

      <!-- <Checkoutboxrow
      title='CPU'
      :model='selectedCpuOption ? selectedCpuOption.model : "-"'
      :cost='selectedCpuOption ? selectedCpuOption.price_dkk_cent : 0'
      number='1 stks'
      @updateTotalCost="updateTotalCost"
      /> -->
    </div>
  </div><!-- Checkout Box -->


  <div class="total-cost-box">
    <h2 class="total-cost-title">Total Cost</h2>

  <div class="total-wrapper">
    <div class="total-cost">
      <h3>{{ totalCost }}</h3>
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

    <h1>Information About Checkout</h1>
    <h2>Lorem ipsum dolor sit amet conectetur adipisicing elit Ipsum porro repellendus illo earum eos quam!</h2>
    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi distinctio incidunt ipsam neque ex aliquam nostrum architecto fugit. Ullam quasi hic nostrum similique praesentium dolores voluptate reprehenderit repellendus perferendis eius.</h3>

  </div>
</section><!-- Checkout Info -->



</main><!-- Content Container -->


<!-- 
  <div class="footer-replacement ignore"> <h2>Footer</h2></div> -->

</template>

<script>
export default {
  data() {
    return {
      totalCost: 0,
      selectedProducts: {
        cpu: null,
        memory: null,
        disk: null,
      },
      key: null,
    };
  },
  methods: {
    updateTotalCost(productCategory, newCost) {
      this.selectedProducts[productCategory] = newCost;

      this.totalCost = Object.values(this.selectedProducts).reduce((sum, cost) => sum + cost, 0)
    }
    // updateTotalCost(newCost) {
    // Vue.nextTick(() => {
    //   this.totalCost += newCost;
    // });
  },
    formatCurrency(amount) {
      return new Intl.NumberFormat('da-DK', { style: 'currency', currency: 'DKK' }).format(amount);
    }
  };
</script>











