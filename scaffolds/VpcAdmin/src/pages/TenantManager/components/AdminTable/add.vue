<template>
  <Modal
        title="新增"
        :value="formAdd"
        :loading="loading"
        @on-ok="handleAdd"
        @on-visible-change="handleChange" >
      <Form ref="addForm" :model="addForm" :rules="ruleValidate" :label-width="120">
          <FormItem label="Name" prop="name">
              <Input v-model="addForm.name" placeholder="Enter your name"/>
          </FormItem>
          <FormItem label="E-mail" prop="email">
              <Input v-model="addForm.email" placeholder="Enter your e-mail"/>
          </FormItem>
          <FormItem label="Create-Time" prop="createTime">
              <DatePicker type="date" placeholder="Select date" v-model="addForm.createTime"></DatePicker>
          </FormItem>
      </Form>  
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
    addUrl:String
  },
  data:function(){
    return {
      loading:true,
      error:false,
      addForm: {
          name: '',
          email: '',
          createTime:''
      },
      ruleValidate: {
          name: [
              { required: true, message: 'The name cannot be empty', trigger: 'blur' }
          ],
          email: [
              { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
              { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
          ],
          createTime: [
              { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
          ]
      }
    }
  },
  methods: {
    handleAdd(){
      const form = this.$refs.addForm;
      const entry=this;
      //console.log(this.loading);
      form.validate((valid) => {
        if (!valid) {
          errorMessage(entry,'新增参数异常,请核对')
          return
        }
        //提交数据
        addTableData({
          requestParams:this.addForm,
          requestUrl:this.addUrl
        }).then(res => {
          responseHandle(res,entry.$Message,function(){
            entry.handleChange(false);
            entry.$emit('on-modal-success');
          })
        }).catch(err=>{
          errorMessage(entry,'新增存储异常,请核对')
        })
      })

    },
    handleChange(params){
      this.loading=true;
      if(!params){
        if(!this.error){
          this.$refs.addForm.resetFields();
        }
        this.$emit('on-modal-close', params)
      }
    }
  }
}
</script>
