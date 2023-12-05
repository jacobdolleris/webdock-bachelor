<script setup>
import Checkoutboxrow from '@/components/Checkoutboxrow.vue'
</script>

<template>


  <main class="content--container">


  <section class="content--container__checklist">

    <div class="checkout-box">
      <div class="checkout-box-header">
        <h2>Chosen Options</h2>
      </div>

      <div class="checkout-box-content">
        <Checkoutboxrow
        title='CPU'
        model='Jacob A/S'
        cost='10.000 kr'
        />
        <Checkoutboxrow
        title='RAM'
        model='Jacob A/S'
        cost='10.000 kr'
        />
        <Checkoutboxrow
        title='DISCS'
        model='Jacob A/S'
        cost='10.000 kr'
        />
        <Checkoutboxrow
        title='Port Speed'
        model='Jacob A/S'
        cost='10.000 kr'
        />
      </div>
    </div><!-- Checkout Box -->

  </section><!-- Checkout Listing -->

  <section class="content--container__checkinfo">
    <div></div>
  </section><!-- Checkout Info -->



  </main>


  <div class="footer-replacement ignore"> <h2>Footer</h2></div>

</template>


<style lang="scss" scoped>
@import '../assets/main.scss';

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
      height: fit-content;
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
        // height: 175px;
        width: 100%;

        .checkout-box-content-row {
          border: 1px solid white;
          display: flex;
          height: 45px;
          // padding-top: 15px;

          .option-title {
            width: 200px;
            
            h3 {
            font-weight: bold;
            padding-left: 1em;
            padding-top: 10px;
          }
          }

          .model {
            padding-left: 2em;
            p {
              padding-top: 10px;
            }
          }

          .cost {
            padding-left: 8em;

            p {
              padding-top: 10px;
            }
          }
          
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

