<template>
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
</template>

<script>
export default {
    
}
</script>