import Vue from 'vue';
import DataTable from '../src/DataTable.vue';
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
                    },
                    {
                        value: 'link',
                        text: 'Link',
                        sortable: false,
                        editable: false,
                        isHTML: true
                    },
                    {
                        value: 'action',
                        text: 'Action',
                        sortable: false,
                        editable: false,
                        isButton: true
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
                    },

                    link: {
                        value: `<a href="${chance.url()}">${chance.url()}</a>`
                    },

                    action: {
                        value: [
                            {
                                text: 'action1',
                                class: ['red'],
                                func: function(event, column, field) {
                                    console.log('event', event);
                                    console.log('column', column);
                                    console.log('field', field);
                                }
                            },
                            {
                                text: 'action2',
                                class: ['green'],
                                func: function(event, column, field) {
                                    console.log('event', event);
                                    console.log('column', column);
                                    console.log('field', field);
                                }
                            }
                        ]
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