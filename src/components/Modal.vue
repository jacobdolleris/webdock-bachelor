<script setup>
      defineProps({
        btitle: String,
        bmodel: String,
        bprice: String,
        mtitle: String
    })
</script>

<template>
  <div>
    <a href="#" @click.prevent="openModal">
      <div class="config-section-inner-option">
        <h2>{{ btitle }}</h2>
        <h3>{{ bmodel }}</h3>
        <h3>{{ bprice }}</h3>
      </div>
    </a>

  </div><!-- Button -->

  <div v-if="isModalOpen" class="modal">
    <div class="modal-content">
      <h1>{{ mtitle }}</h1>
      <a href="#" @click.prevent="closeModal">&times;</a>
    </div>

    <div v-for="(value, key) in listItems.components.disks.user_selectable_options" :key="key" style="border: 1px solid white;">
      <h2>Navn {{ value.model }}</h2> <br>
      Plads {{ value.capacity }} <br>
      Pris {{ value.price_dkk_cent }} kr
    </div>

    
    </div><!-- Modal -->
  </template>
  
<script>
// import data from 'https://webdock.io/en/platform_data/getConfigurationData';
export default {
  data() {
    return {
      isModalOpen: false,
      listItems: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    async loadData() {
      try {
        const response = await fetch('https://webdock.io/en/platform_data/getConfigurationData');
        const finalRes = await response.json();
        this.listItems = finalRes;
      } catch (error) {
        console.error('Fejl ved indlæsning af JSON-data:', error);
      }
    },
  },
};
</script>
  
<style lang="scss" scoped>
$teal-color: #01A1A1;
$orange-color:#EE8007;
$webdock-green:#018971;
$dark-green:#008661;
$dark-grey-background:#2C404A;
$grey:#666666;
$dark-grey:#333333;
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    width: 850px;
    height: 600px;
    background-color:$dark-grey-background;
    border-radius: 10px;
    border: 3px solid $orange-color;
  
    a{
        font-size: 50px;
        margin-top: -20px;

        &:hover{
          color: $orange-color;
        }
    }

.modal-content{
    display: flex;
    justify-content: space-between;
}
    
  }// Modal
  </style>
  