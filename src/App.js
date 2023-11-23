import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import TaskViewer from "./components/TaskViewer";

function App() {
  const [data, setData] = useState([
    {
      id: "T-1",
      status: "Progress",
      message: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2023, 1, 23),
    },
    {
      id: "T-2",
      status: "Done",
      message: " buna Create a Design System for Enum Workspace.",
      dueDate: new Date(2023, 1, 23),
    },
    {
      id: "T-3",
      status: "Waiting",
      message: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2023, 1, 23),
    },
    {
      id: "T-4",
      status: "Canceled",
      message: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2023, 1, 23),
    },
    {
      id: "T-5",
      status: "Abandoned",
      message: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2023, 1, 23),
    },
    {
      id: "T-6",
      status: "Abandoned",
      message: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2023, 1, 23),
    },
    {
      id: "T-7",
      status: "Abandoned",
      message: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2023, 1, 23),
    },
    {
      id: "T-8",
      status: "Abandoned",
      message: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2023, 1, 23),
    },
  ]);
  const [filterData, setFilterData] = useState([]);

  const searchData = (params) => {
    console.log(params);
    setFilterData(params);
  };
  console.log(filterData);
  useEffect(() => {}, [filterData]);
  return (
    <>
      <Search data={data} searchData={searchData} />
      <TaskViewer
        data={filterData.lenght > 0 ? filterData : data}
        setData={setData}
      />
    </>
  );
}

export default App;
