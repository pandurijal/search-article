import React from 'react';

export const Search = (props) => {
  const { value, onChange, onSubmit } = props;
  return (
    <div className="component-search">
      <form>
        <input type="text" onChange={onChange} value={value} />
        <input type="submit" onClick={onSubmit} />
      </form>
    </div>
  );
};
