<template>
  <div className="demo-page">
    <Test>
      <template slot="default">
        Default Slot
      </template>
    </Test>  
  </div>
</template>

<script>
import Test from '../src/index';

export default {
  components: { Test },
  name: 'DemoPage',
  data:function() {
    return {
    }
  }
}
</script>

<style>
  .demo-page {
  }
</style>