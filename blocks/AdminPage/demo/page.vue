<template>
  <div className="demo-page">
    <AdminPage ></AdminPage>  
  </div>
</template>

<script>
import AdminPage from '../src/index';

export default {
  components: { AdminPage },
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