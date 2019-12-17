
        <el-row>
            <el-col :span="24" class="info__label ">
                基本信息
            </el-col>
        </el-row>
        <table>
    <tr>

        <td>
            <el-form-item v-if="true" label=" 员工姓名 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.employeeName"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 员工电话 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.mobilePhone"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item label="员工性别" class="flex-center">
            <el-radio-group v-model="employeeInfoData.employeeDetailVo.sex">
                
        <el-radio label="男" value="0"></el-radio>
        <el-radio label="女" value="1"></el-radio> 
        
            </el-radio-group>
        </el-form-item>    
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 民族 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.national"></el-input>
            </el-form-item>
            </td>
    </tr>
<tr>

        <td>
            <el-form-item v-if="true" label=" 生日 " class="flex-center">
                <el-date-picker v-model="employeeInfoData.employeeInfoVo.birthday" type="date" placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 邮箱 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.email"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item label=" 婚姻情况" class="flex-center">
            <el-radio-group v-model="employeeInfoData.employeeDetailVo.marriageStatus">
                
        <el-radio label="未婚" value="0"></el-radio>
        <el-radio label="已婚" value="1"></el-radio>
        
            </el-radio-group>
        </el-form-item>    
            </td>
    </tr>
<tr>

        <td>
            <el-form-item v-if="true" label=" 身份证号码 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.cardNo"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 籍贯 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.nativePlace"></el-input>
            </el-form-item>
            </td>
    </tr>
<tr>

        <td>
            <el-form-item v-if="true" label=" 当前居住地 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.currentAddress"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 公司名称 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.companyName"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 合同到期时间 " class="flex-center">
                <el-date-picker v-model="employeeInfoData.employeeDetailVo.contractExpireDate" type="date" placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 合同签订时间 " class="flex-center">
                <el-date-picker v-model="employeeInfoData.employeeDetailVo.contractSignDate" type="date" placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            </td>
    </tr>
<tr>

        <td>
            <el-form-item v-if="true" label=" 创建时间 " class="flex-center">
                <el-date-picker v-model="employeeInfoData.employeeDetailVo.createTime" type="date" placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 创建人 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.createUser"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 当前工资 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.currentSalary"></el-input>
            </el-form-item>
            </td>
    </tr>
<tr>

        <td>
            <el-form-item v-if="true" label=" 部门id" class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.departmentId"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 员工所属部门 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.departmentName"></el-input>
            </el-form-item>
            </td>
    </tr>
<tr>

        <td>
            <el-form-item v-if="true" label=" 最高学历 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.highestEducation"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 员工id " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.id"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 员工职级 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.jobLevel"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 最高学历对应的专业 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.major"></el-input>
            </el-form-item>
            </td>
    </tr>
<tr>

        <td>
            <el-form-item v-if="true" label=" 职位id" class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.positionId"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label="员工职位" class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.positionName"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 员工转正时间" class="flex-center">
                <el-date-picker v-model="employeeInfoData.employeeDetailVo.positiveTime" type="date" placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            </td>
    </tr>
<tr>

        <td>
            <el-form-item label="是否签订合同" class="flex-center">
            <el-radio-group v-model="employeeInfoData.employeeDetailVo.signContract">
                
        <el-radio label="否" value="0"></el-radio>
        <el-radio label="是" value="1"></el-radio> 
        
            </el-radio-group>
        </el-form-item>    
            </td>
    
        <td>
            <el-form-item v-if="true" label="社会保障卡号" class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.socialSecurityCardNo"></el-input>
            </el-form-item>
            </td>
    </tr>

    </table>
    
        <el-row>
            <el-col :span="24" class="info__label ">
                账户信息
            </el-col>
        </el-row>
        <table>
    <tr>

        <td>
            <el-form-item v-if="true" label="账户名" class="flex-center">
                 <el-input v-model="employeeInfoData.employeeAccountVo.accountName"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 账号 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeAccountVo.accountNo"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label="开户行" class="flex-center">
                 <el-input v-model="employeeInfoData.employeeAccountVo.openBank"></el-input>
            </el-form-item>
            </td>
    </tr>

    </table>
    
        <el-row>
            <el-col :span="24" class="info__label ">
                详细信息
            </el-col>
        </el-row>
        <table>
    <tr>

        <td>
            <el-form-item v-if="true" label=" 意外保险费 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeInfoVo.accidentPremium"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 公积金购买情况 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeInfoVo.accumulationFundBuyInfo"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 公积金开始时间 " class="flex-center">
                <el-date-picker v-model="employeeInfoData.employeeInfoVo.accumulationFundDate" type="date" placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 公积金个人金额 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeInfoVo.accumulationFundPersonal"></el-input>
            </el-form-item>
            </td>
    </tr>
<tr>

        <td>
            <el-form-item v-if="true" label=" 公积金停缴月 " class="flex-center">
                <el-date-picker v-model="employeeInfoData.employeeInfoVo.accumulationFundStopMouth" type="date" placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item label="是否助教转岗" class="flex-center">
            <el-radio-group v-model="employeeInfoData.employeeInfoVo.assistantToTeacher">
                
        <el-radio label="否" value="0"></el-radio>
        <el-radio label="是" value="1"></el-radio>  
        
            </el-radio-group>
        </el-form-item>    
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 行政归属 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeInfoVo.belongInfo"></el-input>
            </el-form-item>
            </td>
    </tr>
<tr>

        <td>
            <el-form-item label="职务等级 " class="flex-center">
            <el-radio-group v-model="employeeInfoData.employeeInfoVo.dutyLevel">
                
        <el-radio label="0" value="0"></el-radio>
        <el-radio label="1" value="1"></el-radio>  
        
            </el-radio-group>
        </el-form-item>    
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 紧急联系人 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeInfoVo.emergencyContact"></el-input>
            </el-form-item>
            </td>
    </tr>
<tr>

        <td>
            <el-form-item v-if="true" label=" 员工id " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeInfoVo.employeeId"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 雇主险 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeInfoVo.employerRisk"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 组别 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeInfoVo.groupInfo"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 医保参保时间 " class="flex-center">
                <el-date-picker v-model="employeeInfoData.employeeInfoVo.healthCareTime" type="date" placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            </td>
    </tr>
<tr>

        <td>
            <el-form-item v-if="false" label="主键id" class="flex-center">
                 <el-input v-model="employeeInfoData.employeeInfoVo.id"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 工龄 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeInfoVo.lengthService"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 婚假结束时间 " class="flex-center">
                <el-date-picker v-model="employeeInfoData.employeeInfoVo.marriageLeaveEndTime" type="date" placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            </td>
    </tr>
<tr>

        <td>
            <el-form-item v-if="true" label=" 产假结束时间 " class="flex-center">
                <el-date-picker v-model="employeeInfoData.employeeInfoVo.maternityLeaveEndTime" type="date" placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 产假开始时间 " class="flex-center">
                <el-date-picker v-model="employeeInfoData.employeeInfoVo.maternityLeaveStartTime" type="date" placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            </td>
    </tr>
<tr>

        <td>
            <el-form-item v-if="true" label=" 退培训费时间 " class="flex-center">
                <el-date-picker v-model="employeeInfoData.employeeInfoVo.refundTrainingDate" type="date" placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 退培训费合计 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeInfoVo.refundTrainingTotal"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 备注2 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeInfoVo.remark2"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 自身等级 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeInfoVo.selfLevel"></el-input>
            </el-form-item>
            </td>
    </tr>
<tr>

        <td>
            <el-form-item v-if="true" label=" 合同、五险一金归属 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeInfoVo.socialInsurance"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 合同、五险一金归属细分 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeInfoVo.socialInsuranceDetail"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 专项协议 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeInfoVo.specialAgreement"></el-input>
            </el-form-item>
            </td>
    </tr>
<tr>

        <td>
            <el-form-item label="星级 " class="flex-center">
            <el-radio-group v-model="employeeInfoData.employeeInfoVo.starLevel">
                
        <el-radio label="0" value="0"></el-radio>
        <el-radio label="1" value="1"></el-radio>  
        
            </el-radio-group>
        </el-form-item>    
            </td>
    
        <td>
            <el-form-item label=" 星级类别 " class="flex-center">
            <el-radio-group v-model="employeeInfoData.employeeInfoVo.starType">
                
        <el-radio label="0" value="0"></el-radio>
        <el-radio label="1" value="1"></el-radio>  
        
            </el-radio-group>
        </el-form-item>    
            </td>
    </tr>
<tr>

        <td>
            <el-form-item label="星级 " class="flex-center">
            <el-radio-group v-model="employeeInfoData.employeeInfoVo.starLevel">
                
        <el-radio label="0" value="0"></el-radio>
        <el-radio label="1" value="1"></el-radio>  
        
            </el-radio-group>
        </el-form-item>    
            </td>
    
        <td>
            <el-form-item label=" 星级类别 " class="flex-center">
            <el-radio-group v-model="employeeInfoData.employeeInfoVo.starType">
                
        <el-radio label="0" value="0"></el-radio>
        <el-radio label="1" value="1"></el-radio>  
        
            </el-radio-group>
        </el-form-item>    
            </td>
    </tr>

        <td>
            <el-form-item v-if="true" label=" 教师培训费结束 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeInfoVo.trainingEnd"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 联盟" class="flex-center">
                 <el-input v-model="employeeInfoData.employeeInfoVo.unionInfo"></el-input>
            </el-form-item>
            </td>
    </tr>

    </table>
    