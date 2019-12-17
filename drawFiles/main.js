var path = require("path");
var fs = require("fs");
var employeeInfoData = require("./input/model");

var employeeData = '';

var makeData = function (obj, name, length) {
    console.log(length-1,(length-1)%3);
    var _data = `
        <el-row>
            <el-col :span="24" class="info__label ">
                ${name}
            </el-col>
        </el-row>
        <table>
    `;
    let tr = "";
    let index = 0;
    for (let i in obj) {
        let td = `
        <td>${obj[i].template}</td>
    `
        if (index % 4 === 0) {
            tr = "<tr>\n";
            tr += td;
        } else if (index === length - 1 || index % 3 === 0 ) {
            tr += td;
            tr += "</tr>\n";
            _data += tr;
        } else {
            tr += td;
        }
        index += 1;
    }
    _data += `
    </table>
    `;
    return _data;
}


employeeData =
    makeData(employeeInfoData.employeeDetailVo, "基本信息", Object.keys(employeeInfoData.employeeDetailVo).length)
    + makeData(employeeInfoData.employeeAccountVo, "账户信息", Object.keys(employeeInfoData.employeeAccountVo).length)
    + makeData(employeeInfoData.employeeInfoVo, "详细信息", Object.keys(employeeInfoData.employeeInfoVo).length);

fs.writeFile(path.join(__dirname, "./output/employeeInfoData.vue"), employeeData, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("ok");
    }
});
