import React, { useState } from "react";

import TaskViewer from "./components/TaskViewer";

function App() {
  const [data, setdata] = useState([
    {
      id: "T-1",
      status: "Progress",
      message: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2023, 1, 23),
    },
    {
      id: "T-2",
      status: "Done",
      message: "Create a Design System for Enum Workspace.",
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
  return (
    <>
      <TaskViewer data={data} setData={setdata} />
    </>
  );
}

export default App;
