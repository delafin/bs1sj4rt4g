import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type TInputValues = {
    toCur:string,
    fromCur:string,
    amountCur:string | number
};
export const apiApilayer = createApi({
    reducerPath: 'apiApilayer',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.apilayer.com/exchangerates_data',
    prepareHeaders: (headers) => {
        headers.set('apikey', process.env.APILAYER_EXCHANGE_RATES_API!)
        console.log(headers);
        return headers
      },
    }),
    // {apikey: process.env.APILAYER_EXCHANGE_RATES_API 
    tagTypes:['ApilayerTag'],
    endpoints: (builder) => ({
        methodApilayer1: builder.query<Apilayer,TInputValues>({
            query: ({toCur,fromCur,amountCur} :{toCur:string,fromCur:string,amountCur:string | number}) => `/convert?to=${toCur}&${fromCur}=from&amount=${amountCur}`,
            providesTags:['ApilayerTag'],
            }),
    })
    
});

// For`use` + `MethodName` + `Query` or `Mutation`, useLazyQuery - for handle onClick and Fire hook on Action ( Clock ...) 
export const { useMethodApilayer1Query, useLazyMethodApilayer1Query } = apiApilayer;

// SSR, Not Always Need
export const { util: { getRunningQueriesThunk } } = apiApilayer; // waite untill all tasks are done
export const { methodApilayer1 } = apiApilayer.endpoints;