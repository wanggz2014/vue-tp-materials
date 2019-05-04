<template>
  <div>
    <AddForm :formAdd="formAdd" :addUrl="addUrl" :baseUrl="baseUrl" v-if="addable"
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
import { getTableData,delTableData,editTableData } from './libs/data'

export default {
  name: 'tables_page',
  props:{
    searchUrl:String,
    editUrl:String,
    deleteUrl:String,
    addUrl:String,
    baseUrl:String,
    columnConfig:Array,
    page:Boolean
  },
  components: {
    Tables,
    AddForm
  },
  data () {
    const currentColumn=this.columnConfig;
    if(this.deleteUrl!=undefined){
      //核对不存在handle
      if(currentColumn[currentColumn.length-1].key!="handle"){
        currentColumn.push({
          title: '操作',
          key: 'handle',
          options: ['delete'],
          button: [
            (h, params, vm) => {
              return h('Poptip', {
                props: {
                  confirm: true,
                  title: '你确定要删除吗?',
                  transfer:true,
                  "popper-class":"table-delete-pop"
                },
                on: {
                  'on-ok': () => {
                    vm.$emit('on-delete', params);
                    vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))
                  }
                }
              })
            }
          ]
        })
      }
    }
    return {
      columns: currentColumn,
      tableData: [],
      formAdd:false,
      addable:this.addUrl==undefined?false:true
    }
  },
  methods: {
    handleDelete (params) {
      delTableData({
        requestParams:params.row,
        requestUrl:this.deleteUrl,
        baseUrl:this.baseUrl
      }).catch(err=>{
        this.$Message.error('删除记录异常,请核对');
      })
    },
    handleEdit(params){
      console.log(params);
      params.row[params.column.key]=params.value
      editTableData({
        requestParams:params.row,
        requestUrl:this.editUrl,
        baseUrl:this.baseUrl
      }).catch(err=>{
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
        baseUrl:this.baseUrl
      }).then(res => {
        console.log(res);
        this.tableData=res.data
      })
    }
  },
  mounted () {
    this.handleSearch();
  }
}
</script>

<style>
  .tp-table-page{
    margin-top: 10px;
  }

</style>
