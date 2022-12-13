export interface IData {
  close: string;
  high: string;
  low: string;
  market_cap: number;
  open: string;
  time_close: number;
  time_open: number;
  volume: string;
}

export interface RouteParams {
  coinId: string;
}

export interface CoinInfo {
  id: string;
  name: string;
  symbol: string;
  parent: {
    id: string;
    name: string;
    symbol: string;
  };
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  tags: [
    {
      id: string;
      name: string;
      coin_counter: number;
      ico_counter: number;
    }
  ];
  team: [
    {
      id: string;
      name: string;
      position: string;
    }
  ];
  description: string;
  message: string;
  open_source: boolean;
  hardware_wallet: boolean;
  started_at: string;
  development_status: string;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  contract: string;
  platform: string;
  contracts: [
    {
      contract: string;
      platform: string;
      type: string;
    }
  ];
  links: {
    explorer: string[];
    facebook: string[];
    reddit: string[];
    source_code: string[];
    website: string[];
    youtube: string[];
    medium: [] | null;
  };
  links_extended: [
    {
      url: string;
      type: string;
    },
    {
      url: string;
      type: string;
      stats: {
        subscribers: number;
      };
    },
    {
      url: string;
      type: string;
      stats: {
        contributors: number;
        stars: number;
      };
    },
    {
      url: string;
      type: string;
    }
  ];
  whitepaper: {
    link: string;
    thumbnail: string;
  };
  first_data_at: string;
  last_data_at: string;
}
