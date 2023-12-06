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


<style lang="scss" scoped>
@import '../assets/main.scss';

.content--container {
  background-color: #2C404A;
  display: flex;
  height: 705px;
  width: 100%;

  &__checklist {
    // background-color: red;
    justify-content: center;
    padding-top: 6.5em;
    width: 50%;

    .checkout-box {
      border: 1px solid white;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      height: fit-content;
      margin: 0 auto;
      width: 700px;

      .checkout-box-header {
        background-color: #EE8007;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        height: 50px;
        width: 100%;

        h2 {
          font-weight: bold;
          padding-left: 0.7em;
          padding-top: 8px;
        }
      }

      .checkout-box-content {
        background-color: #018971;
        // border-bottom-left-radius: 10px;
        // border-bottom-right-radius: 10px;
        // height: 175px;
        width: 100%;
      }
    }

  .total-cost-box {
    // background-color: green;
    margin: 0 auto;
    margin-top: 5em;
    width: 700px;
    .total-cost-title {
      font-weight: bold;
      // margin-left: 0.7em;
      margin-top: 1em;
    }

    .total-wrapper {
      display: flex;
      .total-cost {
      background-color: #333333;
      border: 2px solid #EE8007;
      border-radius: 10px;
      height: 60px;
      // margin-left: 0.7em;
      margin-top: 1em;
      width: 275px;

      h3 {
        font-size: 30px;
        padding-top: 10px;
        text-align: center;
      }
    }

    .checkout-btn {
      background-color: #01A1A1;
      border-radius: 10px;
      height: 60px;
      margin-left: 9em;
      margin-top: 1em;
      width: 275px;

      h3 {
        font-size: 30px;
        font-weight: bold;
        padding-top: 10px;
        text-align: center;
      }
    }
    .checkout-btn:hover {
      cursor: pointer;
      background-color: #018585;
    }
    }

    p {
      margin-top: 0.5em;
    }
  }



  }

  &__checkinfo {
    padding-top: 6.5em;
    width: 50%;

    .text-wrapper {
      // background-color: #EE8007;
      height: 500px;
      padding-left: 3em;
      width: 90%;

      h1 {
        padding-top: 0.2em;
      }

      h2 {
        font-weight: 300;
        margin-top: 1.6em;
      }

      h3 {
        margin-top: 2em;
      }
    }
  }
}

</style>

