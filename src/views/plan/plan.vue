<template>
    <div class="plan">
        <el-container>
            <el-header style="height: 120px;">北冥有鱼，其名为鲲</el-header>
            <el-main>
                <el-row :gutter="20" style="paddingLeft: 20px">
                    <el-col :span="8">
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                下拉菜单
                                <i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>黄金糕</el-dropdown-item>
                                <el-dropdown-item>狮子头</el-dropdown-item>
                                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <input type="text" placeholder="请输入关键词查询">
                    </el-col>
                    <el-col :span="6">
                        推广目的:
                        <el-dropdown :hide-on-click="false">
                            <span class="el-dropdown-link">
                                下拉菜单
                                <i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>黄金糕</el-dropdown-item>
                                <el-dropdown-item>狮子头</el-dropdown-item>
                                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                    <el-col :span="5">
                        状态:
                        <el-dropdown :hide-on-click="false">
                            <span class="el-dropdown-link">
                                下拉菜单
                                <i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>黄金糕</el-dropdown-item>
                                <el-dropdown-item>狮子头</el-dropdown-item>
                                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                    <el-col :span="5">
                        <el-button type="info">查询</el-button>
                    </el-col>
                </el-row>
                <el-row style="paddingLeft: 20px">
                    <el-col :span="6">
                        <el-button type="primary">+新建计划</el-button>
                    </el-col>
                    <el-col :span="6">
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                下拉菜单
                                <i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>黄金糕</el-dropdown-item>
                                <el-dropdown-item>狮子头</el-dropdown-item>
                                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                    <el-col :span="6">
                        <el-date-picker v-model="value2" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
                        </el-date-picker>
                    </el-col>
                    <el-col :span="6">
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                下拉菜单
                                <i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>黄金糕</el-dropdown-item>
                                <el-dropdown-item>狮子头</el-dropdown-item>
                                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                </el-row>
                <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column label="日期" width="100">
                        <template slot-scope="scope">{{ scope.row.date }}</template>
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="100">
                    </el-table-column>
                    <el-table-column prop="address" label="地址" width="240">
                    </el-table-column>
                    <el-table-column prop="budget" label="日预算(元)" width="90">
                    </el-table-column>
                    <el-table-column prop="expenditure" label="日消耗(元)" width="90">
                    </el-table-column>
                    <el-table-column prop="allmoney" label="总消耗(元)" width="90">
                    </el-table-column>
                </el-table>
                <div style="margin-top: 20px">
                    <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
                    <el-button @click="toggleSelection()">取消选择</el-button>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'plan',
    data() {
        return {
            pickerOptions1: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                        picker.$emit('pick', new Date());
                    }
                }, {
                    text: '昨天',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                    }
                }, {
                    text: '一周前',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                    }
                }]
            },
            value2: '',
            tableData3: [{
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                budget: 34,
                expenditure: 20,
                allmoney: 100
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                budget: 34,
                expenditure: 20,
                allmoney: 100
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                budget: 34,
                expenditure: 20,
                allmoney: 100
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                budget: 34,
                allmoney: 100
            }, {
                date: '2016-05-08',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                budget: 34
            }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                budget: 34
            }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }],
            multipleSelection: []
        };
    },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
}
</script>

<style scoped lang="less">
.plan {
    width: 100%;
    height: 100%;
}

.el-container {
    width: 100%;
    height: 100%;
}

.el-header {
    background: #ccc;
}

.el-main {
    background: #eee;
}

.el-row {
    position: relative;
    margin-top: 10px;
    >.el-button {
        width: 105px;
        height: 36px;
        padding-top: 10px;
        text-align: center;
        background: #2873FF;
        margin-right: 15px;
    }
    >.el-dropdown {
        position: absolute;
        top: 0;
        border: 1px solid #ccc;
        display: inline-block;
        width: 150px;
        height: 36px;
        line-height: 36px;
        text-align: center;
    }
}

.el-col {
    height: 30px;
    line-height: 30px;
    text-align: center;
    display: flex;
    input {
        border: 1px solid #eee;
        ;
    }
    .el-button {
        height: 30px;
        width: 120px;
    }
}

.el-dropdown-link {
    flex: 1;
}
.el-table{
    margin-top: 15px;
}
</style>