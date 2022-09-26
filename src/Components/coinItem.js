import React from "react";

const coinItem = ({ coins }) => {
  return (
    <div className="coin-row">
      <p>{coins.market_cap_rank}</p>
      <div className="img-symbol">
        <img src={coins.image} alt=""></img>
        <p>{coins.symbol}</p>
      </div>
      <p>{coins.current_price}</p>
      <p>{coins.price_change_percentage_25hr}</p>
      <p className="hide-mobile">{coins.total_volume}</p>
      <p className="hide-mobile">{coins.market_cap}</p>
    </div>
  );
};

export default coinItem;
