import React from "react";
import Button, { ButtonComp2 } from "./ChildComp";

const ParentComp = () => {
  const btnName = "Reset";

  const handleUpdate = () => {
    console.log("Update button triggered");
  };

  const handleSubmit = () => {
    console.log("Submit button triggered");
  };

  const handleReset = () => {
    console.log("Reset button triggered");
  };

  const handleBack = () => {
    console.log("Back button triggered");
  };

  const objData = { btnName: "Go Back", handleFunc: handleBack };
  const objdata2 = {
    btnName: "Delete",
    handleFunc: () => console.log("Delete function triggered"),
  };

  return (
    <div>
      <h1 className="text-center mb-4">ParentComp</h1>
      <div className="flex gap-4">
        <Button btnName="Update" handleFunc={handleUpdate} />
        <Button btnName="Submit" handleFunc={handleSubmit} />

        <ButtonComp2 props={{ btnName: btnName, handleFunc: handleReset }} />
        <ButtonComp2 props={objData} />
        <ButtonComp2 props={objdata2} />
      </div>
    </div>
  );
};

export default ParentComp;
