<tr>
        <td>
            <el-form-item v-if="false" label="员工档案编号 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.archivesNo"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 身份证号码 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.cardNo"></el-input>
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
    </tr>
<tr>

        <td>
            <el-form-item v-if="true" label=" 合同签订时间 " class="flex-center">
                <el-date-picker v-model="employeeInfoData.employeeDetailVo.contractSignDate" type="date" placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            </td>
    
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
    </tr>
<tr>

        <td>
            <el-form-item v-if="true" label=" 当前工资 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.currentSalary"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 员工入职时间 " class="flex-center">
                <el-date-picker v-model="employeeInfoData.employeeDetailVo.dateEntry" type="date" placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            </td>
    </tr>
<tr>

        <td>
            <el-form-item v-if="true" label=" 邮箱 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.email"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 员工姓名 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.employeeName"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 员工编号 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.employeeNo"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item label=" 员工类型" class="flex-center">
            <el-radio-group v-model="employeeInfoData.employeeDetailVo.employeeType">
                <el-radio label="实习员工 " value="实习员工 "></el-radio>
        <el-radio label="试用员工 " value="试用员工 "></el-radio>
        <el-radio label="正式员工 " value="正式员工 "></el-radio>
        <el-radio label="离职员工 " value=""离职员工 ></el-radio>
        
            </el-radio-group>
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
    </tr>
<tr>

        <td>
            <el-form-item v-if="true" label=" 婚姻情况 0未婚 1已婚 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.marriageStatus"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item v-if="true" label=" 员工电话 " class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.mobilePhone"></el-input>
            </el-form-item>
            </td>
    </tr>
<tr>

        <td>
            <el-form-item label="政治面貌" class="flex-center">
            <el-radio-group v-model="employeeInfoData.employeeDetailVo.politicalLandscape">
                
        <el-radio label="团员" value="团员"></el-radio>
        <el-radio label="党员" value="党员"></el-radio>
        <el-radio label="群众" value="群众 "></el-radio>
        <el-radio label="无党派民主人士" value="无党派民主人士 "></el-radio>
        <el-radio label="其他" value="其他 "></el-radio>
        
            </el-radio-group>
        </el-form-item>    
            </td>
    
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
            <el-form-item label="是否返聘" class="flex-center">
            <el-radio-group v-model="employeeInfoData.employeeDetailVo.rehired">
                
        <el-radio label="否" value="0"></el-radio>
        <el-radio label="是" value="1"></el-radio> 
        
            </el-radio-group>
        </el-form-item>    
            </td>
    
        <td>
            <el-form-item v-if="true" label="户口所在地" class="flex-center">
                 <el-input v-model="employeeInfoData.employeeDetailVo.residenceAddress"></el-input>
            </el-form-item>
            </td>
    
        <td>
            <el-form-item label="户口类型" class="flex-center">
            <el-radio-group v-model="employeeInfoData.employeeDetailVo.residenceType">
                
        <el-radio label="农村" value="0"></el-radio>
        <el-radio label="城镇" value="1"></el-radio> 
        
            </el-radio-group>
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
