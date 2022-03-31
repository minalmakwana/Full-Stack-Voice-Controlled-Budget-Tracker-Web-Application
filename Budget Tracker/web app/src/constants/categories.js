//This class helps in declaring the customised categories and colour for our incomes and expenses
const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];
//Adding colour for the input values in chart 
//Adding categories for different income type
export const incomeCategories = [
  { type: 'Pension', amount: 0, color: incomeColors[0] },
  { type: 'Rent', amount: 0, color: incomeColors[1] },
  { type: 'Interest', amount: 0, color: incomeColors[2] },
  { type: 'Salary', amount: 0, color: incomeColors[3] },
  
];

//Adding categories for different income type

export const expenseCategories = [
  { type: 'Bills', amount: 0, color: expenseColors[0] },
  { type: 'Petrol', amount: 0, color: expenseColors[1] },
  { type: 'Hiking', amount: 0, color: expenseColors[2] },
  { type: 'Bike', amount: 0, color: expenseColors[3] },
  { type: 'Shopping', amount: 0, color: expenseColors[4] },
  { type: 'Dog', amount: 0, color: expenseColors[5] },
  ];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};
