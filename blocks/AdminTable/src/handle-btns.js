const btns = {
  delete: (h, params, vm) => {
    return h('Poptip', {
      props: {
        confirm: true,
        title: '你确定要删除吗?'
      },
      on: {
        'on-ok': () => {
          vm.$emit('on-delete', params)
          vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))
        }
      }
    }, [
      h('Button', {
        props: {
          type: 'text',
          ghost: true
        }
      }, [
        h('Icon', {
          props: {
            type: 'md-trash',
            size: 18,
            color: '#000000'
          }
        })
      ])
    ])
  },
  "extend-one": function(type,title,message){
      return (h, params, vm) => {
        return h('Poptip', {
          props: {
            confirm: true,
            title: message
          },
          on: {
            'on-ok': () => {
              vm.$emit('on-extend-one', params)
            }
          }
        }, [
          h('Button', {
            props: {
              type: 'text',
              ghost: true
            },
            attrs: {
              title: title
            }
          }, [
            h('Icon', {
              props: {
                type: type,
                size: 18,
                color: '#000000'
              }
            })
          ])
        ])
      }
  },
  "extend-two": function(type,title,message){
    return (h, params, vm) => {
      return h('Poptip', {
        props: {
          confirm: true,
          title: message
        },
        on: {
          'on-ok': () => {
            vm.$emit('on-extend-two', params)
          }
        }
      }, [
        h('Button', {
          props: {
            type: 'text',
            ghost: true
          },
          attrs: {
            title: title
          }
        }, [
          h('Icon', {
            props: {
              type: type,
              size: 18,
              color: '#000000'
            }
          })
        ])
      ])
    }
  }
}

export default btns
