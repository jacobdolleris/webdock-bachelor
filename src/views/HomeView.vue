<template>
  <main class="content">
    <header>
      <h1>Configure your OWN VPS server with YOUR own cinfiguration settings</h1>
      <h2>For the best experience!</h2>
      <div class="goto-config">
        <a href="#config">
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
        :bprice='selectedCpuOption ? selectedCpuOption.price_usd_display : "$ 0"'
        :mtitle="'Choose CPU'"
        :desc="listItems.components.cpu.description"
        :array="listItems.components.cpu.user_selectable_options"
        :selectedOption="selectedCpuOption"
        :updateSelectedOption="updateSelectedCpuOption"
      />
    </div>

  <div class="config-ection-inner-image">
  </div><!-- INNER IMAGE -->

  <div v-if="listItems.components && listItems.components.memory">
        <Modal
          :key="key"
          :btitle="'Ram'"
          :bmodel='selectedMemoryOption ? selectedMemoryOption.model : "Choose Option"'
          :bprice='selectedMemoryOption ? selectedMemoryOption.price_usd_display  : "$ 0"'
          :mtitle="'Choose RAM'"
          :desc="listItems.components.memory.description"
          :array="listItems.components.memory.user_selectable_options"
          :selectedOption="selectedMemoryOption"
          :updateSelectedOption="updateSelectedMemoryOption"
        />
      </div>

  </div><!-- Config Section Inner -->

  <div class="config-section-inner">

    <div v-if="listItems.components && listItems.components.disks">
        <Modal
          :key="key"
          :btitle="'Discs'"
          :bmodel='selectedDiskOption ? selectedDiskOption.model : "Choose Option"'
          :bprice='selectedDiskOption ? selectedDiskOption.price_usd_display : "$ 0"'
          :mtitle="'Choose Disc'"
          :desc="listItems.components.disks.description"
          :array="listItems.components.disks.user_selectable_options"
          :selectedOption="selectedDiskOption"
          :updateSelectedOption="updateSelectedDiskOption"
        />
      </div>
    


    <div v-if="listItems.components && listItems.components.network">
      <Modal
        :key="key"
        :btitle="'Port Speed'"
        :desc="listItems.components.network.description"
        :bmodel="'Choose Option'"
        :mtitle="'Choose Port Speed'"
        :array="listItems.components.network.user_selectable_options"
      />
    </div>

    </div><!-- Config Section Inner -->
    <div class="goto-checkout">
      <h2 style="margin-bottom: 20px;">Checkout</h2>
      <a href="#checkout">

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
      <Checkoutboxrow
      title='CPU'
      :model='selectedCpuOption ? selectedCpuOption.model : "-"'
      :cost='selectedCpuOption ? selectedCpuOption.price_usd_display : "-"'
      number='1 pcs'
      />
      <Checkoutboxrow
      title='RAM'
      :model='selectedMemoryOption ? selectedMemoryOption.model : "-"'
      :cost='selectedMemoryOption ? selectedMemoryOption.price_usd_display : "-"'
      number='1 pcs'
      />
      <Checkoutboxrow
      title='DISCS'
      :model='selectedDiskOption ? selectedDiskOption.model : "-"'
      :cost='selectedDiskOption ? selectedDiskOption.price_usd_display : "-"'
      number='1 pcs'
      />
    </div>
  </div><!-- Checkout Box -->


  <div class="total-cost-box">

    <h2 class="total-cost-title">Total Cost</h2>
    <div class="total-wrapper">
    <div class="total-cost">
      <h3>$ {{ totalPriceInDollars }}</h3>
    </div>
    <div class="checkout-btn">
      <h3>Checkout</h3>
    </div>
  </div>
    <p>
      (Value changes depending on chosen
      <br>
      selections)
    </p>
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
</template>

<script setup>
import { ref, onMounted, computed, } from 'vue';
import Modal from '../components/Modal.vue';
import Checkoutboxrow from '@/components/Checkoutboxrow.vue'

import { fetchData } from '@/assets/api.js';

const listItems = ref([]);
const selectedMemoryOption = ref(null);
const selectedDiskOption = ref(null);
const selectedCpuOption = ref(null);
const key = ref(0);

const diskPrice = ref(0);
const memoryPrice = ref(0);
const cpuPrice = ref(0);

// Afkommenterede det, da den ikke bliver brugt til noget
// const totalPrice = computed(()=> 
//   diskPrice.value + memoryPrice.value + cpuPrice.value
// );

const updateSelectedMemoryOption = (option) => {
  selectedMemoryOption.value = option;
  key.value += 1;
  memoryPrice.value = selectedMemoryOption.value.price_usd_cent;
};

const updateSelectedDiskOption = (option) => {
  selectedDiskOption.value = option;
  key.value += 1;
  diskPrice.value = selectedDiskOption.value.price_usd_cent;
};

const updateSelectedCpuOption = (option) => {
  selectedCpuOption.value = option;
  key.value += 1;
  cpuPrice.value = selectedCpuOption.value.price_usd_cent;
};


  // Dette konvertere prisen fra cent til dollars med to decimaler:
const toDollars = (priceInCents) => {
  return (priceInCents / 100).toFixed(2);
};

const totalPriceInDollars = computed(() => {
  const diskPriceInDollars = toDollars(diskPrice.value);
  const memoryPriceInDollars = toDollars(memoryPrice.value);
  const cpuPriceInDollars = toDollars(cpuPrice.value);

  return (
    parseFloat(diskPriceInDollars) +
    parseFloat(memoryPriceInDollars) +
    parseFloat(cpuPriceInDollars)
  ).toFixed(2);
});


onMounted(async () => {
  listItems.value = await fetchData();
});

</script>

<!-- Prøvede at få det til at virke, gik sgu ikke rigtigt, tror vi skal bruge vuex eller pinia for at gemme i local storage -->
<!-- <script>
export default {
  data() {
    return {
      selectedCpuOption: JSON.parse(localStorage.getItem('selectedCpuOption')) || null,
    }
  },
  methods: {
    updateSelectedCpuOption(newOption) {
      this.selectedCpuOption = newOption;
      localStorage.setItem('selectedCpuOption', JSON.stringify(newOption));
    },
    saveSelectedOption() {
      this.updateSelectedCpuOption(this.selectedCpuOption);
    }
  },
}
</script> -->