<template>
  <div v-if="display">
    <AddForm :formAdd="formAdd" 
              :submitUrl="addConfig.submitUrl"
              :formMeta="addConfig.formMeta" 
        v-if="addConfig.enable"
        @on-modal-close="formAdd=false" 
        @on-modal-success="handleModalSuccess" />
    <Card>
      <tables ref="tables" editable searchable :addable="addConfig.enable" search-place="top" v-model="tableData" 
          :columns="columnMeta" 
          :height="height"
          @on-search="handleSearch" 
          @on-save-edit="handleEdit" 
          @on-delete="handleDelete"
          @on-add-form="formAdd=true"
          @on-extend-one="handleExtendOne"
          @on-extend-two="handleExtendTwo"
          />
      <Page class="tp-table-page"
         :total="pageInfo.total" 
         :page-size="pageInfo.pageSize" 
         :current="pageInfo.current"
         @on-change="handlePageChange"
         @on-page-size-change="handlePageSizeChange" 
         show-sizer v-if="pageInfo.page" />
    </Card>
  </div>
</template>

<script>
import Tables from './tables.vue';
import AddForm from './add.vue';
import HandleBtns from './handle-btns.js';
import mock from './mock.json';
import { getTableData,delTableData,editTableData,responseHandle} from './libs/data'

export default {
  name: 'tables_page',
  props:{
    searchUrl:String,
    editUrl:String,
    deleteUrl:String,
    addConfig:{
      type:Object,
      default () {
        return {
          enable:false,
          submitUrl:'',
          formMeta:{"items":[],"rules":{}}
        }
      }
    },
    extendBtns:{
      type:Array,
      default(){
        return []
      }
    },
    columnMeta:{
      type:Array,
      default(){
        return mock.columns
      }
    },
    token:String,
    page:{
      type:Boolean,
      default:true
    },
    height:{
      type:Number,
      default:400
    }
  },
  components: {
    Tables,
    AddForm
  },
  data () {
    return {
      tableData: [],
      pageInfo:{
        total:0,
        pageSize:7,
        current:1,
        params:null,
        page:this.page
      },
      formAdd:false,
      display:true
    }
  },
  methods: {
    handleDelete (params) {
      delTableData({
        requestParams:params.row,
        requestUrl:this.deleteUrl
      }).then(res=>{
        responseHandle(res,this.$Message);
        this.$Message.info('删除记录成功')
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
        requestUrl:this.editUrl
      }).then(res=>{
        responseHandle(res,this.$Message);
        this.$Message.info('修改记录成功')
      }).catch(err=>{
        console.log(err)
        this.$Message.error('修改记录异常,请核对');
      })
    },
    handleSearch(params){
      if(this.searchUrl==undefined){
        return this.tableData=[];
      }

      if(params==undefined){
        params={};
      }

      if(this.pageInfo.page){
        this.pageInfo.params=params;
        params.pageNo=this.pageInfo.current;
        params.pageSize=this.pageInfo.pageSize;
      }
      getTableData({
        requestParams:params,
        requestUrl:this.searchUrl
      }).then(res => {
        const obj=this;
        responseHandle(res,this.$Message,function(response){
          obj.tableData=response.content
          //console.log(obj.tableData)
          if(obj.pageInfo.page){
            obj.pageInfo.total=parseInt(response.totalElements)
            obj.pageInfo.current=parseInt(response.number)+1
          }
        });
        //this.$Message.info('获取记录成功')
      }).catch(err=>{
        console.log(err)
        this.$Message.error('获取记录异常,请核对');
      })
    },
    handleModalSuccess(params){
      this.formAdd=false;
      //this.pageInfo.current=params;
      this.handleSearch(this.pageInfo.params);
      this.$emit('on-modal-success',params); 
    },
    handleExtendOne(params){
      //console.log(params);
      this.$emit('on-extend-one', params)
    },
    handleExtendTwo(params){
      //console.log(params);
      this.$emit('on-extend-two', params)
    },
    handlePageChange(params){
      console.log('paras:'+params);
      this.pageInfo.current=params;
      this.handleSearch(this.pageInfo.params);
    },
    handlePageSizeChange(params){
      console.log('paras:'+params);
      this.pageInfo.pageSize=params;
      this.handleSearch(this.pageInfo.params);
    },
    initMeta(){
      const buttons=[];
      console.log("delete url :"+this.deleteUrl);
      if(this.deleteUrl!=undefined){
        buttons.push(HandleBtns.delete)
      }

      console.log(this.extendBtns);
      for(let i in this.extendBtns){
        const extend=this.extendBtns[i];
        buttons.push(HandleBtns[extend.name](extend.icon,extend.title,extend.message))
      }

      if(buttons.length>0){
        this.columnMeta.push({
          title: '操作',
          key: 'handle',
          button:buttons
        })
      }
      console.log(this.columnMeta)
    }
  },
  created () {
    //获取元信息
    this.initMeta();
    this.handleSearch();

  }
}
</script>

<style>
  .tp-table-page{
    margin-top: 10px;
  }

</style>


