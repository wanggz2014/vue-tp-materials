<template>
  <div className="demo-page">
    <Test :columnConfig="columns" 
            searchUrl="tenantSearch" 
            editUrl="tenantEdit" 
            addUrl="tenantAdd" 
            deleteUrl="tenantDelete"
            baseUrl="http://localhost:8088/rest">
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
      columns: [
        { title: 'Email', key: 'email', editable: true },
        { title: 'Name', key: 'name', editable: true },
        { title: 'Create-Time', key: 'createTime' }
      ]
    }
  }
}
</script>

<style>
  .demo-page {
  }
</style>