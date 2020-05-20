<template>
    <div>
        <template v-for="(item,index) of menu">
            <template v-if="item.children">
                <el-submenu :index="item.title">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span>{{item.title}}</span>
                    </template>
                    <el-menu-item-group>
                        <sidebar-item :menu="item.children" />
                    </el-menu-item-group>
                </el-submenu>
            </template>
            <template v-else>
                <el-menu-item :index="item.name">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.title}}</span>
                </el-menu-item>
            </template>
        </template>
    </div>
</template>
<script>
export default {
    name: 'SidebarItem',
    props: {
        menu: {
            type: Array,
            default: () => []
        }
    }
}
</script>
