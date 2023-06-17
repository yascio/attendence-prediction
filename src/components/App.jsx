import "../styles.css";
import { useState } from "react";

function App() {
  const [currentAtt, setAtt] = useState();
  const [totalClass, setTotal] = useState();

  const [noOfClass, setClass] = useState();
  const [noOfClassAtten, setNoOfClass] = useState();

  const [noOfBunk, setBunk] = useState();
  const [noOfBunkClass, setBunkClass] = useState();

  function totalClasses(event) {
    setAtt(event.target.value);
  }

  function attendedClass(event) {
    setClass(event.target.value);
  }

  function bunkClass(event) {
    setBunk(event.target.value);
  }
  function submitted() {
    setTotal(currentAtt);
    setNoOfClass(noOfClass);
    setBunkClass(noOfBunk);
  }

  const currentPercentage = (
    (parseInt(noOfClassAtten) / parseInt(totalClass)) *
    100
  ).toFixed(2);
  const newTotalClass = parseInt(totalClass) + parseInt(noOfBunkClass);
  console.log(newTotalClass);
  let newAttendence = ((noOfClassAtten / newTotalClass) * 100).toFixed(2);

  return (
    <div className="App">
      <h1>Attendence Predictor</h1>
      <p>enter your total Number of Classes:</p>

      <input
        onChange={totalClasses}
        type="number"
        placeholder="enter your total Number of Classes"
      />
      <p>enter the number of classes you have attended</p>
      <input
        onChange={attendedClass}
        type="number"
        placeholder="enter the number of classes you have attended"
      />
      <p>enter the number of classes you want to bunk</p>
      <input
        onChange={bunkClass}
        type="number"
        placeholder="enter the number of classes you want to bunk"
      />
      <button onClick={submitted}>SUBMIT</button>
      <h1>Current Percentage: {currentPercentage}%</h1>
      <h2>After Bunking Classes, Your Attendence: {newAttendence}%</h2>
    </div>
  );
}
export default App;
