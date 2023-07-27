// Upbit API
const UPBIT_URL = `https://api.upbit.com/v1`;

export function CoinList() {
  return fetch(`${UPBIT_URL}/market/all?isDetails=false`).then((res) =>
    res.json()
  );
}
// https://api.upbit.com/v1/candles/days
export function ChartInfo(market: string, count: number) {
  return fetch(
    `${UPBIT_URL}/candles/days?market=${market}&count=${count}`
  ).then((res) => res.json());
}

// Coin Paprika API
const PAPRIKA_URL = `https://api.coinpaprika.com/v1`;

export function paprikaInfo() {
  return fetch(`${PAPRIKA_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${PAPRIKA_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

// Nico(NomaderCoder) API
const NOMAD_COINS_URL = `https://ohlcv-api.nomadcoders.workers.dev`;

export function nomadTicker(coinId: string) {
  return fetch(`${NOMAD_COINS_URL}?coinId=${coinId}`).then((response) =>
    response.json()
  );
}
