import styled from "styled-components"

export const TransactionHistoryTable = styled.table`
  background-color: #fff;
  width: 600px;
  margin: 60px auto;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 1rem 1rem 2rem rgb(65, 64, 64), -1rem -1rem 2rem rgb(82, 81, 81);
  text-transform: capitalize;
`

export const TableHeader = styled.th`
  height: 50px;
  text-align: center;
  border: 1px solid #555;
  background-color: #499fc4;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
`

export const TableData = styled.td`
  height: 50px;
  text-align: center;
  border: 1px solid #555;
`

export const TableRow = styled.tr`
  :nth-of-type(even) {
    background-color: #e0e0e0;
  }
  :hover {
    cursor: pointer;
    background-color: #dee06c;
  }
`
