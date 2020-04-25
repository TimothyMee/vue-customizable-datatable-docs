<template>
  <div id="app">
    <a
      href="https://github.com/TimothyMee/vuejs-customizable-datatable"
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

    <div class="col-md-12 row">
        <div class="col-md-4">
          <div class="wrapper">
            <!-- Sidebar -->
            <nav id="sidebar">
                <div class="sidebar-header">
                    <h3 style="color:white">Table of Content</h3>
                </div>

                <ul class="list-unstyled components">
                  <li :class="active === 'installation'? 'active': ''">
                        <a href="#installation" @click="navigate('installation')">Installation & Usage</a>
                    </li>
                    <li :class="active === 'basic'? 'active': ''">
                        <a href="#basic-table" @click="navigate('basic')">Basic Table</a>
                    </li>
                    <li :class="active === 'clickable'? 'active': ''">
                        <a href="#clickable-table" @click="navigate('clickable')">Clickable Table</a>
                    </li>
                    <li :class="active === 'minimal'? 'active': ''">
                        <a href="#minimal-table" @click="navigate('minimal')">Minimal Table</a>
                    </li>
                    <li :class="active === 'buttons'? 'active': ''">
                        <a href="#buttons-table" @click="navigate('buttons')">Table With Buttons</a>
                    </li>
                    <li :class="active === 'select'? 'active': ''">
                        <a href="#select-table" @click="navigate('select')">Select Table</a>
                    </li>
                    <li :class="active === 'customized'? 'active': ''">
                        <a href="#customized-table" @click="navigate('customized')">Customized Table</a>
                    </li>
                    <li :class="active === 'loading'? 'active': ''">
                        <a href="#loading-animation-table" @click="navigate('loading')">Loading Animation Table</a>
                    </li>
                    <li :class="active === 'paginated'? 'active': ''">
                        <a href="#custom-paginated-table" @click="navigate('paginated')">Custom Paginated Table</a>
                    </li>
                </ul>
            </nav>
        </div>
        </div>
        <div class="col-md-8">
          <h1>Vue Customizable DataTable</h1>
          <h4>A demo of the vue customizable datatable in full flow</h4>
          <div
            class="col s12 m8 offset-m1 xl11 offset-xl1 center-on-small-only"
          >
            <div id="installation">
                <vue-markdown 
                  source='## Installation

```bash
npm i vue-customizable-datatable --save
```

## Usage

Include the component,

```javascript
import DataTable from "vue-customizable-datatable";
```
Then, register the component, however you like:

```javascript
{
    ...
    components: {
        ...
        DataTable
    }
}'
                >
                  </vue-markdown>
            </div>
            <div id="basic-table">
              <br><br><br>
              <basic-table></basic-table>
            </div>
            <div id="clickable-table">
              <clickable-table></clickable-table>
            </div>
            <div id="minimal-table">
              <minimal-table></minimal-table>
            </div>
            <div id="buttons-table">
              <table-with-buttons></table-with-buttons>
            </div>
            <div id="select-table">
              <table-with-checkboxes></table-with-checkboxes>
            </div>
            <div id="customized-table">
              <customized-table></customized-table>
            </div>
            <div id="loading-animation-table">
              <Loading-animation-table></Loading-animation-table>
            </div>
            <div id="custom-paginated-table">
              <custom-pagination-table></custom-pagination-table>
            </div>
          </div>

          <footer style="margin-top:50px;">
            <div class="container row">
                <div class="col-md-8">
                  author of this page -
                  <a href="https://github.com/TimothyMee/vuejs-customizable-datatable" target="_blank"
                    >TimothyMee</a
                  >
                  &copy; 2020
                </div>
            </div>
          </footer>
        </div>
    </div>
    
  </div>
</template>

<script>
import DataTable from 'vue-customizable-datatable';
// import Prism from 'vue-prism-component';
import BasicTable from './BasicTable';
import ClickableTable from './ClickableTable';
import MinimalTable from './MinimalTable';
import TableWithButtons from './TableWithButtons';
import TableWithCheckboxes from './TableWithCheckboxes';
import CustomizedTable from './CustomizedTable';
import LoadingAnimationTable from './LoadingAnimationTable';
import CustomPaginationTable from './CustomPaginationTable';
import VueMarkdown from 'vue-markdown';


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
    LoadingAnimationTable,
    CustomPaginationTable,
    VueMarkdown
  },
  data() {
    return {
      active:"basic"
    };
  },
  methods: {
    navigate(name) {
      this.active = name;
    }
  },
  mounted() {
  },
};
</script>