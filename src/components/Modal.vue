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
    <a href="#" @click="openModal">
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
      <a href="#" @click="closeModal">&times;</a>
    </div>
    </div><!-- Modal -->
  </template>
  
<script>
export default {
  data(){
    return {
      isModalOpen: false
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
}
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
        background-color:$orange-color;
        padding:1%;
        font-size: 50px;
        width: 70px;
        height: 30px;
        border-radius: 10px;
        float: right;

        &:hover{
            background-color: #cd6b03;
        }
    }

.modal-content{
    display: flex;
    justify-content: space-between;
}
    
  }// Modal
  </style>
  