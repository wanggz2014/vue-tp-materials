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
import { addTableData } from './libs/data'
export default {
  name: 'TablesAdd',
  props:{
    formAdd:Boolean,
    addUrl:String,
    baseUrl:String
  },
  data:function(){
    return {
      loading:true,
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
      form.validate((valid) => {
          if (valid) {
            this.loading=true;
            //提交数据
            addTableData({
              requestParams:this.addForm,
              requestUrl:this.addUrl,
              baseUrl:this.baseUrl
            }).then(res => {
              this.loading=false;
              console.log(res);
              if(res.data.success){
                this.handleChange(false);
                this.$emit('on-modal-success');
              }else{
                this.$Message.error('新增存储异常,请核对');
              }
            }).catch(err=>{
              this.$Message.error('新增存储异常,请核对');
              this.loading=false;
            })
            return;
          } 
          this.$Message.error('输入参数异常，请核对');
          this.loading=false;
      })
    },
    handleChange(params){
      if(!params){
        this.$emit('on-modal-close', params)
      }
    }
  }
}
</script>
