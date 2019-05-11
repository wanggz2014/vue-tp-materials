<template>
  <Modal
        title="新增"
        :value="formAdd"
        :loading="loading"
        @on-visible-change="handleChange" >
      <Form ref="addForm" :model="addForm" :rules="ruleValidate" :label-width="120">
          <FormItem  v-for="item in formItems" v-bind:key="item.prop" :label="item.label" :prop="item.prop">
            <Input v-if="item.type=='input'" v-model="addForm[item.prop]" :placeholder="item.placeholder"/>
            <DatePicker v-if="item.type=='date'" :placeholder="item.placeholder" v-model="addForm[item.prop]"></DatePicker>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleAdd()">提交</Button>
            <Button @click="handleReset()" style="margin-left: 8px">重置</Button>
          </FormItem>
      </Form>
      <template #footer>
          <div></div>
      </template>
  </Modal>
</template>

<script>
import { addTableData,responseHandle} from './libs/data'

function errorMessage(entry,message){
  entry.loading=false; 
  entry.error=true;
  entry.$Message.error(message);
}


export default {
  name: 'TablesAdd',
  props:{
    formAdd:{
      type:Boolean,
      default:false
    },
    submitUrl:String,
    formMeta:{
      type:Object,
      default(){
        return {"items":[],"rules":{}}
      }
    },
    token:String
  },
  data:function(){
    return {
      loading:true,
      error:false,
      addForm: {},
      formItems:this.formMeta.items,
      ruleValidate: this.formMeta.rules
    }
  },
  methods: {
    handleAdd(){
      const form = this.$refs.addForm;
      const entry=this;
      console.log("form add");
      form.validate((valid) => {

        if (!valid) {
          errorMessage(entry,'新增参数异常,请核对')
          return
        }
        //提交数据
        addTableData({
          requestParams:this.addForm,
          requestUrl:this.submitUrl
        }).then(res => {
          responseHandle(res,entry.$Message,function(response){
            entry.handleChange(false);
            entry.$emit('on-modal-success',response);
          })
          //this.$Message.info('新增记录成功')
        }).catch(err=>{
          console.log(err)
          errorMessage(entry,'新增存储异常,请核对')
        })
      })

    },
    handleChange(params){
      this.loading=true;
      if(!params){
        if(!this.error){
          this.handleReset();
        }
        this.$emit('on-modal-close', params)
      }
    },
    handleReset(){
      this.$refs.addForm.resetFields();
    }
  }
}
</script>
