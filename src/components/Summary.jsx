

function Summary() {
  return (
    <div className="summary-container">
      <h2>About Bitcoin (BTC)</h2>
      <p>
        Bitcoin (BTC) is the first cryptocurrency built on blockchain technology, also known as a decentralized digital currency based on cryptography. Unlike government-issued or fiat currencies such as US Dollars or Euro, which are controlled by central banks, Bitcoin can operate without the need for a central authority like a central bank or a company. The decentralized nature allows it to operate on a peer-to-peer network, where users can send funds to each other without intermediaries.
      </p>

      <h3>Who created Bitcoin?</h3>
      <p>
        The creator is an unknown individual or group that goes by the name Satoshi Nakamoto, with the idea of an electronic peer-to-peer cash system as described in a whitepaper. The true identity of Satoshi Nakamoto has not been verified, though there has been speculation and rumor as to who Satoshi might be. Officially, the first genesis block of BTC was mined on 9th January 2009, marking the start of cryptocurrencies.
      </p>

      <h3>How does Bitcoin work?</h3>
      <p>
        While the general public perceives Bitcoin as a physical-looking coin, it is actually far from that. Under the hood, it is a distributed accounting ledger stored as a chain of blocks—hence the name blockchain.
      </p>
      {/* Additional sections with similar structure */}
      
      <h3>Bitcoin Mining</h3>
      <p>
        A Bitcoin miner uses computer rigs to validate Alices transaction to be added to the ledger. To prevent a miner from adding arbitrary transactions, they must solve a complex puzzle (Proof of Work). If successful, the transaction is added to the ledger, and the record is final.
      </p>

      <h3>Bitcoin Halving</h3>
      <p>
        Bitcoin Halving, or Halvening, refers to the reduction of block rewards to miners by half, occurring approximately every 4 years. This built-in monetary policy drives the scarcity of Bitcoin and impacts the market.
      </p>
      
      <h3>Bitcoin FAQs</h3>
      <p>
        Where can you buy Bitcoin? BTC tokens can be traded on centralized crypto exchanges. The most popular exchange to buy and trade Bitcoin is Binance, where the most active trading pair BTC/USDT has a trading volume of $1,729,611,270 in the last 24 hours. Other popular options include Kraken and Coinbase Exchange.
      </p>
    </div>
  );
}

export default Summary;
