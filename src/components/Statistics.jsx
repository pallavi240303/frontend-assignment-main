import { Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"


function Statistics() {
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    {["Coin","Price","24h Change", "Market Cap"].map((h) =>(
                        <TableCell key={h}>
                            {h}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Statistics
