import React from 'react';

export const Table = (props) => {
  const { columns, rowData } = props;
  console.log({ rowData });
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((val, i) => (
              <th key={i}>{val}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowData.map((val, i) => {
            return (
              <tr key={i}>
                <td>
                  <a href={val.url}>{val.title}</a>
                </td>
                <td>{val.author}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
