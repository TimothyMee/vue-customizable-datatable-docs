<template>
  <div id="app">
    <a
      href="https://github.com/MicroDroid/vue-materialize-datatable"
      class="github-corner"
      aria-label="View source on GitHub"
      ><svg
        width="80"
        height="80"
        viewBox="0 0 250 250"
        style="fill:#ee6e73; color:#fff; position: absolute; top: 0; border: 0; right: 0;"
        aria-hidden="true"
      >
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
        <path
          d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
          fill="currentColor"
          style="transform-origin: 130px 106px;"
          class="octo-arm"
        />
        <path
          d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
          fill="currentColor"
          class="octo-body"
        /></svg
    ></a>
    <header>
      <div class="container">
        <a
          href="#"
          data-target="nav-mobile"
          class="top-nav sidenav-trigger waves-effect waves-light circle hide-on-large-only"
          ><i class="material-icons">menu</i></a
        >
      </div>
      <ul id="nav-mobile" class="sidenav sidenav-fixed">
        <li class="bold">
          <a href="#basic" class="waves-effect waves-teal">Basic Example</a>
        </li>
        <li class="bold">
          <a href="#minimal" class="waves-effect waves-teal">Minimal table</a>
        </li>
        <li class="bold">
          <a href="#localization" class="waves-effect waves-teal"
            >Localization</a
          >
        </li>
        <li class="bold">
          <a href="#interactive" class="waves-effect waves-teal"
            >Interactive rows</a
          >
        </li>
        <li class="bold">
          <a href="#custom-pagination" class="waves-effect waves-teal"
            >Custom pagination</a
          >
        </li>
        <li class="bold">
          <a href="#row-buttons" class="waves-effect waves-teal">Row buttons</a>
        </li>
      </ul>
    </header>

    <!-- Page Layout here -->
    <main>
      <div id="index-banner" class="section">
        <div class="container">
          <div class="row" style="margin-bottom: 0;">
            <div
              class="col s12 m8 offset-m1 xl11 offset-xl1 center-on-small-only"
            >
              <h1 class="header mt10">
                vue-customizable-datatable demo page
              </h1>
              <h4 class="light">
                Various examples with VueJS customizable datatable
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div id="minimal" class="row scrollspy" style="margin-bottom: 0;">
          <div
            class="col s12 m8 offset-m1 xl11 offset-xl1 center-on-small-only"
          >
            <div>
              <basic-table></basic-table>
            </div>
            <div>
              <clickable-table></clickable-table>
            </div>
            <div>
              <minimal-table></minimal-table>
            </div>
            <div>
              <table-with-buttons></table-with-buttons>
            </div>
            <div>
              <table-with-checkboxes></table-with-checkboxes>
            </div>
            <div>
              <customized-table></customized-table>
            </div>
            <div>
              <Loading-animation-table></Loading-animation-table>
            </div>
          </div>
        </div>

        <div
          id="custom-pagination"
          class="row scrollspy"
          style="margin-bottom: 0;"
        >
          <div
            class="col s12 m8 offset-m1 xl11 offset-xl1 center-on-small-only"
          >
            <h3 class="header">
              Custom pagination
            </h3>
            <p>Table with custom amount of rows on every page.</p>
            <div language="html">
              &lt;datatable title="Table with custom pagination"
              :columns="tableColumns1" :rows="tableRows4" :perPage="[3, 5, 10]"
              /&gt;
            </div>
            <div language="javascript">
              data() { return { tableRows4: [ { charName: "Abu",
              firstAppearance: "Alladin (1992)", createdBy: "Joe Grant",
              voicedBy: "Frank Welker" }, { charName: "Magic Carpet",
              firstAppearance: "Alladin (1992)", createdBy: "Randy Cartwright",
              voicedBy: "N/A" }, { charName: "The Sultan", firstAppearance:
              "Alladin (1992)", createdBy: "Navid Negahban", voicedBy: "Douglas
              Seale" }, { charName: "Razoul", firstAppearance: "Alladin (1992)",
              voicedBy: "Jim Cummings" }, { charName: "Fazahl", firstAppearance:
              "Alladin (1992)", voicedBy: "Jim Cummings" }, { charName: "Hakim",
              firstAppearance: "Alladin (1992)", voicedBy: "Numan Acar" }, {
              charName: "Zagoolien", firstAppearance: "Alladin (1992)",
              voicedBy: "Jeff Bennett" }, { charName: "The Peddler",
              firstAppearance: "Alladin (1992)", voicedBy: "Frank Welker" } ], }
              }
            </div>
            <datatable
              title="Table with custom pagination"
              :columns="tableColumns1"
              :rows="tableRows4"
              :per-page="[3, 5, 10]"
            />
          </div>
        </div>

        <div id="row-buttons" class="row scrollspy" style="margin-bottom: 0;">
          <div id="row-buttons" class="row scrollspy" style="margin-bottom: 0;">
            <div
              class="col s12 m8 offset-m1 xl11 offset-xl1 center-on-small-only"
            >
              <h1 class="header">
                Links
              </h1>
              <div class="collection">
                <a
                  href="https://github.com/MicroDroid/vue-materialize-datatable"
                  class="collection-item"
                  >vue-materialize-datatable</a
                >
                <a
                  href="https://github.com/MicroDroid/vue-materialize-datatable"
                  class="collection-item"
                  >Materialize</a
                >
                <a
                  href="https://github.com/MicroDroid/vue-materialize-datatable"
                  class="collection-item"
                  >Materialize modals</a
                >
                <a
                  href="https://github.com/MicroDroid/vue-materialize-datatable"
                  class="collection-item"
                  >Materialize scrollspy</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="page-footer docs-footer">
      <div class="container">
        <div class="row" style="margin-bottom: 0;">
          <div
            class="col s12 m8 offset-m1 xl11 offset-xl1 center-on-small-only"
          >
            <div class="left valign-wrapper date">
              2019
            </div>
            <div class="right grey-text text-darken-1 right">
              vue-materialize-datatable author -
              <a href="https://github.com/MicroDroid" target="_blank"
                >MicroDroid</a
              >
            </div>
            <br />
            <div class="right grey-text text-darken-1 right">
              author of this page -
              <a href="https://github.com/justice47" target="_blank"
                >justice47</a
              >
            </div>
          </div>
        </div>
        <!--<div class="row" style="margin-bottom: 0;">
          <div class="col s12 m10 offset-m1">

          <a class="grey-text text-darken-1 right" href="https://github.com/Dogfalo/materialize/blob/master/LICENSE">MIT License</a>

          </div>
        </div> -->
      </div>
    </footer>
  </div>
</template>

<script>
import DataTable from 'vuejs-datatable';
// import Prism from 'vue-prism-component';
import BasicTable from './BasicTable';
import ClickableTable from './ClickableTable';
import MinimalTable from './MinimalTable';
import TableWithButtons from './TableWithButtons';
import TableWithCheckboxes from './TableWithCheckboxes';
import CustomizedTable from './CustomizedTable';
import LoadingAnimationTable from './LoadingAnimationTable';

export default {
  name: 'Index',

  components: {
    DataTable,
    BasicTable,
    ClickableTable,
    MinimalTable,
    TableWithButtons,
    TableWithCheckboxes,
    CustomizedTable,
    LoadingAnimationTable
  },
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
  },
};
</script>