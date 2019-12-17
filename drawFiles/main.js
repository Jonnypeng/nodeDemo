var path = require("path");
var fs = require("fs");
var employeeInfoData = require("./input/model");
/**
 * 基础信息
 */
var employeeDetailVo = '';
let tr="";
let index = 0;
for(let i in employeeInfoData.employeeDetailVo){
    let td = `
        <td>${employeeInfoData.employeeDetailVo[i].template}</td>
    `
    if(index%4===0){
        tr="<tr>\n";
        tr+=td;
    }else if(index%3===0){
        tr+=td;
        tr+="</tr>\n";
        employeeDetailVo+=tr; 
    }else{
        tr+=td; 
    }
    index+=1;
}

fs.writeFile(path.join(__dirname,"./output/employeeInfoData.vue"),employeeDetailVo,(err)=>{
    if(err){
    console.log(err);
    }else{
        console.log("ok");
    }
});
