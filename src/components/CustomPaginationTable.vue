<template>
  <div id="basic">
    <div class="">
      <h3 class="header">
        Custom Paginated Table
      </h3>
      <p>
        A basic table showing how to custom paginate the table
      </p>

      <vue-markdown 
        source="
        <data-table 
            title='Custom Paginated table'
            :columns='tableColumns1'
            :rows='tableRows1' 
            :perPage='[3, 5, 10]'
        />"
      >
      </vue-markdown>

      <vue-markdown 
        source="``` javascript
data() {
    return {
        tableColumns1: [
            ...
        ],
        tableRows1: [
            ...
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
        title="Custom Paginated table"
        :columns="tableColumns1"
        :rows="tableRows1"
        :perPage='[3, 5, 10]'
    />
    </div>
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
  components: {
    DataTable,
    VueMarkdown,
  },
};
</script>
