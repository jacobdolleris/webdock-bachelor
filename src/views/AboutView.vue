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




