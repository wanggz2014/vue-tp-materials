<template>
  <AdminLayout>
    <template #default>
      <AdminTable 
        :searchUrl="searchUrl"
        :editUrl="editUrl"
        :addUrl="addUrl"
        :deleteUrl="deleteUrl"
        :metaUrl="metaUrl"
        :local="local">
      </AdminTable>  
    </template>
  </AdminLayout>

  <!-- 重要！！！ temp_placehold请不要移除-->
  <!-- temp_placehold -->
</template>

<script>
//重要！！！ import_placehold\comp_placehold 请不要移除
//import_placehold
import AdminTable from './components/AdminTable';
import AdminLayout from './components/AdminLayout';
import config from '@/config'

const baseUrl=config.baseUrl();
export default {
  name: 'about',
  components: {
    AdminTable,
    AdminLayout,
  },
  data: function() {
    return {
      searchUrl:baseUrl+"tableSearch",
      editUrl:baseUrl+"tableEdit", 
      addUrl:baseUrl+"tableAdd", 
      deleteUrl:baseUrl+"tableDelete",
      metaUrl:baseUrl+"tableMeta",
      page:false,
      local:false
    };
  },
};
</script>
