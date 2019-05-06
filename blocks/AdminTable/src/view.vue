<template>
  <div v-if="display">
    <AddForm :formAdd="formAdd" :addUrl="addUrl" v-if="addable"
        @on-modal-close="formAdd=false" 
        @on-modal-success="handleSearch" />
    <Card>
      <tables ref="tables" editable searchable :addable="addable" search-place="top" v-model="tableData" 
          :columns="columns" 
          @on-search="handleSearch" 
          @on-save-edit="handleEdit" 
          @on-delete="handleDelete"
          @on-add-form="formAdd=true"
          />
      <Page class="tp-table-page" :total="100" show-sizer v-if="page" />
    </Card>
  </div>
</template>

<script>
import Tables from './tables.vue';
import AddForm from './add.vue';
import HandleBtns from './handle-btns.js';
import { getTableData,delTableData,editTableData,getTableMeta,responseHandle} from './libs/data'

export default {
  name: 'tables_page',
  props:{
    searchUrl:String,
    editUrl:String,
    deleteUrl:String,
    addUrl:String,
    metaUrl:String,
    local:{
      type:Boolean,
      default:true
    },
    page:{
      type:Boolean,
      default:false
    }
  },
  components: {
    Tables,
    AddForm
  },
  data () {
    return {
      columns: [],
      tableData: [],
      formAdd:false,
      addable:this.addUrl==undefined?false:true,
      display:false
    }
  },
  methods: {
    handleDelete (params) {
      delTableData({
        requestParams:params.row,
        requestUrl:this.deleteUrl,
        local:this.local
      }).then(res=>{
        responseHandle(res,this.$Message);
      }).catch(err=>{
        console.log(err)
        this.$Message.error('删除记录异常,请核对');
      })
    },
    handleEdit(params){
      console.log(params);
      params.row[params.column.key]=params.value
      editTableData({
        requestParams:params.row,
        requestUrl:this.editUrl,
        local:this.local
      }).then(res=>{
        responseHandle(res,this.$Message);
      }).catch(err=>{
        console.log(err)
        this.$Message.error('修改记录异常,请核对');
      })
    },
    handleSearch(params){
      if(params==undefined){
        params={
          key:'',
          value:''
        }
      }
      getTableData({
        requestParams:params,
        requestUrl:this.searchUrl,
        local:this.local
      }).then(res => {
        const obj=this;
        responseHandle(res,this.$Message,function(tableData){
          obj.tableData=tableData
        });
      }).catch(err=>{
        console.log(err)
        this.$Message.error('获取记录异常,请核对');
      })
    },
    searchMeta(params){
      getTableMeta({
        requestParams:params,
        requestUrl:this.metaUrl,
        local:this.local
      }).then(res => {
        const obj=this;
        responseHandle(res,this.$Message,function(currentColumns){
          if(obj.deleteUrl!=undefined){
            currentColumns.push({
              title: '操作',
              key: 'handle',
              button:[HandleBtns.delete]
            })
          }
          obj.columns=currentColumns
        });
      }).catch(err=>{
        console.log(err)
        this.$Message.error('获取列表信息失败,请核对');
      })
    }
  },
  created () {
    //获取元信息
    this.searchMeta();
    this.handleSearch();
    this.display=true;
  }
}
</script>

<style>
  .tp-table-page{
    margin-top: 10px;
  }

</style>


