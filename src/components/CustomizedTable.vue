<template>
  <div id="basic">
    <div class="">
      <h3 class="header">
        Customized Table
      </h3>
      <p>
        Customizing a basic table with your own css. <br>
        You can use table with bootstrap, bulma, tailwind, or even custom css.
      </p>

      <p>
        '<strong>:parent-div-classes</strong>' - refers to the classes given to the div containing the table. <br>
        <strong>Default</strong> - 'table-responsive' <br>
        <strong>Description</strong> This is where classes like 'table-responsive' (in bootstrap) to make the table responsive or 'table-container' (in bulma) are specified.      
      </p>

      <p>
        '<strong>:table-classes</strong>' - refers to the classes given the table. <br>
        <strong>Default</strong> - 'table table-bordered' <br>
        <strong>Description</strong> This is where table classes are specified. For example 'table table-borderless' or 'table is-bordered'.      
      </p>

      <vue-markdown 
        source="
        <data-table 
            title='Basic table'
            :columns='tableColumns1'
            :rows='tableRows1' 
            :table-classes=''table table-borderless''
            :parent-div-classes=''table-responsive''
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
        title="Basic table"
        :columns="tableColumns1"
        :rows="tableRows1"
        :table-classes="'table table-borderless'"
        :parent-div-classes="'table-responsive'"
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
