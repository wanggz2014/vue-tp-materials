<template>
  <div className="demo-page">
    <Test >
      <template #default >
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
      defaultMenuItem:'useradd',
      menuUrl:"http://localhost:8088/rest/menu"
    }
  }
}
</script>

<style>
  .demo-page {
  }
</style>