<template>
        <div class="menu">
            <!-- Sidebar -->
            
            <div id="sidebarButton">
                <div style="width:40px;">
                    <a href="#!" @click="toggleSidenav">
                        <svg class="h-6 w-10" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 91.914 91.914">
                            <path
                                d="M1.124 0H90.79v14.089H1.124zM26.29 25.494h64.447v14.09H26.29zM1.124 52.33H90.79v14.09H1.124zM26.29 77.825h64.447v14.089H26.29z" />
                        </svg>
                    </a>
                </div>
            </div>

            <nav id="sidebar" :class="!sideNavActive ? 'active': ''">
                <div id="sidebarContent">
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
                </div>
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
            active:"basic",
            sideNavActive: true
        };
    },
    methods: {
        navigate(name) {
        this.active = name;
        },
        toggleSidenav() {
            this.sideNavActive = !this.sideNavActive
            console.log(this.sideNavActive);
        }
    },
    mounted() {
    },
}
</script>