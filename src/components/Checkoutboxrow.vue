<script setup>
    defineProps({
        title: String,
        model: String,
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
        <div class="cost">
        <p>{{ cost }}</p>
      </div>
        </div><!-- Checkbox Row -->
</template>

<style lang="scss" scoped>
.checkout-box-content-row {
border: 1px solid white;
display: flex;
height: 65px;
// padding-top: 15px;

  .option-title {
    width: 200px;
    
    h3 {
    font-weight: bold;
    padding-left: 1em;
    padding-top: 20px;
    }
  }

  .model {
    padding-left: 2em;
    p {
      padding-top: 20px;
    }
  }

  .cost {
    padding-left: 12em;

    p {
      text-decoration: underline;
      padding-top: 20px;
    }
  }
}

.checkout-box-content-row:last-child {
  // border-bottom-left-radius: 10px;
  // border-bottom-right-radius: 10px;
}
</style>