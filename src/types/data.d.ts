interface NBURate {
    r030: number;
    txt: string;
    rate: number;
    cc: string;
    exchangedate: string;
  }


interface Apilayer {
  date: string;
  historical: string;
  info: Info;
  query: Query;
  result: number;
  success: boolean;
}

interface Query {
  amount: number;
  from: string;
  to: string;
}

interface Info {
  rate: number;
  timestamp: number;
}