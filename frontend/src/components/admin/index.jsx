import React from "react";
import "./index.scss";
import AddEmployee from "./addEmployee";
import ShowAllData from "./showAllEmployees";
import { useSelector } from "react-redux";
import Details from "./employeeDetails";
import axios from "axios";


function AdminDashBoard(){
  
  React.useEffect(() => {
    getAllEmployees();
  }, [])
  var [dataSet, setDataSet] = React.useState(false);
  var[allData, setAllData] = React.useState([]);
  var [isAddEmployeeShow, setIsEmployee] = React.useState(false);
  var [isEmployeeDataShown, setEmployeeDateShown] = React.useState(false);
  var [EmployeeIdSelected, setEmployeeIdSelected] = React.useState("");
  function handleAddEmployee(){
    setIsEmployee(!isAddEmployeeShow);
  }

  const getAllEmployees = async () => {
    var response = await axios.get("/getEmployees");
    setAllData(response.data);
    setDataSet(true);
  } 


    const isAdmin = useSelector((state) => state.isAdmin);
    if(isAdmin === false){
        return (
            <div>
                Please Login with Admin id
            </div>
        )
    }
    return (
      <div className="admin">
        <div className="top-part">
          <h3>All Employees</h3>
          <button onClick={handleAddEmployee} className="button">
            + Add Employee
          </button>
        </div>
        {dataSet && (
          <ShowAllData
            setEmployeeIdSelected={setEmployeeIdSelected}
            setEmployeeDateShown={setEmployeeDateShown}
            props={allData}
          />
        )}
        {isAddEmployeeShow && (
          <AddEmployee 
          setAllData = {setAllData}
          allData = {allData}
          refreshData = {getAllEmployees}
          setIsAddEmployeeShown={setIsEmployee} />
        )}
        {isEmployeeDataShown && (
          <Details
            email={EmployeeIdSelected}
            setEmployeeDateShown={setEmployeeDateShown}
          />
        )}
      </div>
    );
};

export default AdminDashBoard;

