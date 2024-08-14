import { useState, useEffect } from "react";
import ActionMenu from "./ActionMenu";
import PriceDisplay from "../components/PriceDisplay";
import { getCoinsData } from "./CoinDataFetcher";
import Statistics from "./Statistics";
import Summary from "./Summary";

export default function TabBar() {
  const [toggle, setToggle] = useState(null);  // Default to Summary tab
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    const fetchInitialData = async () => {
      const data = await getCoinsData(1); // Fetch data for 1 day
      setCoinData(data);
    };
    fetchInitialData();
  }, []);

  const handleTabClick = (tabIndex) => {
    setToggle(tabIndex);
  };

  return (
    <>
      <div className="cont">
        {coinData && (
          <PriceDisplay
            currentPrice={coinData.currentPrice}
            priceDifference={coinData.priceDifference}
            percentageChange={coinData.percentageChange}
            sign={coinData.sign}
          />
        )}
      </div>

      <div className="tab-container">
        <button 
          className={`tab-btn ${toggle === 1 ? 'active' : ''}`} 
          onClick={() => handleTabClick(1)}
        >
          Summary
        </button>
        <button 
          className={`tab-btn ${toggle === 2 ? 'active' : ''}`} 
          onClick={() => handleTabClick(2)}
        >
          Chart
        </button>
        <button 
          className={`tab-btn ${toggle === 3 ? 'active' : ''}`} 
          onClick={() => handleTabClick(3)}
        >
          Statistics
        </button>
        <button 
          className={`tab-btn ${toggle === 4 ? 'active' : ''}`} 
          onClick={() => handleTabClick(4)}
        >
          Analysis
        </button>
        <button 
          className={`tab-btn ${toggle === 5 ? 'active' : ''}`} 
          onClick={() => handleTabClick(5)}
        >
          Settings
        </button>
        <div className="line"></div>

        <div className={toggle === 1 ? "show-content" : "tab-content"}>
        {toggle === 1 && <Summary/>}
        </div>
        <div className={toggle === 2 ? "show-content" : "tab-content"}>
          {toggle === 2 && <ActionMenu setCoinData={setCoinData} />}
        </div>
        <div className={toggle === 3 ? "show-content" : "tab-content"}>
          {toggle === 3 && <Statistics/>}
        </div>
        <div className={toggle === 4 ? "show-content" : "tab-content"}>
          Analysis
        </div>
        <div className={toggle === 5 ? "show-content" : "tab-content"}>
          Settings
        </div>
      </div>
    </>
  );
}
