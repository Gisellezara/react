import React from "react";
const Basicinfo = ({
  name,
  dob,
  phoneNumber,
  active,
  toggleFunc,
  num,
}) => {
  return (
    <>
      <p>{name}</p>
      <p>{dob}</p>
      <p>{phoneNumber}</p>
      <p>{`${active}`}</p>
      <button  onClick={() => toggleFunc(num)}>toggle</button>
    </>
  );
};
export default Basicinfo;