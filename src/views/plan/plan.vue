<template>
    <div class="plan">
        <el-container>
            <el-main>
                <el-header style="height: 130px;">
                    <el-aside style="width: 100px;">我好想你</el-aside>
                    <el-main>
                        <el-row>
                            <el-col :span="24">满地的呢喃细语</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">怎么会爱上了他</el-col>
                            <el-col :span="4">忽冷忽热的温柔</el-col>
                        </el-row>
                        <el-row>
                            <el-tabs>
                                <el-tab-pane label="广告计划" name="first">广告计划</el-tab-pane>
                                <el-tab-pane label="广告单元" name="second">广告单元</el-tab-pane>
                                <el-tab-pane label="广告创意" name="third">广告创意</el-tab-pane>
                            </el-tabs>
                        </el-row>
                    </el-main>
                </el-header>
                <el-row :gutter="20" style="paddingLeft: 20px">
                    <el-col :span="8">
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                计划名称:
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
                                批量修改
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
                    <el-table-column type="selection" width="30">
                    </el-table-column>
                    <el-table-column width="70">
                        <template slot-scope="scope">
                            <el-switch v-model="scope.row.switch_flag" active-color="#13ce66" inactive-color="#2BD1B7" size="mini">
                            </el-switch>
                        </template>
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
                    <el-table-column prop="exposure" label="曝光量" width="90">
                    </el-table-column>
                    <el-table-column prop="click" label="点击量" width="90">
                    </el-table-column>
                    <el-table-column prop="clicksum" label="点击率" width="90">
                    </el-table-column>
                    <el-table-column prop="state" label="点击率" width="90">
                    </el-table-column>
                </el-table>
                <div class="block">
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                    </el-pagination>
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
            tableData3: [
                {
                    switch_flag: false,
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    budget: 34,
                    expenditure: 20,
                    allmoney: 100,
                    exposure: 2000,
                    click: 1000,
                    clicksum: '50%',
                    state: '投放中'
                },
                {
                    switch_flag: false,
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    budget: 34,
                    expenditure: 20,
                    allmoney: 100,
                    exposure: 2000,
                    click: 1000,
                    clicksum: '50%',
                    state: '投放中'
                },
                {
                    switch_flag: false,
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    budget: 34,
                    expenditure: 20,
                    allmoney: 100,
                    exposure: 2000,
                    click: 1000,
                    clicksum: '50%',
                    state: '投放中'
                },
                {
                    date: '2016-05-01',
                    switch_flag: false,
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    budget: 34,
                    allmoney: 100,
                    exposure: 2000,
                    click: 1000,
                    clicksum: '50%',
                    state: '投放中'
                },
                {
                    date: '2016-05-08',
                    switch_flag: false,
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    budget: 34,
                    exposure: 2000,
                    click: 1000,
                    clicksum: '50%',
                    state: '投放中'
                },
                {
                    date: '2016-05-06',
                    switch_flag: false,
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    budget: 34,
                    exposure: 2000,
                    click: 1000,
                    clicksum: '50%',
                    state: '投放中'
                }, 
                {
                    date: '2016-05-07',
                    switch_flag: false,
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    exposure: 2000,
                    click: 1000,
                    clicksum: '50%',
                    state: '投放中'
                }
            ],
            multipleSelection: [],
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4
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
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleClick(tab, event) {
        console.log(tab, event);
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
    display: flex;
    >.el-main{
        margin-left: 20px;
    }
}

.el-main {
    background: #fff;
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