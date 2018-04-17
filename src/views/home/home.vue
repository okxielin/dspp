<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-row :gutter="20">
                    <el-col :span="12">整体情况</el-col>
                    <el-col :span="12">
                        <el-date-picker
                        v-model="startTime"
                        type="month"
                        value-format="yyyy/MM"
                        placeholder="选择月">
                        </el-date-picker>
                        <el-date-picker
                        v-model="endTime"
                        type="month"
                        value-format="yyyy/MM"
                        placeholder="选择月">
                        </el-date-picker>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-card shadow="always" v-on:click.native="test">总是显示</el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="always">总是显示</el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="always">总是显示</el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="always">总是显示</el-card>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>
                <el-row>
                    <div ref="graph" class="graph"></div>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import axios from 'axios'
    import Echarts,{init} from 'echarts'
    import '../../utils/request.js'
    import moment from 'moment'
    export default {
        name: 'home',
        data(){
            return {
                startTime: "2017/04",
                endTime: "2018/04", 
                options: [
                    {
                    value: '选项1',
                    label: '黄金糕'
                    }, {
                        value: '选项2',
                        label: '双皮奶'
                    }, {
                        value: '选项3',
                        label: '蚵仔煎'
                    }, {
                        value: '选项4',
                        label: '龙须面'
                    }, {
                        value: '选项5',
                        label: '北京烤鸭'
                    }
                ],
                value: '',
                axisList: [1, 2, 3, 4, 5],
                days: null,
                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                instance: null
            }
        },
        watch: {
            startTime(a, b){
                console.log(a)
            },
            endTime(c, d){
                console.log(c)
                this.getAllMonth(this.startTime, this.endTime)
            }
        },
        methods: {
            getAllMonth(start, end){
                let [startMonth, startYear] = start.split('/')
                let [endYear, endMonth] = end.split('/')
                let res = []

                while(startYear <= endYear){
                    if(startYear < endYear){
                        if(startMonth <= 12){
                            res.push(`${startYear}/${startMonth++}`)
                        } else {
                            startYear++;
                            startMonth = 1;
                        }                                              
                    } else {
                        if(startMonth <= endMonth){
                            res.push(`${startYear}/${startMonth++}`)
                        } else {
                            startYear++
                        }
                    }                    
                }
                this.axisList = res
            },
            test(){
                let that = this
                this.$http.post('/dsp-report/index').then(res => {
                    console.log(that.instance)
                    console.log(res.data.dataY2)
                    that.instance.setOption({
                        xAxis: {
                            data: this.axisList
                        },
                        series: [{
                            data: res.data.dataY2,
                            type: 'line'
                        }]
                    })
                })
            }
        },
        mounted(){
            let graphInstance = init(this.$refs.graph)
            this.instance = graphInstance
            let option = {
                xAxis: {
                    type: 'category',
                    data: this.axisList,
                    boundaryGap: false
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
            };
            graphInstance.setOption(option)
            window.onresize = () => {
                graphInstance.resize()
            }
        }
    }
</script>

<style scoped>
.el-aside{
    background: #002050
}
.el-row{
    margin-bottom: 20px;
}
.graph{
    width: 100%;
    height: 300px;
}
</style>