/* Library Imports */
//React
import React, { SetStateAction } from "react";

/* Stylesheet Imports */
import "../styles/Form.scss";

/* Image Imports */

/* Component Imports */

/* Component Interfaces */
interface Props {
  count: number;
  fullArr: any[];
  pushFullArr: React.Dispatch<SetStateAction<any[]>>;
  setIsInput: React.Dispatch<SetStateAction<boolean>>;
  setCount: React.Dispatch<SetStateAction<number>>;
}

/* Component/Functions */
const Form: React.FC<Props> = ({
  count,
  fullArr,
  pushFullArr,
  setCount,
  setIsInput,
}) => {
  //Form Data Handler
  const dataHandler = (e: any) => {
    e.preventDefault();
    const data = [...fullArr];
    const newItemTitle = e.target.form[0].value;
    const newItemAmount = e.target.form[1].value;
    let newItemType;
    if (!e.target.form[2].checked && !e.target.form[3].checked) {
      window.alert("Please pick an item type!");
    } else {
      if (e.target.form[2].checked) {
        newItemType = "Income";
      } else {
        newItemType = "Expense";
      }
    }

    let Transaction = (
      Name: string,
      Amount: number,
      Type: string | undefined
    ) => {
      return {
        Name: Name,
        Amount: Amount,
        Type: Type,
        ID: count,
        MFD: false,
      };
    };

    const newTrans = Transaction(newItemTitle, newItemAmount, newItemType);

    data.push(newTrans);
    pushFullArr(data);
    setCount(count + 1);
  };

  //Function return statement
  return (
    <div className="Form bigBox">
      <form action="" className="incExpForm">
        <div className="inputGroup">
          <label htmlFor="" className="inputLabel">
            Income/Expense Name
          </label>
          <input type="text" className="formInput" />
        </div>
        <div className="inputGroup">
          <label htmlFor="" className="inputLabel">
            Income/Expense Amount
          </label>
          <input type="number" className="formInput" min={0} />
        </div>
        <div className="inputGroup">
          <label htmlFor="incexp" className="inputLabel">
            Select Item Type
          </label>
          <div className="row">
            <label htmlFor="">Income</label>
            <input type="radio" name="incexp" id="income" />
          </div>
          <div className="row">
            <label htmlFor="">Expense</label>
            <input type="radio" name="incexp" id="income" />
          </div>
        </div>
        <div className="row">
          <button className="submit" type="submit" onClick={dataHandler}>
            SUBMIT
          </button>
          <button className="cancel" onClick={() => setIsInput(false)}>
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};

/* Export Statement */
export default Form;
