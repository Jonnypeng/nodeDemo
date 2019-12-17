var express = require("express");

var app = express();
class EemployeeInfo {
  constructor() {
    this.employeNo = "CCY0000001";
    this.cardNo = "522425198909010032";
    this.employeeName = "李晓明";
    this.sex = 0;
    this.mobilePhone = "18886097876";
    this.position = "科学家";
    this.jobLevel = "10A";
    this.department = "研究室";
    this.dateEntry = "2016-02-25";
    this.rehired = 0;
    this.operator = "司徒特";
    this.operatingTime = "2016-10-11 09:23:57";
  }
}

var employees = [];

for (let i = 0; i < 10; i++) {
  let employee = new EemployeeInfo();
  employees.push(employee);
}

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.post("/queryList", (req, res, err) => {
  // setTimeout(()=>{
  // res.json({
  //     "code": "0000",
  //     "description": "oh yeah,通过了",
  //     "result":{
  //         totalPage:20,    //页面合计数量
  //         list:employees   //员工列表
  //     }
  // });
  // },1000)
  res.json({
    "code": "0000",
    "description": "oh yeah,通过了",
    "result":{
      //"totalRow":500,   //总条数，如200、300，包括满足查询条件的所有条数
      "total":27,
      "list":employees,   //员工列表,
      "pageNum":1,
      "pageSize":10,
      "size":10,
      "startRow":1,
      "endRow":10,
      "pages":3,
      "prePage":0,
      "nextPage":2,
      "isFirstPage":true,
      "isLastPage":false,
      "hasPreviousPage":false,
      "hasNextPage":true,
      "navigatePages":8,
      "navigatepageNums":[
        1,
        2,
        3
      ],
      "navigateFirstPage":1,
      "navigateLastPage":3,
      "firstPage":1,
      "lastPage":3
    }
  });
});

app.listen(4006, () => {
  console.log("runing 4006");
});
