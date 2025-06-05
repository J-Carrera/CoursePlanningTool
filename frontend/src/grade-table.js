import React from "react";
import ReactDOM from "react-dom/client";

function GradeTable() {
  const gradeLetter = [
    "A",
    "A-",
    "B+",
    "B",
    "B-",
    "C+",
    "C",
    "C-",
    "D+",
    "D",
    "F",
  ];
  const gradeValue = [
    "94-100%",
    "90-93%",
    "86-89%",
    "82-85%",
    "79-81%",
    "75-78%",
    "71-74%",
    "67-70%",
    "62-66%",
    "55-61%",
    "> 55%",
  ];

  return (
    <div>
      <style>
        {`
            h1, table {
            font-family: sans-serif; 
        }

            table {
            border-collapse: collapse;
        }

            th, td {
            border: none;
            padding: 5px;
            text-align: left;
            border-bottom: 1px solid black;
        }

            th {
            color: rgb(28, 82, 181);
            padding-right: 75px;
        }

            th:first-child, td:first-child {
            border-right: 1px solid black;
        }
      `}
      </style>
      <h1>Grade Table</h1>

      <table>
        <tr>
          <th>Grade</th>
          <th>Percentage Interval</th>
        </tr>
        {gradeLetter.map(function (grade, index) {
          return (
            <tr key={index}>
              <td>{grade}</td>
              <td contentEditable="true">{gradeValue[index]}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GradeTable />);
