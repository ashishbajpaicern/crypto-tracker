import React from 'react'
import './Coin.css'
import Graph from './Graph'




const Coin = ({id, name, image, symbol, price, volume, priceChange, marketcap, sparkline}) => {
  

  /** 
  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7&interval=hourly`,
    {
    withCredentials: false,
    headers: {
      //'Access-Control-Allow-Origin' : 'http://localhost:3000',
      //'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      //'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      'Content-Type': 'application/x-www-form-urlencoded' 
      }
    }
  )
    .then(res =>{
      setPointData(res.data)
      console.log(name)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])
*/

/** 
//useEffect(()=>{
  axios.get(url,
  //{
  //withCredentials: false,
  //headers: {
    //'Access-Control-Allow-Origin' : 'http://localhost:3000',
    //'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    //'Content-Type': 'application/x-www-form-urlencoded' 
    //}
  //}
).then(res=>{
  setPointData(res.data);
}).catch((error)=>{
  console.log(error)
})
},[url])
*/



  return (
    <div className="coin-container">
    <div className="coin-row">
      <div className="coin">
        <img src={image} alt="crypto coin"></img>
        <h1>{name}</h1>
        <p className="coin-symbol">{symbol}</p>
      </div>
      <div className="coin-data">
        <p className="coin-price">${price}</p>
        <p className="coin-volume">${volume.toLocaleString()}</p>
        {priceChange < 0 ? (<p className="coin-percent red">{priceChange.toFixed(2)}%</p>)
        : (<p className="coin-percent green">{priceChange.toFixed(2)}%</p>)  
        }
        <p className="coin-marketcap">${marketcap.toLocaleString()}</p>
      </div>
      <div className="coin-graph">
      <Graph pointData={sparkline}/>
    </div>
    </div>
  </div>
  )
}

export default Coin
