import React from 'react';

import './style.css';

export const Table = (props) => {
  const { columns, rowData, onChangePage, countPage, currentPage } = props;
  console.log({ rowData });
  return (
    <div className="component-table">
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
            const submission_count = val.submission_count || '';
            return (
              <tr key={i}>
                <td>
                  <a href={val.url || val.story_url}>
                    {val.title || val.story_title}
                  </a>
                </td>
                <td>{`${val.author} (${submission_count})`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="component-table--pagination">
        {countPage.map((val) => {
          const activePage = currentPage === val;
          return (
            <button
              className={`component-table--pagination-item ${
                activePage ? 'active' : ''
              }`}
              disabled={activePage}
              onClick={() => onChangePage(val)}
            >
              {val}
            </button>
          );
        })}
      </div>
    </div>
  );
};
