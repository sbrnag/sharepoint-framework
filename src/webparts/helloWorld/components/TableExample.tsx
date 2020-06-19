import * as React from 'react';

import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Button, ButtonType } from 'office-ui-fabric-react/lib/Button';


const TableExample: React.FC = () => {

  
  const [rows, setRows] = React.useState([ 1, 2, 3 ]);
   
  
  const handleAddNewRow = (event: any) => {
    event.preventDefault();
    let rowCount = rows.length;
    let newCount = rowCount + 1;
    setRows([...rows, newCount]);
  }

  return (
    <div>
      <h1> rows length </h1>{rows.length}
      <table>
        {rows.map( r => {
          return ( <tr key={r}>
            <td>SUBMITTED BY</td>
             <td><TextField/></td>
             <td>PROJECT TYPE</td>
             <td><TextField/></td>   
            </tr>
          )
        })}
      </table>

      <Button onClick={handleAddNewRow}>Add New</Button>
    </div>
  );
};

export default TableExample;
