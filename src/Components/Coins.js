import React from "react";

const Coins = ({ coins }) => {
  return (
    <div className="container">
      <div className="heading">
        <p>#</p>
        <p className="coin-name">Coin</p>
        <p>Price</p>
        <p>24h</p>
        <p className="hide-mobile">Volume</p>
        <p className="hide-mobile">Market Cap</p>
      </div>
    </div>
  );
};

export default Coins;
