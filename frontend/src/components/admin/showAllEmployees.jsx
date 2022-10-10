import React from "react";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import "./allEmployees.scss";
import "./index.scss";
import DeleteButton from "./deleteEmployee";

function ShowAllData(props) {
  var data = props.props;

  var [deleteShow, setDeleteShow] = React.useState(false);
  var [idSelected, setIdSelected] = React.useState("");

  // const [employees, setEmployees] = useState(data);
  var toPass = {
    idSelected,
    setDeleteShow,
  };

  return (
    <div className="allEmployees">
      <table className="content-table">
        <thead className="s1">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Department</th>
            <th>Joining Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr className="b2" key={employee._id}>
              <td>
                <button
                  className="BtnName b2"
                  onClick={(e) => {
                    e.preventDefault();
                    props.setEmployeeDateShown(true);
                    props.setEmployeeIdSelected(employee.email);
                    // data = props.props;
                  }}
                ><u>{employee.name}</u>
                </button>
              </td>

              <td>{employee.email}</td>
              <td>{employee.contact}</td>
              <td>{employee.department}</td>
              <td>{employee.joining.slice(0, 10)}</td>
              <td>
                <button>
                  <MdEdit size={25} color="#0361FF" />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIdSelected(employee.email);
                    setDeleteShow(true);
                  }}
                >
                  {" "}
                  <MdDelete size={25} color="#F21B3F" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {deleteShow && <DeleteButton props={toPass} />}
    </div>
  );
}

export default ShowAllData;
