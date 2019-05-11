<template>
  <div className="demo-page">
    <AdminTable 
        :searchUrl="searchUrl"
        :editUrl="editUrl"
        :addConfig="addConfig"
        :deleteUrl="deleteUrl"
        :extendBtns="extendBtns"
        @on-extend-one="handleExtendOne"
        @on-extend-two="handleExtendTwo"
        @on-modal-success="handleAddSuccess">
      </AdminTable>
  </div>
</template>

<script>
import AdminTable from '../src/index';

export default {
  components: { AdminTable },
  name: 'DemoPage',
  data: function() {
    const baseUrl="http://localhost:8088/rest/";    
    return {
      searchUrl:baseUrl+'tableSearch',
      editUrl:baseUrl+'tableEdit',
      deleteUrl: baseUrl+'tableDelete',
      //columnMeta:columns,
      addConfig:{
        submitUrl:baseUrl+'tableAdd',
        formMeta:undefined,
        enable:false
      },
      extendBtns:[]
    };
  },
  methods:{
    handleExtendOne(params){
      
    },
    handleExtendTwo(params){
    
    },
    handleAddSuccess(params){
      
    }
  }
}
</script>

<style>
  .demo-page {
  }
</style>