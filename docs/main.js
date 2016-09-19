import Vue from 'vue';
import DataTable from 'vue-datatable';
import Chance from 'chance';

(function(){
    new Vue({
        el: 'body',

        data: {
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
                        sortable: true,
                        editable: false
                    },
                    {
                        value: 'name',
                        text: 'Name',
                        sortable: true,
                        editable: true
                    },
                    {
                        value: 'age',
                        text: 'Age',
                        sortable: true,
                        editable: true
                    },
                    {
                        value: 'sex',
                        text: 'Sex',
                        sortable: true,
                        editable: true
                    }
                ],

                rows: [],

                onPageChanged(page) {
                    console.log('Current page is ' + page);
                }
            }
        },

        ready() {
            const chance = new Chance();
            const length = chance.integer({min: 0, max: 1000});
            
            for(let i = 0; i < length; i++) {
                const obj = {
                    id: {
                        value: i + 1,
                    },
                    
                    name: {
                        value: chance.name(),
                        editable: chance.bool()
                    },

                    age: {
                        value: chance.age(),
                        editable: chance.bool()
                    },

                    sex: {
                        value: chance.gender(),
                        editable: chance.bool
                    }
                }

                this.tableData.rows.push(obj);
            }
        },

        components: {
            DataTable
        }
    });
})();