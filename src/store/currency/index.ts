import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const variableApi = createApi({
    reducerPath: 'apiNBU',
    baseQuery: fetchBaseQuery({baseUrl: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'}),
    tagTypes:['variableTag'],
    endpoints: (builder) => ({
        methodNBU1: builder.query<NBURate[],null>({
            query: () => '',
            providesTags:['variableTag'],
            }),
    })
});

export const { useMethodNBU1Query, useLazyMethodNBU1Query } = variableApi;

// SSR
export const { util: { getRunningQueriesThunk } } = variableApi;
export const { methodNBU1 } = variableApi.endpoints;