import React from "react";
import Item from "../Components/Item";
import Coin from "../routes/Coin";
import { Link } from "react-router-dom";

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

      {coins.map((coins) => {
        return (
          <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
            <Item coins={coins} />
          </Link>
        );
      })}
    </div>
  );
};

export default Coins;
