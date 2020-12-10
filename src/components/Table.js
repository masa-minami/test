import React from 'react';
import { Button } from './Button';
const TableBodyCell = (props) => (
  <td style={{ padding: '5px 10px', border: 'solid 1px #ccc', ...props.style }}>
    {props.children}
  </td>
);
const TableHeaderCell = (props) => (
  <th
    style={{
      padding: '5px 10px',
      border: 'solid 1px #ccc',
      backgroundColor: '#ddd',
      ...props.style,
    }}
  >
    {props.children}
  </th>
);
export const Table = ({
  students,
  deleteStudent,
  updateStudent,
  pageNationStudent,
  colorStudent,
  clickColor,
}) => {
  let chankArray = pageNationStudent();
  return (
    <div>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          border: 'solid 1px #ccc',
        }}
      >
        <thead>
          <tr>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>NAME</TableHeaderCell>
            <TableHeaderCell>AGE</TableHeaderCell>
            <TableHeaderCell>ACTION</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>

          </tr>
        </thead>
        <tbody>
          {chankArray.length ? (
            chankArray.map((s) => (
              <tr key={s.id}>
                {/* 色を変える */}
                <TableBodyCell style={{color:clickColor== s.id ? "red" : "black"}}>
                  {(s.id%2)==0 ? s.id+1 : s.id+1}
                </TableBodyCell>

                <TableBodyCell>{s.id}</TableBodyCell>
                <TableBodyCell>{s.name}</TableBodyCell>
                <TableBodyCell style={{ backgroundColor: 'gray' }}>
                  {s.age > 18 ? '' : s.age}
                </TableBodyCell>
                <TableBodyCell>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      deleteStudent(s.id);
                    }}
                    title='delete'
                  />
                  <Button
                    style={{ marginRight: 10 }}
                    onClick={(e) => {
                      e.preventDefault();
                      updateStudent(s.id);
                      console.log('CLICKED');
                    }}
                    title='update'
                  />
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      colorStudent(s.id);
                      console.log('clickColor');
                    }}
                    title='click'
                  />
                </TableBodyCell>
              </tr>
            ))
          ) : (
            <tr>
              <td>no student</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};