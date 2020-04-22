<template>
  <div id="basic">
    <div class="">
      <h3 class="header">
        Select Table
      </h3>
      <p>
        Table rows with checkboxes for selection
      </p>

      <vue-markdown 
        source="
        Selected: { {selectedCheckboxes} }
        <data-table 
            title='Select table'
            :columns='tableColumns1'
            :rows='tableRows1' 
            enable-checkbox='true'
            :checkbox-value-field=''firstName''
            v-on:checked-boxes='updateCheckboxData'
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
        selectedCheckboxes: []
    };
},
methods:{
  updateCheckboxData(checkedboxes) {
    this.selectedCheckboxes = checkedboxes;
  },
},
```"
      >
      </vue-markdown>

    <br>
    <h4>Result</h4>
    <hr>
    Selected: {{selectedCheckboxes}}
    <data-table
        title="Select table"
        :columns="tableColumns1"
        :rows="tableRows1"
        enable-checkbox='true'
        :checkbox-value-field="'firstName'"
        v-on:checked-boxes='updateCheckboxData'
        :printable='false'
    />

    <i style="color:red">***NOTE: if you want the whole row to be return when the checkbox is clicked, just remove ":checkbox-value-field = 'firstName'"***</i>
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
      selectedCheckboxes: []
    };
  },
  methods:{
    updateCheckboxData(checkedboxes) {
      this.selectedCheckboxes = checkedboxes;
    },
  },
  components: {
    DataTable,
    VueMarkdown,
  },
};
</script>
