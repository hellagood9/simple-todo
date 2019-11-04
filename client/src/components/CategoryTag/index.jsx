import React from 'react';

const CategoryTag = props => {
  const { category: { name, id, _id}, type, onChange, checked } = props;
  const inputNameAttr = type === "checkbox" ? _id : "category"

  return (
    <>
      <div className="field">
        <input 
          id={_id} 
          type={type} 
          name={inputNameAttr}
          value={id} 
          onChange={onChange}
          checked={checked}
        />
        <label htmlFor={_id}>{name}</label>
      </div>
    </>
  );
};

export default CategoryTag;