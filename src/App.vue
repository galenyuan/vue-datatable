<template>
  <div id="app">
    <data-table :data-table="tableData"></data-table>
  </div>
</template>

<script>
import DataTable from './components/DataTable';

export default {
  data() {
    return {
      tableData: {
        options: {
          sortable: true,
          editable: true,
          pageCount: 10
        },

        columns: [
          {
            value: 'id',
            text: 'ID',
            sortable: true
          },
          {
            value: 'name',
            text: '名字',
            editable: true
          },
          {
            value: 'sex',
            text: '性别',
            editable: true
          },
          {
            value: 'age',
            text: '年龄'
          },
          {
            value: 'note',
            text: '备注'
          }
        ],

        rows: [
          {
            id: {
              value: 1,
              text: 1
            },
            name: {
              value: 'zhangsan',
              text: '张三' 
            },
            sex: {
              value: 1,
              text: '男'
            },
            age: {
              value: 23,
              text: '二十三'
            },
            note: {
              value: '',
              text: 'Nothing'
            }
          },
          {
            id: {
              value: 2,
              text: 2
            },
            name: {
              value: 'lisi',
              text: '李四' 
            },
            sex: {
              value: 1,
              text: '男'
            },
            age: {
              value: 23,
              text: '二十三'
            },
            note: {
              value: '',
              text: 'Nothing'
            }
          },
          {
            id: {
              value: 3,
              text: 3
            },
            name: {
              value: 'zhaowu',
              text: '赵武' 
            },
            sex: {
              value: 1,
              text: '男'
            },
            age: {
              value: 23,
              text: '二十三'
            },
            note: {
              value: '',
              text: 'Nothing'
            }
          },
          {
            id: {
              value: 4,
              text: 4
            },
            name: {
              value: 'zhaowu4',
              text: '赵武4' 
            },
            sex: {
              value: 1,
              text: '男'
            },
            age: {
              value: 23,
              text: '二十三'
            },
            note: {
              value: '',
              text: 'Nothing'
            }
          },
          {
            id: {
              value: 5,
              text: 5
            },
            name: {
              value: 'zhaowu5',
              text: '赵武5' 
            },
            sex: {
              value: 1,
              text: '男'
            },
            age: {
              value: 23,
              text: '二十三'
            },
            note: {
              value: '',
              text: 'Nothing'
            }
          },
          {
            id: {
              value: 6,
              text: 6
            },
            name: {
              value: 'zhaow6',
              text: '赵6' 
            },
            sex: {
              value: 1,
              text: '男'
            },
            age: {
              value: 23,
              text: '二十三'
            },
            note: {
              value: '',
              text: 'Nothing'
            }
          },
          {
            id: {
              value: 7,
              text: 7
            },
            name: {
              value: 'zhaow7',
              text: '赵7' 
            },
            sex: {
              value: 1,
              text: '男'
            },
            age: {
              value: 23,
              text: '二十三'
            },
            note: {
              value: '',
              text: 'Nothing'
            }
          },
          {
            id: {
              value: 8,
              text: 8
            },
            name: {
              value: 'zhaow8',
              text: '赵8' 
            },
            sex: {
              value: 1,
              text: '男'
            },
            age: {
              value: 23,
              text: '二十三'
            },
            note: {
              value: '',
              text: 'Nothing'
            }
          },
          {
            id: {
              value: 9,
              text: 9
            },
            name: {
              value: 'zhaow9',
              text: '赵9' 
            },
            sex: {
              value: 1,
              text: '男'
            },
            age: {
              value: 23,
              text: '二十三'
            },
            note: {
              value: '',
              text: 'Nothing'
            }
          },
          {
            id: {
              value: 10,
              text: 10
            },
            name: {
              value: 'zhaow10',
              text: '赵10' 
            },
            sex: {
              value: 1,
              text: '男'
            },
            age: {
              value: 23,
              text: '二十三'
            },
            note: {
              value: '',
              text: 'Nothing'
            }
          },
          {
            id: {
              value: 11,
              text: 11
            },
            name: {
              value: 'zhaow11',
              text: '赵11' 
            },
            sex: {
              value: 1,
              text: '男'
            },
            age: {
              value: 23,
              text: '二十三'
            },
            note: {
              value: '',
              text: 'Nothing'
            }
          },
          {
            id: {
              value: 12,
              text: 12
            },
            name: {
              value: 'zhaow12',
              text: '赵12' 
            },
            sex: {
              value: 1,
              text: '男'
            },
            age: {
              value: 23,
              text: '二十三'
            },
            note: {
              value: '',
              text: 'Nothing'
            }
          },
          {
            id: {
              value: 13,
              text: 13
            },
            name: {
              value: 'zhaow13',
              text: '赵13' 
            },
            sex: {
              value: 1,
              text: '男'
            },
            age: {
              value: 23,
              text: '二十三'
            },
            note: {
              value: '',
              text: 'Nothing'
            }
          },
          {
            id: {
              value: 14,
              text: 14
            },
            name: {
              value: 'zhaow14',
              text: '赵14' 
            },
            sex: {
              value: 1,
              text: '男'
            },
            age: {
              value: 23,
              text: '二十三'
            },
            note: {
              value: '',
              text: 'Nothing'
            }
          },
          {
            id: {
              value: 15,
              text: 15
            },
            name: {
              value: 'zhaow15',
              text: '赵15' 
            },
            sex: {
              value: 1,
              text: '男'
            },
            age: {
              value: 23,
              text: '二十三'
            },
            note: {
              value: '',
              text: 'Nothing'
            }
          },
          {
            id: {
              value: 16,
              text: 16
            },
            name: {
              value: 'zhaow16',
              text: '赵16' 
            },
            sex: {
              value: 1,
              text: '男'
            },
            age: {
              value: 23,
              text: '二十三'
            },
            note: {
              value: '',
              text: 'Nothing'
            }
          },
          {
            id: {
              value: 17,
              text: 17
            },
            name: {
              value: 'zhaow17',
              text: '赵17' 
            },
            sex: {
              value: 1,
              text: '男'
            },
            age: {
              value: 23,
              text: '二十三'
            },
            note: {
              value: '',
              text: 'Nothing'
            }
          },
          {
            id: {
              value: 18,
              text: 18
            },
            name: {
              value: 'zhaow18',
              text: '赵18' 
            },
            sex: {
              value: 1,
              text: '男'
            },
            age: {
              value: 23,
              text: '二十三'
            },
            note: {
              value: '',
              text: 'Nothing'
            }
          },
          {
            id: {
              value: 19,
              text: 19
            },
            name: {
              value: 'zhaow19',
              text: '赵19' 
            },
            sex: {
              value: 1,
              text: '男'
            },
            age: {
              value: 23,
              text: '二十三'
            },
            note: {
              value: '',
              text: 'Nothing'
            }
          }
        ]
      }
    }
  },

  components: {
    DataTable
  }
}
</script>

<style>

</style>
