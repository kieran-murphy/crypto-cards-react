const axios = require("axios").default;

const coinGecko = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

const fetchData = async () => {
  const response = await coinGecko.get("/coins/markets", {
    params: {
      vs_currency: "aud",
      order: "market_cap_desc",
      per_page: 100,
      page: 1,
      sparkline: false,
    },
  });

  console.log(response.data);
};

fetchData();
