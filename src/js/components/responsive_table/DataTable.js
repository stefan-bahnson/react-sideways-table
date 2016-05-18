import React from 'react';

const DataTable = ({headers = [], rows = []}) => {

    const findUniqueKeys = () => (
      Object.keys(rows[0])
    );

    const renderTableHeaders = () => (
      findUniqueKeys().map((key, i) => (
        <div className="tableHeader" key={i}>{key}</div>)
      )
    );

    // TODO: Solve unique key for row items.
    const renderTableRows = () => {
      return rows.map((row, i) => {
          return <div className="tableRow"
                      key={'r'+i}
                      onClick={ () => console.log(row) }>
            {renderRowItems(row)}
          </div>
        }
      );
    };

    const renderRowItems = (row) => (
      Object.keys(row).map((value) => (
        <div className="rowItem">{row[value]}</div>
      ))
    );

    return (
      <div className="dataTableContainer">
        <div className="wrapper">
          <div className="tableHeaderContainer">
            {renderTableHeaders()}
          </div>
          <div className="tableRowContainer">
            {renderTableRows()}
          </div>
        </div>
      </div>
    );
  }
  ;

export default DataTable;