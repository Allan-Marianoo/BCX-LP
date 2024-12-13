import { useEffect, useState } from "react";
import "./CryptoTicker.css";

const CryptoTicker = () => {
  const [prices, setPrices] = useState([]);
  const symbols = [
    { symbol: "BTCUSDT", name: "Bitcoin", abbreviation: "BTC", icon: "btc.png" },
    { symbol: "ETHUSDT", name: "Ethereum", abbreviation: "ETH", icon: "eth.png" },
    { symbol: "USDTBRL", name: "Tether", abbreviation: "USDT", icon: "usdt.png" },
  ];

  useEffect(() => {
  const fetchPrices = async () => {
    try {
      const responses = await Promise.all(
        symbols.map(({ symbol }) =>
          fetch(`${import.meta.env.VITE_API_URL}/ticker/24hr?symbol=${symbol}`)
        )
      );
      const data = await Promise.all(responses.map((response) => response.json()));
      setPrices(data);
    } catch (error) {
      console.error("Erro ao buscar preços das criptomoedas:", error);
    }
  };

  fetchPrices();

  const interval = setInterval(fetchPrices, 900000);
  return () => clearInterval(interval);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


  return (
    <div className="crypto-ticker">
      {prices.map((price, index) => {
        const { name, abbreviation, icon } = symbols[index];
        const percentageChange = parseFloat(price.priceChangePercent).toFixed(2);
        const isPositive = percentageChange >= 0;

        return (
          <div className="crypto-item" key={index}>
            <img
              src={new URL(`../../../assets/icons/coins/${icon}`, import.meta.url).href}
              alt={name}
              className="crypto-icon"
            />



            <div className="crypto-info">
              <span className="crypto-name">
                {name} <span className="crypto-abbreviation">({abbreviation})</span>
              </span>
              <span className="crypto-price">
                {parseFloat(price.lastPrice).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <span
                className={`crypto-change ${
                  isPositive ? "positive" : "negative"
                }`}
              >
                ({isPositive ? "+" : ""}{percentageChange}%)
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CryptoTicker;
