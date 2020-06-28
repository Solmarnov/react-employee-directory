import React from 'react';

function Table(props) {
  return (
    <div className="container">
      <table className="table table-borderless table-dark">{props.children}</table>
    </div>
  );
}

export default Table;