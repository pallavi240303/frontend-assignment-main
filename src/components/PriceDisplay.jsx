/* eslint-disable react/prop-types */

function PriceDisplay({ currentPrice, priceDifference, percentageChange, sign }) {
    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };
    
      const formattedPrice = formatNumber(currentPrice);
      const formattedPriceDiff = formatNumber(priceDifference);

  const priceDifferenceStyle = priceDifference <= 0 ? 'price-negative' : 'price-positive';
  const percentageChangeStyle = percentageChange <= 0 ? 'price-negative' : 'price-positive';

  return (
    <div>
      <p className="price-display">
        <span className="currentPrice">
            {formattedPrice}
            <span className="usd">USD</span>
        </span> <br />
        <span className={priceDifferenceStyle}>{sign} {formattedPriceDiff}</span>
        <span className={percentageChangeStyle}> ({percentageChange}%)</span>
      </p>
    </div>
  );
}

export default PriceDisplay;
