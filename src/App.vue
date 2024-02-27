<template>
    <div id="app" class="home">
        <vheader v-if="!prefix"/>
        <el-container :style="{ height: prefix ? '100%' : 'calc(100% - 56px)' }">
            <vsidebar/>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import vheader from '@/components/Header.vue'
import vsidebar from '@/components/Sidebar.vue'
export default {
    components: {
        vheader,
        vsidebar
    },
    data(){
        return {
            prefix: false
        }
    },
    created(){
        
    },
    methods:{
        
    }
}
</script>
<style scoped>
    .home {
        width: 100%;
    }
    .home .el-container {
        width: 100%;
    }
</style>
