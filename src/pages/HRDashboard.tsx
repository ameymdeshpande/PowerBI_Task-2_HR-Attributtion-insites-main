import { Users, UserMinus, TrendingDown, TrendingUp } from "lucide-react";
import { KPICard } from "@/components/dashboard/KPICard";
import { AttritionChart } from "@/components/dashboard/AttritionChart";
import { DemographicsChart } from "@/components/dashboard/DemographicsChart";
import { AttritionReasonsChart } from "@/components/dashboard/AttritionReasonsChart";
import {
  getAttritionStats,
  getDepartmentAttritionData,
  getAttritionReasons,
  getAgeGroupData,
  getGenderData,
} from "@/data/hrData";

const HRDashboard = () => {
  const attritionStats = getAttritionStats();
  const departmentData = getDepartmentAttritionData();
  const attritionReasons = getAttritionReasons();
  const ageGroupData = getAgeGroupData();
  const genderData = getGenderData();

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">HR Employee Attrition Analysis</h1>
          <p className="text-muted-foreground">
            Comprehensive insights into employee demographics, department performance, and attrition trends
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <KPICard
            title="Total Employees"
            value={attritionStats.totalEmployees}
            icon={Users}
            variant="default"
          />
          <KPICard
            title="Active Employees"
            value={attritionStats.activeEmployees}
            icon={TrendingUp}
            variant="success"
          />
          <KPICard
            title="Employees Left"
            value={attritionStats.attritionCount}
            icon={UserMinus}
            variant="destructive"
          />
          <KPICard
            title="Attrition Rate"
            value={`${attritionStats.attritionRate}%`}
            icon={TrendingDown}
            variant="warning"
          />
        </div>

        {/* Department Attrition Analysis */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Department Analysis</h2>
          <AttritionChart data={departmentData} />
        </div>

        {/* Demographics Analysis */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Employee Demographics</h2>
          <DemographicsChart ageData={ageGroupData} genderData={genderData} />
        </div>

        {/* Attrition Reasons */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Attrition Reasons Analysis</h2>
          <AttritionReasonsChart data={attritionReasons} />
        </div>

        {/* Summary Insights */}
        <div className="bg-card rounded-lg p-6 border">
          <h3 className="text-xl font-semibold text-card-foreground mb-4">Key Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="space-y-2">
              <h4 className="font-medium text-card-foreground">Highest Risk Department</h4>
              <p>
                {departmentData.reduce((prev, current) => 
                  prev.attritionRate > current.attritionRate ? prev : current
                ).department} department has the highest attrition rate
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-card-foreground">Primary Attrition Reason</h4>
              <p>
                {attritionReasons[0]?.reason} is the leading cause of employee departure
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-card-foreground">At-Risk Age Group</h4>
              <p>
                {ageGroupData.reduce((prev, current) => 
                  prev.attritionRate > current.attritionRate ? prev : current
                ).ageGroup} age group shows highest attrition tendency
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;