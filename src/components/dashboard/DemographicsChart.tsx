import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface DemographicsChartProps {
  ageData: Array<{
    ageGroup: string;
    totalEmployees: number;
    attritionCount: number;
    attritionRate: number;
  }>;
  genderData: Array<{
    gender: string;
    totalEmployees: number;
    attritionCount: number;
    attritionRate: number;
  }>;
}

const GENDER_COLORS = ['#3B82F6', '#EC4899'];

export function DemographicsChart({ ageData, genderData }: DemographicsChartProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Attrition by Age Group</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ageData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="ageGroup" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
                formatter={(value: any, name: string) => [
                  name === 'attritionRate' ? `${value}%` : value,
                  name === 'attritionRate' ? 'Attrition Rate' : 
                  name === 'totalEmployees' ? 'Total Employees' : 'Attrition Count'
                ]}
              />
              <Bar dataKey="totalEmployees" fill="hsl(var(--muted))" radius={[4, 4, 0, 0]} name="totalEmployees" />
              <Bar dataKey="attritionCount" fill="hsl(var(--destructive))" radius={[4, 4, 0, 0]} name="attritionCount" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Gender Distribution & Attrition</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {genderData.map((item, index) => (
              <div key={item.gender} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: GENDER_COLORS[index] }}
                  />
                  <span className="font-medium">{item.gender}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{item.totalEmployees} total</div>
                  <div className="text-sm text-muted-foreground">
                    {item.attritionCount} left ({item.attritionRate}%)
                  </div>
                </div>
              </div>
            ))}
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="totalEmployees"
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={GENDER_COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}