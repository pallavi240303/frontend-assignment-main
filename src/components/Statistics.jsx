import { useEffect, useState } from "react";
import { Table, TableCell, TableContainer, TableHead, TableRow, TableBody } from "@mui/material";

function Statistics() {
  const [coinData, setCoinData] = useState([]);

  // Fetch coin data from an API
  useEffect(() => {
    async function fetchCoinData() {
      try {
        const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
        const data = await response.json();
        setCoinData(data);
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    }

    fetchCoinData();
  }, []);

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {["Coin", "Price", "24h Change", "Market Cap"].map((h) => (
                <TableCell key={h}>
                  {h}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {coinData.map((coin) => (
              <TableRow key={coin.id}>
                <TableCell>{coin.name}</TableCell>
                <TableCell>{`$${coin.current_price.toLocaleString()}`}</TableCell>
                <TableCell style={{ color: coin.price_change_percentage_24h >= 0 ? "green" : "red" }}>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </TableCell>
                <TableCell>{`$${coin.market_cap.toLocaleString()}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Statistics;
