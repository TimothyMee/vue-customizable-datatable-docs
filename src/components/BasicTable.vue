<template>
  <div id="basic">
    <div class="">
      <h3 class="header">
        Basic Table
      </h3>
      <p>
        Basic example with <span class="grey lighten-2">sorting</span>,
        <span class="grey lighten-2">pagination</span>,
        <span class="grey lighten-2">printing</span>,
        <span class="grey lighten-2">excel export</span> turned on by default.
      </p>

      <vue-markdown 
        source="
        <data-table 
            title='Basic table'
            :columns='tableColumns1'
            :rows='tableRows1' 
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
```"
      >
      </vue-markdown>

    <br>
    <h4>Result</h4>
    <hr>
    <data-table
        title="Basic table"
        :columns="tableColumns1"
        :rows="tableRows1"
    />
    </div>
  </div>
</template>

<script>
import DataTable from 'vue-customizable-datatable';
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
  components: {
    DataTable,
    VueMarkdown,
  },
};
</script>
