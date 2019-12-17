class DataType {
    constructor(type, label, vModel, display = true, radio = null) {
        this.type = type;
        this.label = label;
        this.display = display;
        this.vModel = vModel;
        this.radio = radio;
        this.template = "";
        if (this.type === "file") {
            this.template = `
            <el-upload
            class="avatar-uploader"
            <img v-if=${this.display} src="" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            `
        }
        if (this.type === "input") {
            this.template = `
            <el-form-item v-if="${this.display}" label="${this.label}" class="flex-center">
                 <el-input v-model="${this.vModel}"></el-input>
            </el-form-item>
            `
        }
        if (this.type === "date") {
            this.template = `
            <el-form-item v-if="${this.display}" label="${this.label}" class="flex-center">
                <el-date-picker v-model="${this.vModel}" type="date" placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            `
        }
        if (this.type === "radio") {
            this.template = `
            <el-form-item label="${this.label}" class="flex-center">
            <el-radio-group v-model="${this.vModel}">
                ${this.radio}
            </el-radio-group>
        </el-form-item>    
            `
        }
    }

}

var employeeInfoData = {
    employeeDetailVo: {
        employeeName: new DataType("input", " 员工姓名 ", "employeeInfoData.employeeDetailVo.employeeName", true),
        mobilePhone: new DataType("input", " 员工电话 ", "employeeInfoData.employeeDetailVo.mobilePhone", true),
        sex: new DataType("radio", "员工性别", "employeeInfoData.employeeDetailVo.sex", true, `
        <el-radio label="男" value="0"></el-radio>
        <el-radio label="女" value="1"></el-radio> 
        `),
        national: new DataType("input", " 民族 ", "employeeInfoData.employeeDetailVo.national", true),
        birthday: new DataType("date", " 生日 ", "employeeInfoData.employeeInfoVo.birthday", true),
        email: new DataType("input", " 邮箱 ", "employeeInfoData.employeeDetailVo.email", true),
        marriageStatus: new DataType("radio", " 婚姻情况", "employeeInfoData.employeeDetailVo.marriageStatus", true,`
        <el-radio label="未婚" value="0"></el-radio>
        <el-radio label="已婚" value="1"></el-radio>
        `),
        politicalLandscape: new DataType("radio", "政治面貌", "employeeInfoData.employeeDetailVo.politicalLandscape", true,
            `
        <el-radio label="团员" value="团员"></el-radio>
        <el-radio label="党员" value="党员"></el-radio>
        <el-radio label="群众" value="群众 "></el-radio>
        <el-radio label="无党派民主人士" value="无党派民主人士 "></el-radio>
        <el-radio label="其他" value="其他 "></el-radio>
        `),
        cardNo: new DataType("input", " 身份证号码 ", "employeeInfoData.employeeDetailVo.cardNo", true),
        nativePlace: new DataType("input", " 籍贯 ", "employeeInfoData.employeeDetailVo.nativePlace", true),
        residenceAddress: new DataType("input", "户口所在地", "employeeInfoData.employeeDetailVo.residenceAddress", true),
        residenceType: new DataType("radio", "户口类型", "employeeInfoData.employeeDetailVo.residenceType", true, `
        <el-radio label="农村" value="0"></el-radio>
        <el-radio label="城镇" value="1"></el-radio> 
        `),
        currentAddress: new DataType("input", " 当前居住地 ", "employeeInfoData.employeeDetailVo.currentAddress", true),
        companyName: new DataType("input", " 公司名称 ", "employeeInfoData.employeeDetailVo.companyName", true),
        contractExpireDate: new DataType("date", " 合同到期时间 ", "employeeInfoData.employeeDetailVo.contractExpireDate", true),
        contractSignDate: new DataType("date", " 合同签订时间 ", "employeeInfoData.employeeDetailVo.contractSignDate", true),
        createTime: new DataType("date", " 创建时间 ", "employeeInfoData.employeeDetailVo.createTime", true),
        createUser: new DataType("input", " 创建人 ", "employeeInfoData.employeeDetailVo.createUser", true),
        currentSalary: new DataType("input", " 当前工资 ", "employeeInfoData.employeeDetailVo.currentSalary", true),
        dateEntry: new DataType("date", " 员工入职时间 ", "employeeInfoData.employeeDetailVo.dateEntry", true),
        departmentId: new DataType("input", " 部门id", "employeeInfoData.employeeDetailVo.departmentId", true),
        departmentName: new DataType("input", " 员工所属部门 ", "employeeInfoData.employeeDetailVo.departmentName", true),
        employeeNo: new DataType("input", " 员工编号 ", "employeeInfoData.employeeDetailVo.employeeNo", true),
        employeeType: new DataType("radio", " 员工类型", "employeeInfoData.employeeDetailVo.employeeType", true,
            `<el-radio label="实习员工 " value="实习员工 "></el-radio>
        <el-radio label="试用员工 " value="试用员工 "></el-radio>
        <el-radio label="正式员工 " value="正式员工 "></el-radio>
        <el-radio label="离职员工 " value="离职员工"></el-radio>
        `),
        highestEducation: new DataType("input", " 最高学历 ", "employeeInfoData.employeeDetailVo.highestEducation", true),
        id: new DataType("input", " 员工id ", "employeeInfoData.employeeDetailVo.id", true),
        jobLevel: new DataType("input", " 员工职级 ", "employeeInfoData.employeeDetailVo.jobLevel", true),
        major: new DataType("input", " 最高学历对应的专业 ", "employeeInfoData.employeeDetailVo.major", true),
        positionId: new DataType("input", " 职位id", "employeeInfoData.employeeDetailVo.positionId", true),
        positionName: new DataType("input", "员工职位", "employeeInfoData.employeeDetailVo.positionName", true),
        positiveTime: new DataType("date", " 员工转正时间", "employeeInfoData.employeeDetailVo.positiveTime", true),
        rehired: new DataType("radio", "是否返聘", "employeeInfoData.employeeDetailVo.rehired", true,`
        <el-radio label="否" value="0"></el-radio>
        <el-radio label="是" value="1"></el-radio> 
        `),
        signContract: new DataType("radio", "是否签订合同", "employeeInfoData.employeeDetailVo.signContract", true, `
        <el-radio label="否" value="0"></el-radio>
        <el-radio label="是" value="1"></el-radio> 
        `),
        socialSecurityCardNo: new DataType("input", "社会保障卡号", "employeeInfoData.employeeDetailVo.socialSecurityCardNo", true)
        // updateTime: new DataType("input", "更新时间 ", "employeeInfoData.employeeDetailVo.updateTime", false),
        // updateUser: new DataType("input", " 更新人 ", "employeeInfoData.employeeDetailVo.updateUser", false)
        //archivesNo: new DataType("input", "员工档案编号 ", "employeeInfoData.employeeDetailVo.archivesNo", false),
    },
    employeeAccountVo: {
        accountName: new DataType("input", "账户名", "employeeInfoData.employeeAccountVo.accountName", true),
        accountNo: new DataType("input", " 账号 ", "employeeInfoData.employeeAccountVo.accountNo", true),
        openBank: new DataType("input", "开户行", "employeeInfoData.employeeAccountVo.openBank", true),
        // accountImg: new DataType("file", "银行卡照片", "employeeInfoData.employeeAccountVo.accountImg", false),
        // employeeId: new DataType("input", "员工id ", "employeeInfoData.employeeAccountVo.employeeId", false),
        //id: new DataType("input", "员工账户id", "employeeInfoData.employeeAccountVo.id", false),
    },
    employeeInfoVo: {
        accidentPremium: new DataType("input", " 意外保险费 ", "employeeInfoData.employeeInfoVo.accidentPremium", true),
        accumulationFundBuyInfo: new DataType("input", " 公积金购买情况 ", "employeeInfoData.employeeInfoVo.accumulationFundBuyInfo", true),
        accumulationFundDate: new DataType("date", " 公积金开始时间 ", "employeeInfoData.employeeInfoVo.accumulationFundDate", true),
        accumulationFundPersonal: new DataType("input", " 公积金个人金额 ", "employeeInfoData.employeeInfoVo.accumulationFundPersonal", true),
        accumulationFundStopMouth: new DataType("date", " 公积金停缴月 ", "employeeInfoData.employeeInfoVo.accumulationFundStopMouth", true),
        assistantToTeacher: new DataType("radio", "是否助教转岗", "employeeInfoData.employeeInfoVo.assistantToTeacher", true, `
        <el-radio label="否" value="0"></el-radio>
        <el-radio label="是" value="1"></el-radio>  
        `),
        belongInfo: new DataType("input", " 行政归属 ", "employeeInfoData.employeeInfoVo.belongInfo", true),
        duty: new DataType("input", " 职务 ", "employeeInfoData.employeeInfoVo.duty", true),
        dutyLevel: new DataType("radio", "职务等级 ", "employeeInfoData.employeeInfoVo.dutyLevel", true, `
        <el-radio label="0" value="0"></el-radio>
        <el-radio label="1" value="1"></el-radio>  
        `),
        emergencyContact: new DataType("input", " 紧急联系人 ", "employeeInfoData.employeeInfoVo.emergencyContact", true),
        emergencyContactPhone: new DataType("input", " 紧急联系人电话 ", "employeeInfoData.employeeInfoVo.emergencyContactPhone", true),
        emergencyContactRelation: new DataType("input", " 紧急联系人关系 ", "employeeInfoData.employeeInfoVo.emergencyContactRelation", true),
        employeeId: new DataType("input", " 员工id ", "employeeInfoData.employeeInfoVo.employeeId", true),
        employerRisk: new DataType("input", " 雇主险 ", "employeeInfoData.employeeInfoVo.employerRisk", true),
        groupInfo: new DataType("input", " 组别 ", "employeeInfoData.employeeInfoVo.groupInfo", true),
        healthCareTime: new DataType("date", " 医保参保时间 ", "employeeInfoData.employeeInfoVo.healthCareTime", true),
        lengthService: new DataType("input", " 工龄 ", "employeeInfoData.employeeInfoVo.lengthService", true),
        marriageLeaveEndTime: new DataType("date", " 婚假结束时间 ", "employeeInfoData.employeeInfoVo.marriageLeaveEndTime", true),
        marriageLeaveStartTime: new DataType("date", "婚假开始时间", "employeeInfoData.employeeInfoVo.marriageLeaveStartTime", true),
        maternityLeaveEndTime: new DataType("date", " 产假结束时间 ", "employeeInfoData.employeeInfoVo.maternityLeaveEndTime", true),
        maternityLeaveStartTime: new DataType("date", " 产假开始时间 ", "employeeInfoData.employeeInfoVo.maternityLeaveStartTime", true),
        maternityLeaveTwoEndTime: new DataType("date", " 二胎产假结束时间 ", "employeeInfoData.employeeInfoVo.maternityLeaveTwoEndTime", true),
        maternityLeaveTwoStartTime: new DataType("date", " 二胎产假开始时间 ", "employeeInfoData.employeeInfoVo.maternityLeaveTwoStartTime", true),
        refundTrainingDate: new DataType("date", " 退培训费时间 ", "employeeInfoData.employeeInfoVo.refundTrainingDate", true),
        refundTrainingTotal: new DataType("input", " 退培训费合计 ", "employeeInfoData.employeeInfoVo.refundTrainingTotal", true),
        remark2: new DataType("input", " 备注2 ", "employeeInfoData.employeeInfoVo.remark2", true),
        selfLevel: new DataType("input", " 自身等级 ", "employeeInfoData.employeeInfoVo.selfLevel", true),
        socialInsurance: new DataType("input", " 合同、五险一金归属 ", "employeeInfoData.employeeInfoVo.socialInsurance", true),
        socialInsuranceDetail: new DataType("input", " 合同、五险一金归属细分 ", "employeeInfoData.employeeInfoVo.socialInsuranceDetail", true),
        specialAgreement: new DataType("input", " 专项协议 ", "employeeInfoData.employeeInfoVo.specialAgreement", true),
        specialSkills: new DataType("input", " 特殊技能 ", "employeeInfoData.employeeInfoVo.specialSkills", true),
        starLevel: new DataType("radio", "星级 ", "employeeInfoData.employeeInfoVo.starLevel", true, `
        <el-radio label="0" value="0"></el-radio>
        <el-radio label="1" value="1"></el-radio>  
        `),
        starType: new DataType("radio", " 星级类别 ", "employeeInfoData.employeeInfoVo.starType", true, `
        <el-radio label="0" value="0"></el-radio>
        <el-radio label="1" value="1"></el-radio>  
        `),
        trainingEnd: new DataType("input", " 教师培训费结束 ", "employeeInfoData.employeeInfoVo.trainingEnd", true),
        unionInfo: new DataType("input", " 联盟", "employeeInfoData.employeeInfoVo.unionInfo", true)
        //id: new DataType("input", "主键id", "employeeInfoData.employeeInfoVo.id", false),
    }
} 

module.exports = employeeInfoData;
