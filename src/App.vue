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
            sortable: true
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

        rows: []
      }
    }
  },

  ready() {
    for(let i = 0; i< 20; i++) {
      const item = {
        id: i + 1,
        name: 'Guy' + (i + 1),
        sex: 'man',
        age: 23,
        note: ''
      }

      this.tableData.rows.push(item);
    }
  },

  components: {
    DataTable
  }
}
</script>

<style>

</style>
