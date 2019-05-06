<template>
  <div className="demo-page">
    <Test   :searchUrl="searchUrl"
            :editUrl="editUrl"
            :addUrl="addUrl"
            :deleteUrl="deleteUrl"
            :metaUrl="metaUrl"
            :local="local"
            :page="page">
    </Test>  
    <!-- <Test   :deleteUrl="deleteUrl"
            :local="local"
            :page="page">
    </Test>   -->
  </div>
</template>

<script>
import Test from '../src/index';

export default {
  components: { Test },
  name: 'DemoPage',
  data:function() {
    const baseUrl="http://localhost:8088/rest/";
    return {
      searchUrl:baseUrl+"tableSearch",
      editUrl:baseUrl+"tableEdit", 
      addUrl:baseUrl+"tableAdd", 
      deleteUrl:baseUrl+"tableDelete",
      metaUrl:baseUrl+"tableMeta",
      local:false,
      page:false
    }
  }
}
</script>

<style>
  .demo-page {
  }
</style>