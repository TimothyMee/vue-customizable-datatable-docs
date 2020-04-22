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
            title='Basic table'
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
            label: 'Character name',
            field: 'charName',
            numeric: false,
            html: false,
            },
            {
            label: 'First appearance',
            field: 'firstAppearance',
            numeric: false,
            html: false,
            },
            {
            label: 'Created by',
            field: 'createdBy',
            numeric: false,
            html: false,
            },
            {
            label: 'Voiced by',
            field: 'voicedBy',
            numeric: false,
            html: false,
            },
        ],
        tableRows1: [
            {
            charName: 'Abu',
            firstAppearance: 'Alladin (1992)',
            createdBy: 'Joe Grant',
            voicedBy: 'Frank Welker',
            },
            {
            charName: 'Magic Carpet',
            firstAppearance: 'Alladin (1992)',
            createdBy: 'Randy Cartwright',
            voicedBy: 'N/A',
            },
            {
            charName: 'The Sultan',
            firstAppearance: 'Alladin (1992)',
            createdBy: 'Navid Negahban',
            voicedBy: 'Douglas Seale',
            },
        ],
    };
},
methods:{
  onRowClick(row) {
    //row - is the row clicked on
    //open a modal or do anything with the row 
    console.log('open modal');
  },
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
        v-on:row-click='onRowClick'
    />
    </div>


    <!-- the modal -->
    <div class="modal" :class="moreClasses">
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
          label: 'Character name',
          field: 'charName',
          numeric: false,
          html: false,
        },
        {
          label: 'First appearance',
          field: 'firstAppearance',
          numeric: false,
          html: false,
        },
        {
          label: 'Created by',
          field: 'createdBy',
          numeric: false,
          html: false,
        },
        {
          label: 'Voiced by',
          field: 'voicedBy',
          numeric: false,
          html: false,
        },
      ],
      tableRows1: [
        {
          charName: 'Abu',
          firstAppearance: 'Alladin (1992)',
          createdBy: 'Joe Grant',
          voicedBy: 'Frank Welker',
        },
        {
          charName: 'Magic Carpet',
          firstAppearance: 'Alladin (1992)',
          createdBy: 'Randy Cartwright',
          voicedBy: 'N/A',
        },
        {
          charName: 'The Sultan',
          firstAppearance: 'Alladin (1992)',
          createdBy: 'Navid Negahban',
          voicedBy: 'Douglas Seale',
        },
      ],
    };
  },
  methods:{
    onRowClick(row) {
      this.moreClasses = "is-active";
      console.log("open modal", row);
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
