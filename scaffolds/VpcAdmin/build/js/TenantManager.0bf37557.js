/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"TenantManager": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([1,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "0119":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"122bcb28-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/TenantManager/TenantManager.vue?vue&type=template&id=d035d8e2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('AdminLayout',{scopedSlots:_vm._u([{key:"default",fn:function(){return [_c('AdminTable',{attrs:{"searchUrl":_vm.searchUrl,"editUrl":_vm.editUrl,"addUrl":_vm.addUrl,"deleteUrl":_vm.deleteUrl,"metaUrl":_vm.metaUrl,"local":_vm.local}})]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/TenantManager/TenantManager.vue?vue&type=template&id=d035d8e2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"122bcb28-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/TenantManager/components/AdminTable/view.vue?vue&type=template&id=583b2f1a&
var viewvue_type_template_id_583b2f1a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.display)?_c('div',[(_vm.addable)?_c('AddForm',{attrs:{"formAdd":_vm.formAdd,"addUrl":_vm.addUrl},on:{"on-modal-close":function($event){_vm.formAdd=false},"on-modal-success":_vm.handleSearch}}):_vm._e(),_c('Card',[_c('tables',{ref:"tables",attrs:{"editable":"","searchable":"","addable":_vm.addable,"search-place":"top","columns":_vm.columns},on:{"on-search":_vm.handleSearch,"on-save-edit":_vm.handleEdit,"on-delete":_vm.handleDelete,"on-add-form":function($event){_vm.formAdd=true}},model:{value:(_vm.tableData),callback:function ($$v) {_vm.tableData=$$v},expression:"tableData"}}),(_vm.page)?_c('Page',{staticClass:"tp-table-page",attrs:{"total":100,"show-sizer":""}}):_vm._e()],1)],1):_vm._e()}
var viewvue_type_template_id_583b2f1a_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/TenantManager/components/AdminTable/view.vue?vue&type=template&id=583b2f1a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"122bcb28-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/TenantManager/components/AdminTable/tables.vue?vue&type=template&id=34316312&
var tablesvue_type_template_id_34316312_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.searchable && _vm.searchPlace === 'top')?_c('div',{staticClass:"search-con search-con-top"},[_c('Select',{staticClass:"search-col",model:{value:(_vm.searchKey),callback:function ($$v) {_vm.searchKey=$$v},expression:"searchKey"}},_vm._l((_vm.columns),function(item){return (item.key !== 'handle')?_c('Option',{key:("search-col-" + (item.key)),attrs:{"value":item.key}},[_vm._v(_vm._s(item.title))]):_vm._e()}),1),_c('Input',{staticClass:"search-input",attrs:{"clearable":"","placeholder":"输入关键字搜索"},on:{"on-change":_vm.handleClear},model:{value:(_vm.searchValue),callback:function ($$v) {_vm.searchValue=$$v},expression:"searchValue"}}),_c('Button',{staticClass:"search-btn",attrs:{"type":"primary"},on:{"click":_vm.handleSearch}},[_c('Icon',{attrs:{"type":"search"}}),_vm._v("  搜索")],1),(_vm.addable)?_c('Button',{staticClass:"add-btn",attrs:{"type":"primary"},on:{"click":_vm.handleAdd}},[_c('Icon',{attrs:{"type":"add"}}),_vm._v("  添加")],1):_vm._e()],1):_vm._e(),_c('Table',{ref:"tablesMain",attrs:{"data":_vm.insideTableData,"columns":_vm.insideColumns,"stripe":_vm.stripe,"border":_vm.border,"show-header":_vm.showHeader,"width":_vm.width,"height":_vm.height,"loading":_vm.loading,"disabled-hover":_vm.disabledHover,"highlight-row":_vm.highlightRow,"row-class-name":_vm.rowClassName,"size":_vm.size,"no-data-text":_vm.noDataText,"no-filtered-data-text":_vm.noFilteredDataText},on:{"on-current-change":_vm.onCurrentChange,"on-select":_vm.onSelect,"on-select-cancel":_vm.onSelectCancel,"on-select-all":_vm.onSelectAll,"on-selection-change":_vm.onSelectionChange,"on-sort-change":_vm.onSortChange,"on-filter-change":_vm.onFilterChange,"on-row-click":_vm.onRowClick,"on-row-dblclick":_vm.onRowDblclick,"on-expand":_vm.onExpand}},[_vm._t("header",null,{"slot":"header"}),_vm._t("footer",null,{"slot":"footer"}),_vm._t("loading",null,{"slot":"loading"})],2),(_vm.searchable && _vm.searchPlace === 'bottom')?_c('div',{staticClass:"search-con search-con-top"},[_c('Select',{staticClass:"search-col",model:{value:(_vm.searchKey),callback:function ($$v) {_vm.searchKey=$$v},expression:"searchKey"}},_vm._l((_vm.columns),function(item){return (item.key !== 'handle')?_c('Option',{key:("search-col-" + (item.key)),attrs:{"value":item.key}},[_vm._v(_vm._s(item.title))]):_vm._e()}),1),_c('Input',{staticClass:"search-input",attrs:{"placeholder":"输入关键字搜索"},model:{value:(_vm.searchValue),callback:function ($$v) {_vm.searchValue=$$v},expression:"searchValue"}}),_c('Button',{staticClass:"search-btn",attrs:{"type":"primary"}},[_c('Icon',{attrs:{"type":"search"}}),_vm._v("  搜索")],1)],1):_vm._e(),_c('a',{staticStyle:{"display":"none","width":"0px","height":"0px"},attrs:{"id":"hrefToExportTable"}})],1)}
var tablesvue_type_template_id_34316312_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/TenantManager/components/AdminTable/tables.vue?vue&type=template&id=34316312&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"122bcb28-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/TenantManager/components/AdminTable/edit.vue?vue&type=template&id=c13b9376&
var editvue_type_template_id_c13b9376_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tables-edit-outer"},[(!_vm.isEditting)?_c('div',{staticClass:"tables-edit-con"},[_c('span',{staticClass:"value-con"},[_vm._v(_vm._s(_vm.value))]),(_vm.editable)?_c('Button',{staticClass:"tables-edit-btn",staticStyle:{"padding":"2px 4px"},attrs:{"type":"text"},on:{"click":_vm.startEdit}},[_c('Icon',{attrs:{"type":"md-create"}})],1):_vm._e()],1):_c('div',{staticClass:"tables-editting-con"},[_c('Input',{staticClass:"tables-edit-input",attrs:{"value":_vm.value},on:{"input":_vm.handleInput}}),_c('Button',{staticStyle:{"padding":"6px 4px"},attrs:{"type":"text"},on:{"click":_vm.saveEdit}},[_c('Icon',{attrs:{"type":"md-checkmark"}})],1),_c('Button',{staticStyle:{"padding":"6px 4px"},attrs:{"type":"text"},on:{"click":_vm.canceltEdit}},[_c('Icon',{attrs:{"type":"md-close"}})],1)],1)])}
var editvue_type_template_id_c13b9376_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/TenantManager/components/AdminTable/edit.vue?vue&type=template&id=c13b9376&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/TenantManager/components/AdminTable/edit.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var editvue_type_script_lang_js_ = ({
  name: 'TablesEdit',
  props: {
    value: [String, Number],
    edittingCellId: String,
    params: Object,
    editable: Boolean
  },
  computed: {
    isEditting: function isEditting() {
      return this.edittingCellId === "editting-".concat(this.params.index, "-").concat(this.params.column.key);
    }
  },
  methods: {
    handleInput: function handleInput(val) {
      this.$emit('input', val);
    },
    startEdit: function startEdit() {
      this.$emit('on-start-edit', this.params);
    },
    saveEdit: function saveEdit() {
      this.$emit('on-save-edit', this.params);
    },
    canceltEdit: function canceltEdit() {
      this.$emit('on-cancel-edit', this.params);
    }
  }
});
// CONCATENATED MODULE: ./src/pages/TenantManager/components/AdminTable/edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var AdminTable_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/TenantManager/components/AdminTable/edit.vue?vue&type=style&index=0&lang=less&
var editvue_type_style_index_0_lang_less_ = __webpack_require__("279a");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/pages/TenantManager/components/AdminTable/edit.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AdminTable_editvue_type_script_lang_js_,
  editvue_type_template_id_c13b9376_render,
  editvue_type_template_id_c13b9376_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var edit = (component.exports);
// CONCATENATED MODULE: ./src/pages/TenantManager/components/AdminTable/handle-btns.js
var handle_btns_btns = {
  delete: function _delete(h, params, vm) {
    return h('Poptip', {
      props: {
        confirm: true,
        title: '你确定要删除吗?'
      },
      on: {
        'on-ok': function onOk() {
          vm.$emit('on-delete', params);
          vm.$emit('input', params.tableData.filter(function (item, index) {
            return index !== params.row.initRowIndex;
          }));
        }
      }
    }, [h('Button', {
      props: {
        type: 'text',
        ghost: true
      }
    }, [h('Icon', {
      props: {
        type: 'md-trash',
        size: 18,
        color: '#000000'
      }
    })])]);
  }
};
/* harmony default export */ var handle_btns = (handle_btns_btns);
// EXTERNAL MODULE: ./src/pages/TenantManager/components/AdminTable/index.less
var AdminTable = __webpack_require__("e364");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/TenantManager/components/AdminTable/tables.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var tablesvue_type_script_lang_js_ = ({
  name: 'Tables',
  props: {
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    size: String,
    width: {
      type: [Number, String]
    },
    height: {
      type: [Number, String]
    },
    stripe: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    highlightRow: {
      type: Boolean,
      default: false
    },
    rowClassName: {
      type: Function,
      default: function _default() {
        return '';
      }
    },
    context: {
      type: Object
    },
    noDataText: {
      type: String
    },
    noFilteredDataText: {
      type: String
    },
    disabledHover: {
      type: Boolean
    },
    loading: {
      type: Boolean,
      default: false
    },

    /**
     * @description 全局设置是否可编辑
     */
    editable: {
      type: Boolean,
      default: false
    },
    addable: {
      type: Boolean,
      default: false
    },

    /**
     * @description 是否可搜索
     */
    searchable: {
      type: Boolean,
      default: false
    },

    /**
     * @description 搜索控件所在位置，'top' / 'bottom'
     */
    searchPlace: {
      type: String,
      default: 'top'
    }
  },

  /**
   * Events
   * @on-start-edit 返回值 {Object} ：同iview中render函数中的params对象 { row, index, column }
   * @on-cancel-edit 返回值 {Object} 同上
   * @on-save-edit 返回值 {Object} ：除上面三个参数外，还有一个value: 修改后的数据
   */
  data: function data() {
    return {
      insideColumns: [],
      insideTableData: [],
      edittingCellId: '',
      edittingText: '',
      searchValue: '',
      searchKey: ''
    };
  },
  methods: {
    suportEdit: function suportEdit(item, index) {
      var _this = this;

      item.render = function (h, params) {
        return h(edit, {
          props: {
            params: params,
            value: _this.insideTableData[params.index][params.column.key],
            edittingCellId: _this.edittingCellId,
            editable: _this.editable
          },
          on: {
            'input': function input(val) {
              _this.edittingText = val;
            },
            'on-start-edit': function onStartEdit(params) {
              _this.edittingCellId = "editting-".concat(params.index, "-").concat(params.column.key);

              _this.$emit('on-start-edit', params);
            },
            'on-cancel-edit': function onCancelEdit(params) {
              _this.edittingCellId = '';

              _this.$emit('on-cancel-edit', params);
            },
            'on-save-edit': function onSaveEdit(params) {
              _this.value[params.row.initRowIndex][params.column.key] = _this.edittingText;

              _this.$emit('input', _this.value);

              _this.$emit('on-save-edit', Object.assign(params, {
                value: _this.edittingText
              }));

              _this.edittingCellId = '';
            }
          }
        });
      };

      return item;
    },
    surportHandle: function surportHandle(item) {
      var _this2 = this;

      var options = item.options || [];
      var insideBtns = [];
      options.forEach(function (item) {
        if (handle_btns[item]) insideBtns.push(handle_btns[item]);
      });
      var btns = item.button ? [].concat(insideBtns, item.button) : insideBtns;

      item.render = function (h, params) {
        params.tableData = _this2.value;
        return h('div', btns.map(function (item) {
          return item(h, params, _this2);
        }));
      };

      return item;
    },
    handleColumns: function handleColumns(columns) {
      var _this3 = this;

      this.insideColumns = columns.map(function (item, index) {
        var res = item;
        if (res.editable) res = _this3.suportEdit(res, index);
        if (res.key === 'handle') res = _this3.surportHandle(res);
        return res;
      });
    },
    setDefaultSearchKey: function setDefaultSearchKey() {
      if (this.columns.length == 0) {
        return;
      }

      this.searchKey = this.columns[0].key !== 'handle' ? this.columns[0].key : this.columns.length > 1 ? this.columns[1].key : '';
    },
    handleClear: function handleClear(e) {
      if (e.target.value === '') this.insideTableData = this.value;
    },
    handleSearch: function handleSearch() {
      //this.insideTableData = this.value.filter(item => item[this.searchKey].indexOf(this.searchValue) > -1)
      this.$emit('on-search', {
        key: this.searchKey,
        value: this.searchValue
      });
    },
    handleAdd: function handleAdd() {
      //this.insideTableData = this.value.filter(item => item[this.searchKey].indexOf(this.searchValue) > -1)
      this.$emit('on-add-form');
    },
    handleTableData: function handleTableData() {
      this.insideTableData = this.value.map(function (item, index) {
        var res = item;
        res.initRowIndex = index;
        return res;
      });
    },
    exportCsv: function exportCsv(params) {
      this.$refs.tablesMain.exportCsv(params);
    },
    clearCurrentRow: function clearCurrentRow() {
      this.$refs.talbesMain.clearCurrentRow();
    },
    onCurrentChange: function onCurrentChange(currentRow, oldCurrentRow) {
      this.$emit('on-current-change', currentRow, oldCurrentRow);
    },
    onSelect: function onSelect(selection, row) {
      this.$emit('on-select', selection, row);
    },
    onSelectCancel: function onSelectCancel(selection, row) {
      this.$emit('on-select-cancel', selection, row);
    },
    onSelectAll: function onSelectAll(selection) {
      this.$emit('on-select-all', selection);
    },
    onSelectionChange: function onSelectionChange(selection) {
      this.$emit('on-selection-change', selection);
    },
    onSortChange: function onSortChange(column, key, order) {
      this.$emit('on-sort-change', column, key, order);
    },
    onFilterChange: function onFilterChange(row) {
      this.$emit('on-filter-change', row);
    },
    onRowClick: function onRowClick(row, index) {
      this.$emit('on-row-click', row, index);
    },
    onRowDblclick: function onRowDblclick(row, index) {
      this.$emit('on-row-dblclick', row, index);
    },
    onExpand: function onExpand(row, status) {
      this.$emit('on-expand', row, status);
    },
    onSearch: function onSearch() {}
  },
  watch: {
    columns: function columns(_columns) {
      this.handleColumns(_columns);
      this.setDefaultSearchKey();
    },
    value: function value(val) {
      this.handleTableData(); //if (this.searchable) this.handleSearch()
    }
  },
  mounted: function mounted() {
    this.handleColumns(this.columns);
    this.setDefaultSearchKey();
    this.handleTableData();
  }
});
// CONCATENATED MODULE: ./src/pages/TenantManager/components/AdminTable/tables.vue?vue&type=script&lang=js&
 /* harmony default export */ var AdminTable_tablesvue_type_script_lang_js_ = (tablesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/TenantManager/components/AdminTable/tables.vue





/* normalize component */

var tables_component = Object(componentNormalizer["a" /* default */])(
  AdminTable_tablesvue_type_script_lang_js_,
  tablesvue_type_template_id_34316312_render,
  tablesvue_type_template_id_34316312_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tables = (tables_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"122bcb28-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/TenantManager/components/AdminTable/add.vue?vue&type=template&id=3303827b&
var addvue_type_template_id_3303827b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{attrs:{"title":"新增","value":_vm.formAdd,"loading":_vm.loading},on:{"on-ok":_vm.handleAdd,"on-visible-change":_vm.handleChange}},[_c('Form',{ref:"addForm",attrs:{"model":_vm.addForm,"rules":_vm.ruleValidate,"label-width":120}},[_c('FormItem',{attrs:{"label":"Name","prop":"name"}},[_c('Input',{attrs:{"placeholder":"Enter your name"},model:{value:(_vm.addForm.name),callback:function ($$v) {_vm.$set(_vm.addForm, "name", $$v)},expression:"addForm.name"}})],1),_c('FormItem',{attrs:{"label":"E-mail","prop":"email"}},[_c('Input',{attrs:{"placeholder":"Enter your e-mail"},model:{value:(_vm.addForm.email),callback:function ($$v) {_vm.$set(_vm.addForm, "email", $$v)},expression:"addForm.email"}})],1),_c('FormItem',{attrs:{"label":"Create-Time","prop":"createTime"}},[_c('DatePicker',{attrs:{"type":"date","placeholder":"Select date"},model:{value:(_vm.addForm.createTime),callback:function ($$v) {_vm.$set(_vm.addForm, "createTime", $$v)},expression:"addForm.createTime"}})],1)],1)],1)}
var addvue_type_template_id_3303827b_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/TenantManager/components/AdminTable/add.vue?vue&type=template&id=3303827b&

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/pages/TenantManager/components/AdminTable/libs/axios.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var axios_HttpRequest =
/*#__PURE__*/
function () {
  function HttpRequest() {
    _classCallCheck(this, HttpRequest);

    this.queue = {};
  }

  _createClass(HttpRequest, [{
    key: "getInsideConfig",
    value: function getInsideConfig() {
      var config = {
        headers: {
          //
          "Content-Type": "application/x-www-form-urlencoded"
        }
      };
      return config;
    }
  }, {
    key: "destroy",
    value: function destroy(url) {
      delete this.queue[url];

      if (!Object.keys(this.queue).length) {// Spin.hide()
      }
    }
  }, {
    key: "interceptors",
    value: function interceptors(instance, url) {
      var _this = this;

      // 请求拦截
      instance.interceptors.request.use(function (config) {
        // 添加全局的loading...
        if (!Object.keys(_this.queue).length) {// Spin.show() // 不建议开启，因为界面不友好
        }

        _this.queue[url] = true;
        return config;
      }, function (error) {
        return Promise.reject(error);
      }); // 响应拦截

      instance.interceptors.response.use(function (res) {
        _this.destroy(url);

        var data = res.data,
            status = res.status;
        return {
          data: data,
          status: status
        };
      }, function (error) {
        _this.destroy(url);

        var errorInfo = error.response;

        if (!errorInfo) {
          var _JSON$parse = JSON.parse(JSON.stringify(error)),
              _JSON$parse$request = _JSON$parse.request,
              statusText = _JSON$parse$request.statusText,
              status = _JSON$parse$request.status,
              config = _JSON$parse.config;

          errorInfo = {
            statusText: statusText,
            status: status,
            request: {
              responseURL: config.url
            }
          };
        }

        return Promise.reject(error);
      });
    }
  }, {
    key: "request",
    value: function request(options) {
      var instance = axios_default.a.create();
      options = Object.assign(this.getInsideConfig(), options);
      this.interceptors(instance, options.url);
      return instance(options);
    }
  }]);

  return HttpRequest;
}();

/* harmony default export */ var libs_axios = (axios_HttpRequest);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__("4328");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./src/pages/TenantManager/components/AdminTable/libs/data.js


var data_axios = new libs_axios(); //如果想本地调试，将local设置为true

var data_getTableData = function getTableData(_ref) {
  var requestParams = _ref.requestParams,
      requestUrl = _ref.requestUrl,
      local = _ref.local;
  console.log(requestUrl);
  console.log(requestParams);
  console.log(local);

  if (local) {
    return new Promise(function (resolve) {
      var result = {
        status: 200,
        data: {
          success: true,
          message: '',
          details: [{
            name: 'test',
            email: 'wgz@163.com',
            createTime: '2019-12-01'
          }]
        }
      };
      resolve(result);
    });
  }

  return data_axios.request({
    url: requestUrl,
    method: 'post',
    data: lib_default.a.stringify(requestParams)
  });
};
var data_addTableData = function addTableData(_ref2) {
  var requestParams = _ref2.requestParams,
      requestUrl = _ref2.requestUrl;
  console.log(requestParams);
  console.log(requestUrl);
  return data_axios.request({
    url: requestUrl,
    method: 'post',
    data: lib_default.a.stringify(requestParams)
  });
};
var data_delTableData = function delTableData(_ref3) {
  var requestParams = _ref3.requestParams,
      requestUrl = _ref3.requestUrl,
      local = _ref3.local;
  console.log(requestUrl);
  console.log(requestParams);

  if (local) {
    return new Promise(function (resolve) {
      var result = {
        success: true
      };
      resolve(result);
    });
  }

  return data_axios.request({
    url: requestUrl,
    method: 'post',
    data: lib_default.a.stringify(requestParams)
  });
};
var data_editTableData = function editTableData(_ref4) {
  var requestParams = _ref4.requestParams,
      requestUrl = _ref4.requestUrl,
      local = _ref4.local;
  console.log(requestUrl);
  console.log(requestParams);

  if (local) {
    return new Promise(function (resolve) {
      var result = {
        success: true
      };
      resolve(result);
    });
  }

  return data_axios.request({
    url: requestUrl,
    method: 'post',
    data: lib_default.a.stringify(requestParams)
  });
};
var data_getTableMeta = function getTableMeta(_ref5) {
  var requestParams = _ref5.requestParams,
      requestUrl = _ref5.requestUrl,
      local = _ref5.local;
  console.log(requestUrl);
  console.log(requestParams);

  if (local) {
    return new Promise(function (resolve, reject) {
      var result = {
        status: 200,
        data: {
          success: true,
          message: '',
          details: [{
            title: 'Email',
            key: 'email',
            editable: true
          }, {
            title: 'Name',
            key: 'name',
            editable: true
          }, {
            title: 'Create-Time',
            key: 'createTime'
          }]
        }
      };
      resolve(result);
    });
  }

  return data_axios.request({
    url: requestUrl,
    method: 'post',
    data: lib_default.a.stringify(requestParams)
  });
};
var responseHandle = function responseHandle(res, message, handle) {
  if (res.status != 200) {
    console.log(res);
    message.error("数据请求出错，请核对");
    return false;
  }

  var data = res.data;

  if (!data.success) {
    message.error(data.message);
    return false;
  }

  if (handle != undefined) {
    return handle(data.details);
  }

  return true;
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/TenantManager/components/AdminTable/add.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


function errorMessage(entry, message) {
  entry.loading = false;
  entry.error = true;
  entry.$Message.error(message);
}

/* harmony default export */ var addvue_type_script_lang_js_ = ({
  name: 'TablesAdd',
  props: {
    formAdd: {
      type: Boolean,
      default: false
    },
    addUrl: String
  },
  data: function data() {
    return {
      loading: true,
      error: false,
      addForm: {
        name: '',
        email: '',
        createTime: ''
      },
      ruleValidate: {
        name: [{
          required: true,
          message: 'The name cannot be empty',
          trigger: 'blur'
        }],
        email: [{
          required: true,
          message: 'Mailbox cannot be empty',
          trigger: 'blur'
        }, {
          type: 'email',
          message: 'Incorrect email format',
          trigger: 'blur'
        }],
        createTime: [{
          required: true,
          type: 'date',
          message: 'Please select the date',
          trigger: 'change'
        }]
      }
    };
  },
  methods: {
    handleAdd: function handleAdd() {
      var _this = this;

      var form = this.$refs.addForm;
      var entry = this; //console.log(this.loading);

      form.validate(function (valid) {
        if (!valid) {
          errorMessage(entry, '新增参数异常,请核对');
          return;
        } //提交数据


        data_addTableData({
          requestParams: _this.addForm,
          requestUrl: _this.addUrl
        }).then(function (res) {
          responseHandle(res, entry.$Message, function () {
            entry.handleChange(false);
            entry.$emit('on-modal-success');
          });
        }).catch(function (err) {
          errorMessage(entry, '新增存储异常,请核对');
        });
      });
    },
    handleChange: function handleChange(params) {
      this.loading = true;

      if (!params) {
        if (!this.error) {
          this.$refs.addForm.resetFields();
        }

        this.$emit('on-modal-close', params);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/pages/TenantManager/components/AdminTable/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var AdminTable_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/TenantManager/components/AdminTable/add.vue





/* normalize component */

var add_component = Object(componentNormalizer["a" /* default */])(
  AdminTable_addvue_type_script_lang_js_,
  addvue_type_template_id_3303827b_render,
  addvue_type_template_id_3303827b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var add = (add_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/TenantManager/components/AdminTable/view.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var viewvue_type_script_lang_js_ = ({
  name: 'tables_page',
  props: {
    searchUrl: String,
    editUrl: String,
    deleteUrl: String,
    addUrl: String,
    metaUrl: String,
    local: {
      type: Boolean,
      default: false
    },
    page: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Tables: tables,
    AddForm: add
  },
  data: function data() {
    return {
      columns: [],
      tableData: [],
      formAdd: false,
      addable: this.addUrl == undefined ? false : true,
      display: false
    };
  },
  methods: {
    handleDelete: function handleDelete(params) {
      var _this = this;

      data_delTableData({
        requestParams: params.row,
        requestUrl: this.deleteUrl,
        local: this.local
      }).then(function (res) {
        responseHandle(res, _this.$Message);
      }).catch(function (err) {
        console.log(err);

        _this.$Message.error('删除记录异常,请核对');
      });
    },
    handleEdit: function handleEdit(params) {
      var _this2 = this;

      console.log(params);
      params.row[params.column.key] = params.value;
      data_editTableData({
        requestParams: params.row,
        requestUrl: this.editUrl,
        local: this.local
      }).then(function (res) {
        responseHandle(res, _this2.$Message);
      }).catch(function (err) {
        console.log(err);

        _this2.$Message.error('修改记录异常,请核对');
      });
    },
    handleSearch: function handleSearch(params) {
      var _this3 = this;

      if (params == undefined) {
        params = {
          key: '',
          value: ''
        };
      }

      data_getTableData({
        requestParams: params,
        requestUrl: this.searchUrl,
        local: this.local
      }).then(function (res) {
        var obj = _this3;
        responseHandle(res, _this3.$Message, function (tableData) {
          obj.tableData = tableData;
        });
      }).catch(function (err) {
        console.log(err);

        _this3.$Message.error('获取记录异常,请核对');
      });
    },
    searchMeta: function searchMeta(params) {
      var _this4 = this;

      data_getTableMeta({
        requestParams: params,
        requestUrl: this.metaUrl,
        local: this.local
      }).then(function (res) {
        var obj = _this4;
        responseHandle(res, _this4.$Message, function (currentColumns) {
          if (obj.deleteUrl != undefined) {
            currentColumns.push({
              title: '操作',
              key: 'handle',
              button: [handle_btns.delete]
            });
          }

          obj.columns = currentColumns;
        });
      }).catch(function (err) {
        console.log(err);

        _this4.$Message.error('获取列表信息失败,请核对');
      });
    }
  },
  created: function created() {
    //获取元信息
    this.searchMeta();
    this.handleSearch();
    this.display = true;
  }
});
// CONCATENATED MODULE: ./src/pages/TenantManager/components/AdminTable/view.vue?vue&type=script&lang=js&
 /* harmony default export */ var AdminTable_viewvue_type_script_lang_js_ = (viewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/TenantManager/components/AdminTable/view.vue?vue&type=style&index=0&lang=css&
var viewvue_type_style_index_0_lang_css_ = __webpack_require__("33f8");

// CONCATENATED MODULE: ./src/pages/TenantManager/components/AdminTable/view.vue






/* normalize component */

var view_component = Object(componentNormalizer["a" /* default */])(
  AdminTable_viewvue_type_script_lang_js_,
  viewvue_type_template_id_583b2f1a_render,
  viewvue_type_template_id_583b2f1a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var view = (view_component.exports);
// CONCATENATED MODULE: ./src/pages/TenantManager/components/AdminTable/index.js

/* harmony default export */ var components_AdminTable = (view);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"122bcb28-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/TenantManager/components/AdminLayout/index.vue?vue&type=template&id=cd9d6c3e&scoped=true&
var AdminLayoutvue_type_template_id_cd9d6c3e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.display)?_c('div',{staticClass:"layout"},[_c('Layout',[_c('Header',[_c('Menu',{attrs:{"mode":"horizontal","theme":"dark","active-name":"login"},on:{"on-select":_vm.turnToLogout}},[_c('div',{staticClass:"layout-logo"}),_c('div',{staticClass:"layout-nav"},[_c('MenuItem',{attrs:{"name":"login"}},[_c('Icon',{attrs:{"type":"ios-analytics"}}),_vm._v("\n            退出\n          ")],1)],1)])],1),_c('Layout',{style:({ padding: '0 50px' })},[_c('Breadcrumb',{style:({ margin: '16px 0' })},_vm._l((_vm.breadcrumb),function(crumb){return _c('BreadcrumbItem',{key:crumb},[_vm._v("\n          "+_vm._s(crumb)+"\n        ")])}),1),_c('Content',{style:({ padding: '24px 0', minHeight: '280px', background: '#fff' })},[_c('Layout',[_c('Sider',{style:({ background: '#fff' }),attrs:{"hide-trigger":""}},_vm._l((_vm.menuData),function(sub){return (sub.show)?_c('Menu',{key:sub.subMenu,attrs:{"active-name":_vm.active,"theme":"light","width":"auto","open-names":_vm.open},on:{"on-select":_vm.turnToPage}},[_c('Submenu',{attrs:{"name":sub.subMenu}},[_c('template',{slot:"title"},[_c('Icon',{attrs:{"type":"ios-navigate"}}),_vm._v("\n                  "+_vm._s(sub.subTitle)+"\n                ")],1),_vm._l((sub.items),function(menu){return _c('MenuItem',{key:menu.name,attrs:{"name":menu.name}},[_vm._v(_vm._s(menu.title))])})],2)],1):_vm._e()}),1),_c('Content',{style:({
              padding: '24px',
              minHeight: '530px',
              background: '#fff',
            })},[_vm._t("default")],2)],1)],1)],1),_c('Footer',{staticClass:"layout-footer-center"},[_vm._v("\n      2011-2016 © TalkingData\n    ")])],1)],1):_vm._e()}
var AdminLayoutvue_type_template_id_cd9d6c3e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/TenantManager/components/AdminLayout/index.vue?vue&type=template&id=cd9d6c3e&scoped=true&

// CONCATENATED MODULE: ./src/pages/TenantManager/components/AdminLayout/libs/axios.js
function axios_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function axios_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function axios_createClass(Constructor, protoProps, staticProps) { if (protoProps) axios_defineProperties(Constructor.prototype, protoProps); if (staticProps) axios_defineProperties(Constructor, staticProps); return Constructor; }



var libs_axios_HttpRequest =
/*#__PURE__*/
function () {
  function HttpRequest() {
    axios_classCallCheck(this, HttpRequest);

    this.queue = {};
  }

  axios_createClass(HttpRequest, [{
    key: "getInsideConfig",
    value: function getInsideConfig() {
      var config = {
        headers: {
          //
          "Content-Type": "application/x-www-form-urlencoded"
        }
      };
      return config;
    }
  }, {
    key: "destroy",
    value: function destroy(url) {
      delete this.queue[url];

      if (!Object.keys(this.queue).length) {// Spin.hide()
      }
    }
  }, {
    key: "interceptors",
    value: function interceptors(instance, url) {
      var _this = this;

      // 请求拦截
      instance.interceptors.request.use(function (config) {
        // 添加全局的loading...
        if (!Object.keys(_this.queue).length) {// Spin.show() // 不建议开启，因为界面不友好
        }

        _this.queue[url] = true;
        return config;
      }, function (error) {
        return Promise.reject(error);
      }); // 响应拦截

      instance.interceptors.response.use(function (res) {
        _this.destroy(url);

        var data = res.data,
            status = res.status;
        return {
          data: data,
          status: status
        };
      }, function (error) {
        _this.destroy(url);

        var errorInfo = error.response;

        if (!errorInfo) {
          var _JSON$parse = JSON.parse(JSON.stringify(error)),
              _JSON$parse$request = _JSON$parse.request,
              statusText = _JSON$parse$request.statusText,
              status = _JSON$parse$request.status,
              config = _JSON$parse.config;

          errorInfo = {
            statusText: statusText,
            status: status,
            request: {
              responseURL: config.url
            }
          };
        }

        return Promise.reject(error);
      });
    }
  }, {
    key: "request",
    value: function request(options) {
      var instance = axios_default.a.create();
      options = Object.assign(this.getInsideConfig(), options);
      this.interceptors(instance, options.url);
      return instance(options);
    }
  }]);

  return HttpRequest;
}();

/* harmony default export */ var AdminLayout_libs_axios = (libs_axios_HttpRequest);
// CONCATENATED MODULE: ./src/pages/TenantManager/components/AdminLayout/libs/menu.js

var menu_axios = new AdminLayout_libs_axios();
/**
 * 获取导航的父节点
 * @param {当前导航item} activeMenu 
 */

function getSubName(activeMenu, store) {
  var menuData = store.get('menuData');

  for (var i = 0; i < menuData.length; i++) {
    for (var j = 0; j < menuData[i].items.length; j++) {
      var menu = menuData[i].items[j];

      if (menu.name == activeMenu) {
        return menuData[i].subMenu;
      }
    }
  }

  return null;
}
/**
 * 获取当前导航信息
 * @param {当前导航} activeMenu 
 */


function getMenu(activeMenu, store) {
  var menuData = store.get('menuData');

  for (var i = 0; i < menuData.length; i++) {
    for (var j = 0; j < menuData[i].items.length; j++) {
      var menu = menuData[i].items[j];

      if (menu.name == activeMenu) {
        return menu;
      }
    }
  }
}
/**
 * 获取菜单信息
 */


var getMenuData = function getMenuData(_ref) {
  var menuData = _ref.menuData,
      menuUrl = _ref.menuUrl;

  if (menuUrl != undefined) {
    //url请求获取信息
    return menu_axios.request({
      url: menuUrl,
      method: 'post'
    });
  }

  return new Promise(function (resolve) {
    var result = {
      status: 200,
      data: {
        success: true,
        message: '',
        details: menuData
      }
    };
    resolve(result);
  });
};
/**
 * 获取当前打开页菜单信息
 */

var getMenuDetail = function getMenuDetail(store, defaultMenuItem) {
  var active = store.get('currentEnum', defaultMenuItem);
  var subName = getSubName(active, store);
  var result = {
    breadcrumb: [],
    active: active,
    open: [subName]
  };
  var menuData = store.get('menuData');

  for (var i = 0; i < menuData.length; i++) {
    if (menuData[i].subMenu != subName) {
      continue;
    }

    result.breadcrumb.push(menuData[i].subTitle);

    for (var j = 0; j < menuData[i].items.length; j++) {
      var menu = menuData[i].items[j];

      if (menu.name == active) {
        result.breadcrumb.push(menu.title);
        break;
      }
    }

    break;
  }

  return result;
};
var toUrl = function toUrl(activeMenu, defaultMenuItem, store) {
  if (activeMenu == 'login') {
    store.set('currentEnum', defaultMenuItem, {
      ttl: 60 * 1000 * 60
    });
  } else {
    store.set('currentEnum', activeMenu, {
      ttl: 60 * 1000 * 60
    });
  }

  var url = getMenu(activeMenu, store).url;

  if (url.indexOf("http") > -1) {
    window.location.href = url;
    return;
  }

  window.location.href = '/' + url;
};
var menu_responseHandle = function responseHandle(res, message, handle) {
  if (res.status != 200) {
    console.log(res);
    message.error("数据请求出错，请核对");
    return false;
  }

  var data = res.data;

  if (!data.success) {
    message.error(data.message);
    return false;
  }

  if (handle != undefined) {
    return handle(data.details);
  }

  return true;
};
// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("a026");

// EXTERNAL MODULE: ./node_modules/vue2-storage/dist/vue2-storage.common.js
var vue2_storage_common = __webpack_require__("f83f");
var vue2_storage_common_default = /*#__PURE__*/__webpack_require__.n(vue2_storage_common);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/TenantManager/components/AdminLayout/index.vue?vue&type=script&lang=js&
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




vue_esm["default"].use(vue2_storage_common_default.a);
var DEFAULT_MENU_ITEM = "tenant-manager";
var DEFAULT_MENU_DATA = [{
  "subMenu": "tenant",
  "subTitle": "租户管理",
  "show": true,
  "items": [{
    "name": "tenant-manager",
    "title": "信息管理",
    "url": "tenantmanager.html"
  }]
}, {
  "subMenu": "log",
  "subTitle": "日志查看",
  "show": true,
  "items": [{
    "name": "log-auth",
    "title": "授权认证",
    "url": "logauth.html"
  }, {
    "name": "log-status",
    "title": "节点状态",
    "url": "logstatus.html"
  }]
}, {
  "subMenu": "notify",
  "subTitle": "消息中心",
  "show": true,
  "items": [{
    "name": "notify-search",
    "title": "消息查询",
    "url": "notifysearch.html"
  }]
}, {
  "subMenu": "common",
  "subTitle": "管理",
  "show": false,
  "items": [{
    "name": "login",
    "title": "登陆",
    "url": "login.html"
  }]
}];
/* harmony default export */ var AdminLayoutvue_type_script_lang_js_ = ({
  name: 'AdminLayout',
  components: {},
  props: {
    initMenuData: {
      type: Array,
      default: function _default() {
        return DEFAULT_MENU_DATA;
      }
    },
    menuUrl: String,
    defaultMenuItem: {
      type: String,
      default: DEFAULT_MENU_ITEM
    }
  },
  data: function data() {
    return {
      menuData: [],
      active: '',
      open: '',
      breadcrumb: '',
      display: false
    };
  },
  methods: _objectSpread({}, Object(vuex_esm["b" /* mapActions */])(['handleLogOut']), {
    turnToPage: function turnToPage(active) {
      toUrl(active, this.defaultMenuItem, this.$storage);
    },
    turnToLogout: function turnToLogout(active) {
      var _this = this;

      if (this.$store != undefined) {
        this.handleLogOut().then(function (res) {
          _this.turnToPage(active);
        }).catch(function (res) {
          console.log(res);

          _this.$Message.error('用户退出异常!!!');
        });
        return;
      }

      this.turnToPage(active);
    }
  }),
  created: function created() {
    var _this2 = this;

    getMenuData({
      menuData: this.initMenuData,
      menuUrl: this.menuUrl
    }).then(function (res) {
      var obj = _this2;
      menu_responseHandle(res, _this2.$Message, function (menuData) {
        //列表信息
        obj.$storage.set('menuData', menuData, {
          ttl: 60 * 1000 * 60
        });
        obj.menuData = menuData; //导航详情
        //console.log(obj.defaultMenuItem)

        var menuDetail = getMenuDetail(obj.$storage, obj.defaultMenuItem);
        obj.active = menuDetail.active;
        obj.open = menuDetail.open;
        obj.breadcrumb = menuDetail.breadcrumb;
        obj.display = true;
      });
    });
  }
});
// CONCATENATED MODULE: ./src/pages/TenantManager/components/AdminLayout/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AdminLayoutvue_type_script_lang_js_ = (AdminLayoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/TenantManager/components/AdminLayout/index.vue?vue&type=style&index=0&id=cd9d6c3e&scoped=true&lang=css&
var AdminLayoutvue_type_style_index_0_id_cd9d6c3e_scoped_true_lang_css_ = __webpack_require__("40ca");

// CONCATENATED MODULE: ./src/pages/TenantManager/components/AdminLayout/index.vue






/* normalize component */

var AdminLayout_component = Object(componentNormalizer["a" /* default */])(
  components_AdminLayoutvue_type_script_lang_js_,
  AdminLayoutvue_type_template_id_cd9d6c3e_scoped_true_render,
  AdminLayoutvue_type_template_id_cd9d6c3e_scoped_true_staticRenderFns,
  false,
  null,
  "cd9d6c3e",
  null
  
)

/* harmony default export */ var AdminLayout = (AdminLayout_component.exports);
// EXTERNAL MODULE: ./src/config/index.js
var config = __webpack_require__("f121");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/TenantManager/TenantManager.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//重要！！！ import_placehold\comp_placehold 请不要移除
//import_placehold



var baseUrl = config["a" /* default */].baseUrl();
/* harmony default export */ var TenantManagervue_type_script_lang_js_ = ({
  name: 'about',
  components: {
    AdminTable: components_AdminTable,
    AdminLayout: AdminLayout
  },
  data: function data() {
    return {
      searchUrl: baseUrl + "tableSearch",
      editUrl: baseUrl + "tableEdit",
      addUrl: baseUrl + "tableAdd",
      deleteUrl: baseUrl + "tableDelete",
      metaUrl: baseUrl + "tableMeta",
      page: false,
      local: false
    };
  }
});
// CONCATENATED MODULE: ./src/pages/TenantManager/TenantManager.vue?vue&type=script&lang=js&
 /* harmony default export */ var TenantManager_TenantManagervue_type_script_lang_js_ = (TenantManagervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/TenantManager/TenantManager.vue





/* normalize component */

var TenantManager_component = Object(componentNormalizer["a" /* default */])(
  TenantManager_TenantManagervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TenantManager = (TenantManager_component.exports);
// EXTERNAL MODULE: ./node_modules/iview/dist/iview.js
var iview = __webpack_require__("e069");
var iview_default = /*#__PURE__*/__webpack_require__.n(iview);

// EXTERNAL MODULE: ./src/router/index.js
var router = __webpack_require__("a18c");

// EXTERNAL MODULE: ./src/store/index.js + 4 modules
var store = __webpack_require__("4360");

// EXTERNAL MODULE: ./node_modules/iview/dist/styles/iview.css
var styles_iview = __webpack_require__("dcad");

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("8c4f");

// CONCATENATED MODULE: ./src/pages/TenantManager/index.js








var TenantManager_router = new vue_router_esm["a" /* default */]({
  routes: [// 动态路径参数 以冒号开头
  {
    path: '/:local?',
    component: TenantManager
  }]
});
TenantManager_router.beforeEach(router["b" /* beforeEach */]);
TenantManager_router.afterEach(router["a" /* afterEach */]);
vue_esm["default"].prototype.$config = config["a" /* default */];
vue_esm["default"].use(vue_router_esm["a" /* default */]);
vue_esm["default"].use(iview_default.a, {
  transfer: true
});
new vue_esm["default"]({
  router: TenantManager_router,
  store: store["a" /* default */]
}).$mount('#app');

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("0119");


/***/ }),

/***/ "279a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bc6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2912":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "33f8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("adb9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "40ca":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cd9d6c3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2912");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cd9d6c3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cd9d6c3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cd9d6c3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4360":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("a026");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./node_modules/vuex-persistedstate/dist/vuex-persistedstate.es.js + 2 modules
var vuex_persistedstate_es = __webpack_require__("0e44");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/libs/axios.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var axios_HttpRequest =
/*#__PURE__*/
function () {
  function HttpRequest() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : baseURL;

    _classCallCheck(this, HttpRequest);

    this.baseUrl = baseUrl;
    this.queue = {};
  }

  _createClass(HttpRequest, [{
    key: "getInsideConfig",
    value: function getInsideConfig() {
      var config = {
        baseURL: this.baseUrl,
        headers: {
          //
          "Content-Type": "application/x-www-form-urlencoded"
        }
      };
      return config;
    }
  }, {
    key: "destroy",
    value: function destroy(url) {
      delete this.queue[url];

      if (!Object.keys(this.queue).length) {// Spin.hide()
      }
    }
  }, {
    key: "interceptors",
    value: function interceptors(instance, url) {
      var _this = this;

      // 请求拦截
      instance.interceptors.request.use(function (config) {
        // 添加全局的loading...
        if (!Object.keys(_this.queue).length) {// Spin.show() // 不建议开启，因为界面不友好
        }

        _this.queue[url] = true;
        return config;
      }, function (error) {
        return Promise.reject(error);
      }); // 响应拦截

      instance.interceptors.response.use(function (res) {
        _this.destroy(url);

        var data = res.data,
            status = res.status;
        return {
          data: data,
          status: status
        };
      }, function (error) {
        _this.destroy(url);

        return Promise.reject(error);
      });
    }
  }, {
    key: "request",
    value: function request(options) {
      var instance = axios_default.a.create();
      options = Object.assign(this.getInsideConfig(), options);
      this.interceptors(instance, options.url);
      return instance(options);
    }
  }]);

  return HttpRequest;
}();

/* harmony default export */ var libs_axios = (axios_HttpRequest);
// EXTERNAL MODULE: ./src/config/index.js
var config = __webpack_require__("f121");

// CONCATENATED MODULE: ./src/libs/api.request.js


var api_request_axios = new libs_axios(config["a" /* default */].baseUrl());
/* harmony default export */ var api_request = (api_request_axios);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__("4328");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./src/api/user.js


var user_login = function login(_ref) {
  var userName = _ref.userName,
      password = _ref.password;
  var data = {
    userName: userName,
    password: password
  };
  return api_request.request({
    url: 'login',
    data: lib_default.a.stringify(data),
    method: 'post'
  });
};
var user_getUserInfo = function getUserInfo(token) {
  return api_request.request({
    url: 'userInfo',
    data: lib_default.a.stringify({
      token: token
    }),
    method: 'post'
  });
};
var user_logout = function logout(token) {
  return api_request.request({
    url: 'logout',
    data: lib_default.a.stringify({
      token: token
    }),
    method: 'post'
  });
};
// EXTERNAL MODULE: ./src/libs/util.js
var util = __webpack_require__("c276");

// CONCATENATED MODULE: ./src/store/module/user.js



var local = config["a" /* default */].local();
/* harmony default export */ var user = ({
  state: {
    userName: '',
    userId: '',
    token: Object(util["a" /* getToken */])(),
    access: '',
    hasGetInfo: false
  },
  mutations: {
    setUserId: function setUserId(state, id) {
      state.userId = id;
    },
    setUserName: function setUserName(state, name) {
      state.userName = name;
    },
    setToken: function setToken(state, token) {
      state.token = token;

      Object(util["b" /* setToken */])(token);
    },
    setHasGetInfo: function setHasGetInfo(state, status) {
      state.hasGetInfo = status;
    }
  },
  getters: {},
  actions: {
    // 登录
    handleLogin: function handleLogin(_ref, _ref2) {
      var commit = _ref.commit;
      var userName = _ref2.userName,
          password = _ref2.password,
          url = _ref2.url;
      userName = userName.trim();
      return new Promise(function (resolve, reject) {
        //本地测试,不同后端交互
        if (local) {
          if (userName == 'admin' && password == 'admin') {
            commit('setToken', 'admin_token');
            resolve({
              status: 200,
              data: {
                success: true
              }
            });
          } else {
            reject();
          }
        } //后端验证


        user_login({
          userName: userName,
          password: password
        }).then(function (res) {
          var data = res.data;

          if (res.status == 200 && data.success) {
            console.log('token:' + data.details);
            commit('setToken', data.details);
            resolve();
          } else {
            reject("not success from service");
          }
        }).catch(function (err) {
          reject(err);
        });
      });
    },
    // 退出登录
    handleLogOut: function handleLogOut(_ref3) {
      var state = _ref3.state,
          commit = _ref3.commit;
      return new Promise(function (resolve, reject) {
        if (local) {
          commit('setToken', '');
          resolve();
          return;
        }

        user_logout(state.token).then(function (res) {
          var data = res.data;

          if (res.status == 200 && data.success) {
            commit('setToken', '');
            resolve();
          } else {
            reject("not success from service");
          }
        }).catch(function (err) {
          reject(err);
        });
      });
    },
    // 获取用户相关信息
    getUserInfo: function getUserInfo(_ref4) {
      var state = _ref4.state,
          commit = _ref4.commit;
      return new Promise(function (resolve, reject) {
        if (local) {
          var data = {
            userName: 'admin',
            userId: '1'
          };
          commit('setUserName', data.userName);
          commit('setUserId', data.userId);
          commit('setHasGetInfo', true);
          resolve(data);
          return;
        }

        try {
          user_getUserInfo(state.token).then(function (res) {
            if (res.status != 200 || !res.data.success) {
              reject(res);
              return;
            }

            var data = res.data;
            commit('setUserName', data.userName);
            commit('setUserId', data.userId);
            commit('setHasGetInfo', true);
            resolve(data);
          }).catch(function (err) {
            reject(err);
          });
        } catch (error) {
          reject(error);
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/store/index.js




vue_esm["default"].use(vuex_esm["a" /* default */]);
/* harmony default export */ var store = __webpack_exports__["a"] = (new vuex_esm["a" /* default */].Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    User: user
  },
  plugins: [Object(vuex_persistedstate_es["a" /* default */])()]
}));

/***/ }),

/***/ "8bc6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a18c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return beforeEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return afterEach; });
/* harmony import */ var iview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e069");
/* harmony import */ var iview__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(iview__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c276");


var pageName = window.location.pathname.substring(1);
var LOGIN_PAGE_NAME = 'login.html';
var beforeEach = function beforeEach(to, from, next) {
  iview__WEBPACK_IMPORTED_MODULE_0___default.a.LoadingBar.start();
  var token = Object(_libs_util__WEBPACK_IMPORTED_MODULE_1__[/* getToken */ "a"])();

  if (!token && pageName !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    // 跳转到登录页
    window.location.href = '/' + LOGIN_PAGE_NAME;
    next(false);
  } else {
    next();
  }
};
var afterEach = function afterEach(to) {
  iview__WEBPACK_IMPORTED_MODULE_0___default.a.LoadingBar.finish();
  window.scrollTo(0, 0);
};

/***/ }),

/***/ "adb9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c276":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TOKEN_KEY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getToken; });
/* unused harmony export getParams */
/* unused harmony export scrollTop */
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a78e");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("f121");


var title = _config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].title,
    cookieExpires = _config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].cookieExpires;
var TOKEN_KEY = 'token';
var setToken = function setToken(token) {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(TOKEN_KEY, token, {
    expires: cookieExpires || 1
  });
};
var getToken = function getToken() {
  var token = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(TOKEN_KEY);
  if (token) return token;else return false;
};
/**
 * @param {String} url
 * @description 从URL中解析参数
 */

var getParams = function getParams(url) {
  var keyValueArr = url.split('?')[1].split('&');
  var paramObj = {};
  keyValueArr.forEach(function (item) {
    var keyValue = item.split('=');
    paramObj[keyValue[0]] = keyValue[1];
  });
  return paramObj;
}; // scrollTop animation

var scrollTop = function scrollTop(el) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var to = arguments.length > 2 ? arguments[2] : undefined;
  var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 500;
  var endCallback = arguments.length > 4 ? arguments[4] : undefined;

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  }

  var difference = Math.abs(from - to);
  var step = Math.ceil(difference / duration * 50);

  var scroll = function scroll(start, end, step) {
    if (start === end) {
      endCallback && endCallback();
      return;
    }

    var d = start + step > end ? end : start + step;

    if (start > end) {
      d = start - step < end ? end : start - step;
    }

    if (el === window) {
      window.scrollTo(d, d);
    } else {
      el.scrollTop = d;
    }

    window.requestAnimationFrame(function () {
      return scroll(d, end, step);
    });
  };

  scroll(from, to, step);
};

/***/ }),

/***/ "e364":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f121":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: 'VPC管理中心',

  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,

  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeUrl: function homeUrl() {
    var base = this.env == 'dev' ? 'http://localhost:8080' : 'http://localhost:8080';
    return base + '/tenantmanager.html';
  },

  /**
  * @description api请求基础路径
  */
  baseUrl: function baseUrl() {
    return this.env == 'dev' ? 'http://localhost:8088/rest/' : 'https://produce.com';
  },
  local: function local() {
    return this.env == 'local';
  },
  env: 'dev'
});

/***/ })

/******/ });