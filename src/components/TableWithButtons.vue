<template>
  <div id="basic">
    <div class="">
      <h3 class="header">
        Table With Buttons
      </h3>
      <p>
        Table with custom buttons
      </p>

      <vue-markdown 
        source="
        <data-table 
            title='Table With Custom Buttons'
            :columns='tableColumns1'
            :rows='tableRows1' 
        >
          <th slot='thead-tr'>
            Actions
          </th>
          <template slot='tbody-tr'>
            <td>
              <button
                class='btn btn-default'
              >
                Edit
              </button>

              <button
                class='btn btn-danger'
              >
                Delete
              </button>
              <button
                class='btn btn-info'
              >
                View Holdings
              </button>
            </td>
          </template>
        </data-table>"
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
        title="Table With Custom Buttons"
        :columns="tableColumns1"
        :rows="tableRows1"
    >
          <th slot='thead-tr'>
            Actions
          </th>
          <template slot='tbody-tr'>
            <td>
              <button
                class='btn btn-default'
              >
                Edit
              </button>

              <button
                class='btn btn-danger'
              >
                Delete
              </button>
              <button
                class='btn btn-info'
              >
                View Holdings
              </button>
            </td>
           </template>
      </data-table>
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
