// Mock HR Employee Attrition Data
export interface Employee {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female';
  department: string;
  jobRole: string;
  yearsAtCompany: number;
  monthlyIncome: number;
  educationLevel: string;
  maritalStatus: string;
  distanceFromHome: number;
  attrition: boolean;
  attritionReason?: string;
  performanceRating: number;
  workLifeBalance: number;
}

export const employees: Employee[] = [
  // Sample data - in a real app, this would come from an API
  { id: '1', name: 'John Smith', age: 32, gender: 'Male', department: 'Sales', jobRole: 'Sales Executive', yearsAtCompany: 3, monthlyIncome: 5000, educationLevel: 'Bachelor', maritalStatus: 'Married', distanceFromHome: 10, attrition: true, attritionReason: 'Better Opportunity', performanceRating: 3, workLifeBalance: 2 },
  { id: '2', name: 'Sarah Johnson', age: 28, gender: 'Female', department: 'Technology', jobRole: 'Software Engineer', yearsAtCompany: 2, monthlyIncome: 7000, educationLevel: 'Master', maritalStatus: 'Single', distanceFromHome: 5, attrition: false, performanceRating: 4, workLifeBalance: 3 },
  { id: '3', name: 'Mike Wilson', age: 45, gender: 'Male', department: 'HR', jobRole: 'HR Manager', yearsAtCompany: 8, monthlyIncome: 8500, educationLevel: 'Master', maritalStatus: 'Married', distanceFromHome: 15, attrition: false, performanceRating: 4, workLifeBalance: 4 },
  { id: '4', name: 'Emily Davis', age: 26, gender: 'Female', department: 'Sales', jobRole: 'Sales Representative', yearsAtCompany: 1, monthlyIncome: 3500, educationLevel: 'Bachelor', maritalStatus: 'Single', distanceFromHome: 25, attrition: true, attritionReason: 'Work-Life Balance', performanceRating: 3, workLifeBalance: 1 },
  { id: '5', name: 'Robert Brown', age: 38, gender: 'Male', department: 'Technology', jobRole: 'Senior Developer', yearsAtCompany: 5, monthlyIncome: 9000, educationLevel: 'Master', maritalStatus: 'Married', distanceFromHome: 8, attrition: false, performanceRating: 5, workLifeBalance: 3 },
  { id: '6', name: 'Lisa Chen', age: 35, gender: 'Female', department: 'Marketing', jobRole: 'Marketing Manager', yearsAtCompany: 4, monthlyIncome: 6500, educationLevel: 'Master', maritalStatus: 'Married', distanceFromHome: 12, attrition: true, attritionReason: 'Career Growth', performanceRating: 4, workLifeBalance: 2 },
  { id: '7', name: 'David Martinez', age: 29, gender: 'Male', department: 'Finance', jobRole: 'Financial Analyst', yearsAtCompany: 2, monthlyIncome: 5500, educationLevel: 'Bachelor', maritalStatus: 'Single', distanceFromHome: 7, attrition: false, performanceRating: 3, workLifeBalance: 3 },
  { id: '8', name: 'Jennifer Taylor', age: 31, gender: 'Female', department: 'HR', jobRole: 'HR Specialist', yearsAtCompany: 3, monthlyIncome: 4800, educationLevel: 'Bachelor', maritalStatus: 'Married', distanceFromHome: 20, attrition: true, attritionReason: 'Relocation', performanceRating: 3, workLifeBalance: 3 },
  { id: '9', name: 'Chris Anderson', age: 42, gender: 'Male', department: 'Technology', jobRole: 'Tech Lead', yearsAtCompany: 7, monthlyIncome: 10500, educationLevel: 'Master', maritalStatus: 'Married', distanceFromHome: 6, attrition: false, performanceRating: 5, workLifeBalance: 4 },
  { id: '10', name: 'Amanda White', age: 27, gender: 'Female', department: 'Marketing', jobRole: 'Content Specialist', yearsAtCompany: 1, monthlyIncome: 4200, educationLevel: 'Bachelor', maritalStatus: 'Single', distanceFromHome: 18, attrition: true, attritionReason: 'Salary Issues', performanceRating: 2, workLifeBalance: 2 },
  // Add more employees for better visualization...
  { id: '11', name: 'Kevin Lee', age: 33, gender: 'Male', department: 'Finance', jobRole: 'Senior Analyst', yearsAtCompany: 4, monthlyIncome: 7200, educationLevel: 'Master', maritalStatus: 'Married', distanceFromHome: 9, attrition: false, performanceRating: 4, workLifeBalance: 3 },
  { id: '12', name: 'Rachel Green', age: 30, gender: 'Female', department: 'Sales', jobRole: 'Account Manager', yearsAtCompany: 3, monthlyIncome: 6000, educationLevel: 'Bachelor', maritalStatus: 'Single', distanceFromHome: 14, attrition: false, performanceRating: 4, workLifeBalance: 3 },
  { id: '13', name: 'Tom Harris', age: 39, gender: 'Male', department: 'Technology', jobRole: 'DevOps Engineer', yearsAtCompany: 6, monthlyIncome: 8800, educationLevel: 'Bachelor', maritalStatus: 'Married', distanceFromHome: 11, attrition: true, attritionReason: 'Better Opportunity', performanceRating: 4, workLifeBalance: 2 },
  { id: '14', name: 'Nicole Thompson', age: 25, gender: 'Female', department: 'HR', jobRole: 'Recruiter', yearsAtCompany: 1, monthlyIncome: 3800, educationLevel: 'Bachelor', maritalStatus: 'Single', distanceFromHome: 22, attrition: true, attritionReason: 'Work-Life Balance', performanceRating: 2, workLifeBalance: 1 },
  { id: '15', name: 'Steven Clark', age: 36, gender: 'Male', department: 'Marketing', jobRole: 'Digital Marketing Lead', yearsAtCompany: 5, monthlyIncome: 7800, educationLevel: 'Master', maritalStatus: 'Married', distanceFromHome: 13, attrition: false, performanceRating: 5, workLifeBalance: 4 },
];

export const getAttritionStats = () => {
  const totalEmployees = employees.length;
  const attritionCount = employees.filter(emp => emp.attrition).length;
  const attritionRate = (attritionCount / totalEmployees) * 100;
  
  return {
    totalEmployees,
    attritionCount,
    attritionRate: Math.round(attritionRate * 100) / 100,
    activeEmployees: totalEmployees - attritionCount
  };
};

export const getDepartmentAttritionData = () => {
  const departments = [...new Set(employees.map(emp => emp.department))];
  
  return departments.map(dept => {
    const deptEmployees = employees.filter(emp => emp.department === dept);
    const deptAttrition = deptEmployees.filter(emp => emp.attrition);
    
    return {
      department: dept,
      totalEmployees: deptEmployees.length,
      attritionCount: deptAttrition.length,
      attritionRate: Math.round((deptAttrition.length / deptEmployees.length) * 10000) / 100
    };
  });
};

export const getAttritionReasons = () => {
  const attritionEmployees = employees.filter(emp => emp.attrition && emp.attritionReason);
  const reasonCounts = attritionEmployees.reduce((acc, emp) => {
    const reason = emp.attritionReason!;
    acc[reason] = (acc[reason] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  return Object.entries(reasonCounts).map(([reason, count]) => ({
    reason,
    count,
    percentage: Math.round((count / attritionEmployees.length) * 10000) / 100
  }));
};

export const getAgeGroupData = () => {
  const ageGroups = {
    '20-29': { total: 0, attrition: 0 },
    '30-39': { total: 0, attrition: 0 },
    '40-49': { total: 0, attrition: 0 },
    '50+': { total: 0, attrition: 0 }
  };
  
  employees.forEach(emp => {
    let group: keyof typeof ageGroups;
    if (emp.age < 30) group = '20-29';
    else if (emp.age < 40) group = '30-39';
    else if (emp.age < 50) group = '40-49';
    else group = '50+';
    
    ageGroups[group].total++;
    if (emp.attrition) ageGroups[group].attrition++;
  });
  
  return Object.entries(ageGroups).map(([ageGroup, data]) => ({
    ageGroup,
    totalEmployees: data.total,
    attritionCount: data.attrition,
    attritionRate: data.total > 0 ? Math.round((data.attrition / data.total) * 10000) / 100 : 0
  }));
};

export const getGenderData = () => {
  const genderStats = {
    Male: { total: 0, attrition: 0 },
    Female: { total: 0, attrition: 0 }
  };
  
  employees.forEach(emp => {
    genderStats[emp.gender].total++;
    if (emp.attrition) genderStats[emp.gender].attrition++;
  });
  
  return Object.entries(genderStats).map(([gender, data]) => ({
    gender,
    totalEmployees: data.total,
    attritionCount: data.attrition,
    attritionRate: data.total > 0 ? Math.round((data.attrition / data.total) * 10000) / 100 : 0
  }));
};