<template>
  <div class="v-table">
    <table>
      <thead>
        <tr>
          <th v-for="column in dataTable.columns"
              @click="sortBy(column)">{{column.text}}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="row in dataTable.rows | filterRows dataTable.options currentPage" track-by="$index">
          <td v-for="item in row">{{item.text}}</td>
        </tr>
      </tbody>
    </table>

    <div class="v-table-footer">
      <div class="v-table-footer-info">
        Showing {{firstRow + 1}} to {{lastRow}} of {{dataTable.rows.length}} items
      </div>

      <div class="v-table-footer-page" v-if="lastPage !== 1">
        <a class="v-table-footer-page-btn" href="javascript:;"
           @click="togglePage('prev')"
           :class="{disabled: currentPage == 1}">Prev</a>

        <a class="v-table-footer-page-btn" href="javascript:;"
           :class="{current: currentPage == page + 1}"
           @click="togglePage(page + 1)"
           v-for="page in lastPage">{{page + 1}}</a>

        <a class="v-table-footer-page-btn" href="javascript:;"
           @click="togglePage('next')"
           :class="{disabled: currentPage == lastPage}">Next</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dataTable'],

  data() {
    return {
      currentPage: 1
    }
  },

  computed: {
    lastPage() {
      return Math.ceil(this.dataTable.rows.length / this.dataTable.options.pageCount);
    },

    firstRow() {
      return this.currentPage === 1 ? 0 : this.dataTable.options.pageCount * (this.currentPage - 1);
    },

    lastRow() {
      return this.dataTable.options.pageCount * this.currentPage > this.dataTable.rows.length ? this.dataTable.rows.length : this.dataTable.options.pageCount * this.currentPage;
    }
  },

  filters: {
    filterRows(rows, options, currentPage) {
      return this.getPageRows(rows, currentPage, options.pageCount);
    }
  },

  methods: {
    getPageRows(rows) {
      return rows.slice(this.firstRow, this.lastRow);
    },

    togglePage(page) {
      switch(page) {
        case 'prev': 
          if(this.currentPage <= 1) return ;
          this.currentPage--;
          break;
        case 'next':
          if (this.currentPage >= this.lastPage) return ;
          this.currentPage++;
          break;
        default:
          if(this.currentPage == page) return ;
          this.currentPage = page;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .v-table {
    table {
      width: 100%;
      border-collapse:collapse;

      thead {
        border-bottom: 1px solid #111111;

        th {
          padding: 10px 18px;
          text-align: left;
          background-color: #CBCCCD;
          font-weight: bold;
        }
      }

      tbody {
        border-bottom: 1px solid #111111;

        tr {
          background-color: #fff;
          
          td {
            text-align: left;
            padding: 10px 8px;
          }

          &:nth-child(odd) {
            background-color: #f9f9f9;

            td:nth-child(1) {
              background-color: #F1F1F2;
            }
          }

          &:nth-child(even) {
            td:nth-child(1) {
              background-color: #fafafa;
            }
          }
        }
      }
    }

    & &-footer {
      display: table;
      margin-top: 10px;
      width: 100%;

      &::after {
        content: '';
        clear: both;
      }

      &-info {
        float: left;
      }

      &-page {
        font-size: 0;
        float: right;

        &-btn {
          display: inline-block;
          box-sizing: border-box;
          margin-right: 5px;
          padding: 10px 15px;
          text-decoration: none;
          color: #000;
          border-radius: 2px;
          font-size: 1rem;
          
          &:hover {
            color: #fff;
            border-top: 1px solid #333;
            border-bottom: 1px solid #333;
            background-color: #333;
          }

          &:nth-last-child(1) {
            margin-right: 0;
          }

          &.disabled {
            cursor: default;
            color: #666;

            &:hover {
              color: #666;
              background-color: transparent;
              border: none;
            }
          }

          &.current {
            color: #000;  
            border: 1px solid #979797;
            background-color: #fff;
            background: linear-gradient(to bottom, #fff 0%, #dcdcdc 100%);
          }
        }
      }
    }
  }
</style>
