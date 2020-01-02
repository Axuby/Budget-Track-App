import React from "react";

const EditPage = props => {
  console.log(props)
  return (
    <div>
      <p>edit {props.match.params} </p>
    </div>
  );
};

export default EditPage;
