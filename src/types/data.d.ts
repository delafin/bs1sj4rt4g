interface NBURate {
    r030: number;
    txt: string;
    rate: number;
    cc: string;
    exchangedate: string;
  }

//
interface Apilayer {
  date: string;
  historical: string;
  info: ApilayerInfo;
  query: ApilayerQuery;
  result: number;
  success: boolean;
}

interface ApilayerQuery {
  amount: number;
  from: string;
  to: string;
}

interface ApilayerInfo {
  rate: number;
  timestamp: number;
}
//

interface IListCurrency {
  success: boolean;
  currencies: Currency[] | Currency;
}

interface Currency {
    [key: string]: string;
}

interface IListConvert {
  date: string;
  historical: boolean;
  info: IListConvertInfo;
  query: IListConvertQuery;
  result: number;
  success: boolean;
}

interface IListConvertQuery {
  amount: number;
  from: string;
  to: string;
}

interface IListConvertInfo {
  quote: number;
  timestamp: number;
}