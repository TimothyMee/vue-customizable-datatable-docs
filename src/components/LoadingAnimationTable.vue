<template>
  <div id="basic">
    <div class="">
      <h3 class="header">
        Table Showing Animation
      </h3>
      <p>
        A basic table showing animation. This happens when the row is an empty array.
      </p>

      <vue-markdown 
        source="
        <data-table 
            title='Loading table'
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
            ...
        ],
        tableRows1: [],
    };
},
```"
      >
      </vue-markdown>

    <br>
    <h4>Result</h4>
    <hr>
    <data-table
        title="Loading Table"
        :columns="tableColumns1"
        :rows="tableRows1"
    />
    <i style="color:red">***NOTE: This animation can be disabled by setting the loadingAnimation prop to false. 'loadingAnimation: "false"' ***</i>
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
      tableRows1: [],
    };
  },
  components: {
    DataTable,
    VueMarkdown,
  },
};
</script>
