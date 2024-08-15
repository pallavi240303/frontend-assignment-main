import { useState } from "react";
import { getCoinsData } from '../components/CoinDataFetcher'; 
import {  Area, XAxis, YAxis, CartesianGrid, Bar,Tooltip, ComposedChart } from "recharts";
import fsi from "../assets/fullscreen-icon.png";
import ci from "../assets/compare-icon.png";

// eslint-disable-next-line react/prop-types
function ActionMenu({ setCoinData }) {

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };


  const [cdata, setData] = useState([]);
  const [activeButton, setActiveButton] = useState(null); 
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(300);
  const [currentPrice, setCurrentPrice] = useState(0);

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    if(!isFullscreen) {
      setWidth(window.innerWidth-200);
      setHeight(window.innerHeight-100);
    } else {
      setWidth(800);
      setHeight(300);
    }
  };
  const fetchCoinData = async (days) => {
    try {
      const data = await getCoinsData(days);
      setCoinData(data);
      console.log('Fetched Data:', data); 
      if (data && data.prices && data.volume) {
        const formattedData = data.prices.map((item, index) => ({
          price: item[1],
          reduced: item[1] * 0.1,
          volumes: data.volume[index][1] 
        }));
        setCurrentPrice(formattedData.at(-1).price);
        setData(formattedData);
      } else {
        console.error('Data or required fields are undefined');
      }
      setActiveButton(days);
    } catch (error) {
      console.error(error);
    }
  };
  
  

  return (
    <div>
      <div className="action-container">
        <div className='fs-comp'>
          <div className="action-item">
            <img src={fsi} width={24} height={24} className="img" alt="Full Screen Icon" />
            <button className="fsiLabel" onClick={handleFullscreen}> Full Screen</button>
          </div>
          <div className="action-item">
            <img src={ci} width={24} height={24} className="img" alt="Compare Icon" />
            <button className="ciLabel"> Compare</button>
          </div>
        </div>
        <div className='days-cont'>
          <button className={`days-btn ${activeButton === 1 ? 'active' : ''}`} onClick={() => fetchCoinData(1)}>1d</button>
          <button className={`days-btn ${activeButton === 3 ? 'active' : ''}`} onClick={() => fetchCoinData(3)}>3d</button>
          <button className={`days-btn ${activeButton === 7 ? 'active' : ''}`} onClick={() => fetchCoinData(7)}>1w</button>
          <button className={`days-btn ${activeButton === 30 ? 'active' : ''}`} onClick={() => fetchCoinData(30)}>1m</button>
          <button className={`days-btn ${activeButton === 182 ? 'active' : ''}`} onClick={() => fetchCoinData(182)}>6m</button>
          <button className={`days-btn ${activeButton === 365 ? 'active' : ''}`} onClick={() => fetchCoinData(365)}>1y</button>
          <button className={`days-btn ${activeButton === 'max' ? 'active' : ''}`} onClick={() => fetchCoinData(365)}>max</button>
        </div>
      </div>
      <div className={`chart-container ${isFullscreen ? 'fullscreen': ''}`} style ={{marginLeft: '-4%'}} >
        <div style={{color:"#6F7177", padding:"2px", zIndex:9999, display:`${isFullscreen ? '': 'none'}`, fontSize:"20px" , marginLeft: "60px"} }><button onClick={handleFullscreen}>Exit Full Screen</button></div>
        {cdata.length > 0 && (
          <ComposedChart width={width} height={height} data={cdata}>
            <defs>
              <linearGradient id="areaColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E8E7FF" stopOpacity={1} />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" stopOpacity={1} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="none" strokeDasharray='none' />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#00308F"
              strokeWidth={"1"}
              fillOpacity={1}
              fill="url(#areaColor)"
            />
            <Bar
              dataKey="reduced"
              fill='#E6E8EB'
              barSize={50}
              width={740} height={31.34}
            />
            <XAxis dataKey="volumes" tick={false} />
            <YAxis tick={false} />
            <Tooltip position={{ x:780, y:90 }} content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const { price } = payload[0].payload;
                return (
                  <div className="custom-tooltip" >
                    <p style={{ color: "white", backgroundColor: "#1A243A", fontSize: 18, padding: "2px 8px", borderRadius: "5px" }}>{formatNumber(price)}</p>
                    <p style={{color:"white", backgroundColor:"#4B40EE", padding:"2px 8px", borderRadius:"5px", marginTop:"30%"}}>{formatNumber(currentPrice)}</p>
                  </div>
                );
              }
              return null;
            }} />
          </ComposedChart>
        )}
      </div>
    </div>
  );
}

export default ActionMenu;
