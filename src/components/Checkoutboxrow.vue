<script setup>
    defineProps({
        title: String,
        model: String,
        number: String,
        cost: String
        
    })
</script>

<template>
        <div class="checkout-box-content-row">
          <div class="option-title">
            <h3>{{ title }}</h3>
          </div>
          <div class="model">
          <p>{{ model }}</p>
        </div>
        <div class="number">
        <p>{{ number }}</p>
      </div>
        <div class="cost">
        <p>{{ cost }}</p>
      </div>
      
        </div><!-- Checkbox Row -->
</template>

<style lang="scss" scoped>
.checkout-box-content-row {
border: 1px solid white;
display: flex;
text-align: left;
justify-content: space-between;
height: 65px;
// padding-top: 15px;

  .option-title {
    width: 100px;
    margin-left: 1em;
    
    h3 {
    font-weight: bold;
    padding-top: 20px;
    }
  }

  .model {
    text-align: left;

    p {
      padding-top: 20px;
    }
  }

  .cost {


    p {
      text-decoration: underline;
      padding-top: 20px;
      margin-right: 2em;
    }
  }

  .number {
    text-decoration: underline;
      padding-top: 20px;
      margin-right: 2em;
  }
}

.checkout-box-content-row:last-child {
  // border-bottom-left-radius: 10px;
  // border-bottom-right-radius: 10px;
}
</style>