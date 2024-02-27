<template>
    <div class="mySider">
        <div class="toggle-button" :style="{ left: isCollapse ? '44px' : '170px'}">
            <el-button
                icon="el-icon-arrow-left"
                circle
                @click="isCollapse = !isCollapse"
                v-show="!isCollapse"
                size="mini"
            ></el-button>
            <el-button
                icon="el-icon-arrow-right"
                circle
                @click="isCollapse = !isCollapse"
                v-show="isCollapse"
                size="mini"
            ></el-button>
        </div>
        <div class="sidebar" :style="{width: isCollapse ? '64px' : '180px'}">
            <el-menu 
                :default-active="routerPath" 
                class="sidebar-el-menu" 
                text-color="#303133"
                active-text-color="#20a0ff"
                :collapse="isCollapse"
                background-color=""
                unique-opened
                router
                :collapse-transition="false"
                @select="changerouter"
            >
                <template v-for="item in list">
                    <el-menu-item
                        v-if="!item.children"
                        :index="item.path"
                        :key="item.path"
                    >
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.meta.title}}</span>
                    </el-menu-item>
                    <template v-else>
                        <el-submenu :index="item.path" :key="item.path">
                            <template slot="title">
                                <i :class="item.icon"></i>
                                <span slot="title">{{item.meta.title}}</span>
                            </template>
                            <template v-for="sub in item.children">
                                <el-menu-item :index="sub.path" :key="sub.path">
                                    <i :class="sub.icon"></i>
                                    <span slot="title">{{sub.meta.title}}</span>
                                </el-menu-item>
                            </template>
                        </el-submenu>
                    </template>
                </template>
            </el-menu>
        </div>
    </div> 
</template>
<script>
export default {
    data() {
      return {
        isCollapse: false,
        list: [
            {
                icon: 'el-icon-s-home',
                path: '/',
                meta: { title: '我的工作台'}
            },
            {
                icon: 'el-icon-s-data',
                meta: { title: '我的工具'},
                path: '/tool',
                children: [
                    {
                        path: '/json',
                        meta: { title: 'Json格式化'}
                    }
                ]
            }
        ]
      };
    },
    computed: {
        routerPath(){
            const meta = this.$route;
            if(meta.activeMenu){
                return meta.activeMenu
            }else{
                return this.$route.path
            }
        }
    },
    methods: {
        changerouter(index, indexpath){
            // this.$router.push(index)
        },
    }
  }
</script>
<style>
.mySider {
    height: 100%;
}
.toggle-button {
    position: fixed;
    top: 30%;
    z-index: 1;
}
.toggle-button > .el-button.is-active{
    padding: 3px;
    box-shadow: 0px 0px 4px #aaa;
    border-color: transparent;
}
/deep/ i {
    color: #409eff;
    font-weight: bold;
}
.sidebar {
    height: 100%;
    transition: all 0.5s ease-in-out;
}
.sidebar::-webkit-scrollbar{
    width: 0;
}
.sidebar ul{
    height: 100%;
}
.sidebar-el-menu {
    padding: 20px 10px;
}
.sidebar .el-menu-item {
    height: 40px;
    line-height: 40px;
    min-width: 0;
}
.sidebar .el-menu-item .is-active {
    color: #0147eb!important
}
.sidebar-el-menu.el-menu--collapse {
    padding: 20px 0;
}
/deep/.sidebar .el-submenu__title {
    height: 40px;
    line-height: 40px;
}

</style>