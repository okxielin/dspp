<template>
    <div class="dsp-tab">
        <ul class="list">
            <li v-on:click="changeActive(index)" :class="index==0?'active':''" v-for="(x, index) in toDate">{{x.label}}</li>
            <li v-on:click="addTab" v-if="editable">+添加创意</li>
        </ul>
        <div class="content">
            <div v-for="(i, idx) in toDate" v-show="idx==selected" :key="idx">
                <slot :name="i.name"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dsp-tab",
        data(){
            return {
                selected: 0,
                selectedcontent: 'tab-content-1'
            }
        },
        props: {
            toDate: {
                required: true,
                type: Array
            },
            editable: {
                required: true,
                type: Boolean
            }
        },
        watch: {
            '$slots': function(a, b){
                console.log(a)
            }
        },
        methods: {
            addTab(){
                this.$emit('edit')
            },
            changeActive(index){
                this.selected = index
                this.selectedcontent = this.toDate[index].name
            }
        },
        mounted() {
            console.log(this.$slots)
        }
    }
</script>

<style scoped lang="less">
.dsp-tab{
    .list{
        display: flex;
        height: 50px;
        line-height: 50px;
        li{
            list-style: none;
            border-bottom: 2px solid blue;
        }
        .active{
            border-bottom-color: 2px solid blue;
        }
    }
}

</style>