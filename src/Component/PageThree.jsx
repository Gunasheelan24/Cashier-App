import React, { useState } from 'react';

const PageThree = () => {
  // I Am Gone Create A Bank Cashier Application
  const [currentAmount, setCurrentAmount] = useState(5000);
  const [isToggle, setIsToogle] = useState(null);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [depositeAmount, setDepositeAmount] = useState(0);

  const cashierFunctionality = (amount, modeOfTransaction) => {
    if(modeOfTransaction == "withdraw") {
      // Cashier Can Widthdraw Amount For Customer 
      if(amount <= 0 || !amount)  return alert('Please Enter The Amount');
      if(amount > currentAmount) return alert('InSufficient Balance'); 
      setCurrentAmount((prevAmount) => {
        return prevAmount - amount;
      });
    } else if(modeOfTransaction == "deposite") {
      // Cashier Can Deposite Amount Behalf For Customer  
      if(amount <= 0 || !amount)  return alert('Please Enter The Amount');
      setCurrentAmount((prevAmount) => {
        const limit = 10000;
        const AddedAmount = Number(prevAmount) + Number(amount);
        if(AddedAmount > limit) {
            alert('You Crossed You Limit');
            return prevAmount;
        };
        return Number(prevAmount)+Number(amount);
      })
    } else {
      // Cashier Can Reset The Amount 
      setCurrentAmount(5000);
    }      
  };

  return (
    <>
      <main className='d-flex justify-content-center align-items-center' style={{ height: "100vh", widows: "100vh" }} >
       <section className='h-75 w-75 card shadow-lg'>
        <h5 className='text-center mt-3'>Cashier Dashboad</h5>
        <main className='d-flex h-100 w-100 justify-content-center'>
        <div className='bg-warning w-50 h-50 mt-5'>
          <p className='mt-4 text-center'>Total Amount: {currentAmount}</p>
          <div className='d-flex justify-content-center gap-3'>
            <button className='btn btn-dark' onClick={() => setIsToogle('withdraw')} >WithDraw</button>
            <button className='btn btn-danger' onClick={() => setIsToogle('deposite')} >Deposite</button>
            <button className='btn btn-success' onClick={() => cashierFunctionality(0, 'reset')} >Reset</button>
          </div>
          {isToggle == 'withdraw' ? 
          <>
           <div className='justify-content-center d-flex mt-3'>
           <input type="number" placeholder='Enter Amount To Widthdraw' className='form-control w-75' onChange={(event) => setWithdrawAmount(event.target.value)} />
           </div>          
           <div className='ms-5'>
           <button className='btn btn-primary ms-4 mt-2' onClick={() => cashierFunctionality(withdrawAmount, 'withdraw')} >Submit</button>
           </div>
          </>
           : 
           null
          }
          {
            isToggle == 'deposite' ?
            <>
            <div className='justify-content-center d-flex mt-3'>
             <input type="number" placeholder='Enter Amount To Deposite' className='form-control w-75' onChange={(event) => setDepositeAmount(event.target.value)} />
            </div>
               <div className='ms-5'>
               <button className='btn btn-secondary text-black ms-4 mt-2' onClick={() => cashierFunctionality(depositeAmount, "deposite")} >Submit</button>
            </div>
            </>
            : 
            null
          }
        </div>
        </main>
       </section>
      </main>
    </>
  )
}

export default PageThree;
