import React from 'react';
//Using math for automatic generating text to speak
const isIncome = Math.round(Math.random());
//Info card generates text that is to be spoken. It randomyl generates the given data. If its income then it becomes expense 
//next time when the page loads
const InfoCard = () => {
  return (
    <div elevation={3} style={{ textAlign: 'center', padding: '0 10%' }}>
      Try saying: <br /> 
      Add {isIncome ? 'Income ' : 'Expense '} 
      for {isIncome ? '$100 ' : '$50 '}  
      in Category {isIncome ? 'Salary ' : 'Travel '}
      for {isIncome ? 'Monday ' : 'Thursday '}
    </div>
  );
};

export default InfoCard;
