import React, { Fragment } from "react";

const MappedData = ({ props }) => {
  const { _id, name, email, age, address } = props;
  return (
    <div key={_id}>
      <h1>Name: {name}</h1>
      <h1>Email ID: {email}</h1>
      <h1>Age: {age}</h1>
      <h1>Address: {address}</h1>
    </div>
  );
};

const ListAndKeys = () => {
  let data = [
    {
      _id: 1,
      name: "Vignesh",
      email: "Vignesh@gmail.com",
      age: 24,
      address: "Abc colony",
    },
    {
      _id: 2,
      name: "Vicky",
      email: "vicky@gmail.com",
      age: 24,
      address: "ZZZ colony",
    },
    {
      _id: 3,
      name: "Vishnu",
      email: "vishnu@gmail.com",
      age: 24,
      address: "MMM colony",
    },
    {
      _id: 4,
      name: "Priya",
      email: "priya@gmail.com",
      age: 24,
      address: "HHH colony",
    },
  ];

  return (
    <>
      {data?.length >= 1 ? (
        data?.map((value, index) => <MappedData props={value} />)
      ) : (
        <>
          <h1>No data found</h1>
        </>
      )}
    </>
  );
};

export default ListAndKeys;
