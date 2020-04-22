<template>
  <div id="basic">
    <div class="">
      <h3 class="header">
        Clickable Table
      </h3>
      <p>
        Clickable table row example with <span class="grey lighten-2">sorting</span>,
        <span class="grey lighten-2">pagination</span>,
        <span class="grey lighten-2">printing</span>,
        <span class="grey lighten-2">excel export</span> turned on by default.
      </p>

      <vue-markdown 
        source="
        <data-table 
            title='Clickable table'
            :columns='tableColumns1'
            :rows='tableRows1' 
            v-on:row-click='onRowClick'
        />"
      >
      </vue-markdown>

      <vue-markdown 
        source="``` javascript
data() {
    return {
        tableColumns1: [
            {
            label: 'First name',
            field: 'firstName',
            numeric: false,
            html: false,
            },
            {
            label: 'Last Name',
            field: 'lastName',
            numeric: false,
            html: false,
            },
            {
            label: 'Company',
            field: 'company',
            numeric: false,
            html: false,
            },
            {
            label: 'City',
            field: 'city',
            numeric: false,
            html: false,
            },
        ],
        tableRows1: [
            {
            firstName: 'Bill',
            lastName: 'Gates',
            company: 'Microsoft',
            city: 'Seattle',
            },
            {
            firstName: 'Steve',
            lastName: 'Jobs',
            company: 'Apple',
            city: 'San Francisco',
            },
            {
            firstName: 'Larry',
            lastName: 'Page',
            company: 'Google',
            city: 'East Lansing',
            },
            {
            firstName: 'Mark',
            lastName: 'Zuckerberg',
            company: 'Facebook',
            city: 'White Plains',
            },
        ],
    };
},
methods:{
  onRowClick(row) {
    //row - is the row clicked on
    //open a modal or do anything with the row
    //for example alert firstName 
    alert(row.firstName);
  },
},
```"
      >
      </vue-markdown>

    <br>
    <h4>Result</h4>
    <hr>
    <data-table
        title="Clickable table"
        :columns="tableColumns1"
        :rows="tableRows1"
        v-on:row-click='onRowClick'
    />
    </div>


    <!-- the modal -->
    <!-- <div class="modal" :class="moreClasses">
      <div class="modal-background"></div>
      <div class="modal-content">
        <table>
          <tr>
            <td>Jhon</td>
            <td>Hi</td>
          </tr>
        </table>

        <input type="text" class="input" />
      </div>
      <button class="modal-close" @click="hideModal()"></button>
    </div> -->
  </div>
</template>

<script>
import DataTable from 'vuejs-datatable';
import VueMarkdown from 'vue-markdown';
export default {
  data() {
    return {
       tableColumns1: [
        {
        label: 'First name',
        field: 'firstName',
        numeric: false,
        html: false,
        },
        {
        label: 'Last Name',
        field: 'lastName',
        numeric: false,
        html: false,
        },
        {
        label: 'Company',
        field: 'company',
        numeric: false,
        html: false,
        },
        {
        label: 'City',
        field: 'city',
        numeric: false,
        html: false,
        },
      ],
      tableRows1: [
        {
        firstName: 'Bill',
        lastName: 'Gates',
        company: 'Microsoft',
        city: 'Seattle',
        },
        {
        firstName: 'Steve',
        lastName: 'Jobs',
        company: 'Apple',
        city: 'San Francisco',
        },
        {
        firstName: 'Larry',
        lastName: 'Page',
        company: 'Google',
        city: 'East Lansing',
        },
        {
        firstName: 'Mark',
        lastName: 'Zuckerberg',
        company: 'Facebook',
        city: 'White Plains',
        },
      ],

    };
  },
  methods:{
    onRowClick(row) {
      this.moreClasses = "is-active";
      alert(row.firstName);
    },
    hideModal() {
      this.moreClasses = "";
      console.log("close modal");
    },
  },
  components: {
    DataTable,
    VueMarkdown,
  },
};
</script>
