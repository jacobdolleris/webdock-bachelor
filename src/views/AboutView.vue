<!-- <style>
  @import '../assets/main.scss';
</style> -->

<script setup>

</script>

<template>

<div class="top-menu-replacement ignore"><h2>About side</h2></div>

  <main class="content--container">


  <section class="content--container__checklist">

    <div class="checkout-box">
      <div class="checkout-box-header">
        
      </div>
    </div>

  </section><!-- Checkout Listing -->

  <section class="content--container__checkinfo">
    <div></div>
  </section><!-- Checkout Info -->



  </main>


  <div class="footer-replacement ignore"> <h2>Footer</h2></div>

</template>


<style lang="scss">

.content--container {
  background-color: #666666;
  display: flex;
  height: 705px;
  width: 100%;

  &__checklist {
    background-color: red;
    display: flex;
    justify-content: center;
    width: 50%;

    .checkout-box {
      border: 1px solid white;
      border-radius: 10px;
      height: 425px;
      margin-top: 3.5em;
      width: 700px;
    }
  }

  &__checkinfo {
    background-color: green;
    width: 50%;
  }
}

</style>

