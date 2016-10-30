# vue-datatable

> A datatable component build with Vuejs.

> You can try it [Online](https://galenyuan.github.io/vue-datatable/), it's Vue version [DataTables](https://github.com/DataTables/DataTables)

##Usage
```bash
npm install --save vue-datatable
```
Vue-loader and Babel is required(maybe will release ES5 and JavaScript file later :P)

```javascript
<data-table :data-table="tableData"></data-table>


import DataTable from 'vue-datatable';

export default {
  data() {
    return {
      tableData: {
        options: {
        	// Global sort option
          sortable: true,
          // Global edit option
          editable: true,
          // How many items will be shown in each page
          pageCount: 10,
          // Callback of change page
          onPageChanged(page) {
            console.log(page);
          }
        },

        columns: [
          {
            value: 'id',
            text: 'ID',
            // If this column is sortable
            sortable: true,
            // If this column is editable
            editable: false,
            // Render this column as HTML or not
            isHTML: false,
            // Render this column as button array or not
            isButton: false
          },
          {
          	value: 'html',
          	text: 'HTML',
          	sortable: false,
          	editable: false,
          	isHTML: true,
          	isButton: false
          },
          {
          	value: 'button',
          	text: 'Button',
          	sortable: false,
          	editable: false,
          	isHTML: false,
          	isButton: true
          }
        ],

        rows: [
			{
				id: {
					value: 1,
					// If this field is editable
					editable: false
				},
				html: {
					value: '<a href="https://www.github.com">'GitHub</a>
				},
				button: {
					value: [
						// Text of this button
						text: 'Button',
						// Classes of this button
						class: ['button'],
						// Click function, 3 arguments: event, column text and current field object
						func: function(event, column, field) {
						
						}
					]
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
