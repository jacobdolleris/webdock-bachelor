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
        <h2>Chosen Options</h2>
      </div>

      <div class="checkout-box-content">
        <div class="checkout-box-content-row">
          <h3>CPU</h3>
          <p>Model: </p>
          <p>Cost:</p>
        </div>
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
    // background-color: red;
    display: flex;
    justify-content: center;
    width: 50%;

    .checkout-box {
      border: 1px solid white;
      border-radius: 10px;
      height: 425px;
      margin-top: 3.5em;
      width: 700px;

      .checkout-box-header {
        background-color: #EE8007;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        height: 50px;
        width: 100%;

        h2 {
          font-weight: bold;
          padding-left: 10px;
          padding-top: 8px;
        }
      }

      .checkout-box-content {
        background-color: #018971;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        height: 375px;
        width: 100%;

        .checkout-box-content-row {
          border: 1px solid white;
          display: flex;
          height: 35px;
          padding-top: 15px;
        }
      }
    }
  }

  &__checkinfo {
    // background-color: green;
    width: 50%;
  }
}

</style>

