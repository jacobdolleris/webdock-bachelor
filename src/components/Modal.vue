<script setup>
      defineProps({
        btitle: String,
        bmodel: String,
        bprice: Number,
        mtitle: String,
        desc: String,
        array: Array,
        selectedOption: Object,
        updateSelectedOption: Function,
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

  </div>

  <div v-if="isModalOpen" class="modal">
    <div class="modal-content">

      <h1>{{ mtitle }}</h1>
      <a href="#" @click.prevent="closeModal">&times;</a>
      
    </div><!-- Modal Content -->
    <h2 class="description">{{ desc }}</h2>
    <div v-for="(item, key) in array" :key="key" :class="{ 'modal-inner': true, 'active': key === selectedIndex }">
      <a href="#" class="Choose-option" @click.prevent="selectItem(item)">
        <h2>Model: {{ item.model }}</h2>
        <h2>Capacity: {{ item.capacity }} <br></h2>
        <h2>Price: {{ item.price_dkk_cent }} kr.-</h2>
      </a>
    </div>
    <button class="accept-btn cancel-btn" @click="closeModal">Cancel</button>
  </div>
  </template>
  
<script>
export default {
  data() {
    return {
      isModalOpen: false,
      listItems: [],
      selectedIndex: null,

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
    setActiveIndex(index, item) {
      this.selectedIndex = index;
    },

    selectItem(item) {
      // Opdater den valgte mulighed
      this.updateSelectedOption(item);
      this.closeModal();
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
    background-color:$dark-grey;
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

    h1 {
      margin-bottom: 1em;
    }
}

.description {
  margin-bottom: 1em;
}

.modal-inner{
  border: 3px solid $teal-color;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: $dark-grey-background;
  

  &:hover{
    background-color: $webdock-green;

  }
}

.accept-btn{
  background-color: $dark-green;
  padding: 20px;
  font-size: 25px;
  border: none;
  border-radius: 10px;

  &:hover{
    background-color: $webdock-green;
  }
}

.cancel-btn{
  background-color: red;
  margin-left: 20px;

  &:hover{
    background-color: darkred;
    cursor: pointer;
  }
}

.Choose-option.active {
  background-color: $teal-color;
}
    
  }// Modal
  </style>
  