const UPBIT_URL = `https://api.upbit.com/v1`;

fetch(`${UPBIT_URL}/market/all?isDetails=false`).then((response) =>
  response.json()
);

const PAPRIKA_URL = `https://api.coinpaprika.com/v1`;

export function paprikaInfo() {
  return fetch(`${PAPRIKA_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${PAPRIKA_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

const NOMAD_COINS_URL = `https://ohlcv-api.nomadcoders.workers.dev`;

export function nomadTicker(coinId: string) {
  return fetch(`${NOMAD_COINS_URL}?coinId=${coinId}`).then((response) =>
    response.json()
  );
}
