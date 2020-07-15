import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/BudgetControl';

function App() {

  // State define
  const [ budget, saveBudget ] = useState(0);
  const [ remaining, saveRemaining ] = useState(0);
  const [ showQuestion, updateQuestion ] = useState(true);
  const [ spendings, saveSpendings] = useState([]);
  const [ spending, saveSpending] = useState({});
  const [ createSpending, saveCreateSpending] = useState(false);

  // UseEffect for update remaining
  useEffect(() =>{
    if(createSpending) {

      // Add new budget
      saveSpendings([
        ...spendings,
        spending
      ]);

      // sustraction spending to budget and return the remaining
      const budgetRemaining = remaining - spending.quantity;
      saveRemaining(budgetRemaining);

      // Reset create spending to false
      saveCreateSpending(false);
    }
  }, [spending, spendings, createSpending, remaining])

    return (
       <div className="container">
         <header>
           <h1>Gasto Semanal</h1>
           <div className="contenido-principal contenido">
             { showQuestion 
             ? (<Question saveBudget={saveBudget}
                         saveRemaining={saveRemaining}
                         updateQuestion={updateQuestion}
                />
             )
             : ( <div className="row">
                    <div className="one-half column">
                        <Form 
                          saveSpending={saveSpending}
                          saveCreateSpending={saveCreateSpending}
                        />
                    </div>
                    <div className="one-half column">
                        <List
                          spendings={spendings}
                        />
                        <BudgetControl 
                          budget={budget}
                          remaining={remaining}
                        />
                    </div>
                </div>
             )
            }
           </div>
         </header>
       </div>
    );
}

export default App;