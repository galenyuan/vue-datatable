# vue-datatable

> A datatable component build with Vuejs.

##Usage
```javascript
<data-table :data-table="tableData"></data-table>


import DataTable from 'vue-datatable';

export default {
  data() {
    return {
      tableData: {
        options: {
        	//Global sort option
          sortable: true,
          //Global edit option
          editable: true,
          //How many items will be shown in each page
          pageCount: 10
        },

        columns: [
          {
            value: 'id',
            text: 'ID',
            //If this column is sortable
            sortable: true,
            //If this column is editable
            editable: false
          }
        ],

        rows: [
					{
						id: {
							value: 1,
							//If this field is editable
							editable: false
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
```