<template>
        <div class="menu">
            <!-- Sidebar -->
            <nav id="sidebar">
                <div class="navbar navbar-expand-lg navbar-light bg-light">
                    <button type="button" id="sidebarCollapse" class="btn custom-blue">
                        <svg class="h-6 w-10 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path
                                d="M438 0H74C33.196 0 0 33.196 0 74s33.196 74 74 74h364c40.804 0 74-33.196 74-74S478.804 0 438 0zm0 108H74c-18.748 0-34-15.252-34-34s15.252-34 34-34h364c18.748 0 34 15.252 34 34s-15.252 34-34 34zM438 182H74c-40.804 0-74 33.196-74 74s33.196 74 74 74h364c40.804 0 74-33.196 74-74s-33.196-74-74-74zm0 108H74c-18.748 0-34-15.252-34-34s15.252-34 34-34h364c18.748 0 34 15.252 34 34s-15.252 34-34 34zM438 364H74c-40.804 0-74 33.196-74 74s33.196 74 74 74h264c11.046 0 20-8.954 20-20s-8.954-20-20-20H74c-18.748 0-34-15.252-34-34s15.252-34 34-34h364c18.748 0 34 15.252 34 34s-15.252 34-34 34c-11.046 0-20 8.954-20 20s8.954 20 20 20c40.804 0 74-33.196 74-74s-33.196-74-74-74z" />
                        </svg>
                    </button>
                </div>
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


            <!-- <nav id="menu">
                <div id="sidebar">
                    <div class="sidebar-header">
                        <div class="col-md-10 bg-white" style="border-radius:10px;">
                            Header
                        </div>
                    </div>

                    <ul class="components pl-12">
                        <li class="">
                            <a href="">
                                Dashboard</a>

                        </li>
                        <li class="active">
                            <a href="#reportSubmenu" data-toggle="collapse" aria-expanded="false"
                                class="dropdown-toggle text-lg">
                                Reports</a>
                        </li>
                    </ul>
                </div>

            </nav> -->

        </div>
</template>

<script>
export default {
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
}
</script>