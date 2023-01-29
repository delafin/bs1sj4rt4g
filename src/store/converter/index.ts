import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type TInputValues = {
    toCur:string,
    fromCur:string,
    amountCur:string | number
};
export const apiApilayer = createApi({
    reducerPath: 'apiApilayer',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.apilayer.com/currency_data',
    prepareHeaders: (headers)  => {
        headers.set('apikey', process.env.NEXT_PUBLIC_APILAYER_EXCHANGE_RATES_API!)
        return headers;
      },
    }),
    tagTypes:['ApilayerTag'],
    endpoints: (builder) => ({
        methodApilayer1: builder.query<IListConvert,TInputValues>({
            // query: ({toCur,fromCur,amountCur} :{toCur:string,fromCur:string,amountCur:string | number}) => `/convert?to=${toCur}&from=${fromCur}&amount=${amountCur}`,
            query: ({toCur,fromCur,amountCur}) => `/convert?to=${toCur}&from=${fromCur}&amount=${amountCur}`,
            providesTags:['ApilayerTag'],
            }),
        methodApilayer2: builder.query<IListCurrency,null>({
            query: () => `/list`,
            providesTags:['ApilayerTag'],
            }),
    })
    
});

// For`use` + `MethodName` + `Query` or `Mutation`, useLazyQuery - for handle onClick and Fire hook on Action ( Clock ...) 
export const { useMethodApilayer1Query, useLazyMethodApilayer1Query, useMethodApilayer2Query } = apiApilayer;

// SSR, Not Always Need
export const { util: { getRunningQueriesThunk } } = apiApilayer; // waite untill all tasks are done
export const { methodApilayer1 } = apiApilayer.endpoints;