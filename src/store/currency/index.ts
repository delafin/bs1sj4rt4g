import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const variableApi = createApi({
    reducerPath: 'apiNBU',
    baseQuery: fetchBaseQuery({baseUrl: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'}),
    tagTypes:['variableTag'],
    endpoints: (builder) => ({
        methodName1: builder.query<NBURate[],null>({
            query: () => '',
            providesTags:['variableTag'],
            }),
    })
});

// For`use` + `MethodName` + `Query` or `Mutation`, useLazyQuery - for handle onClick and Fire hook on Action ( Clock ...) 
export const { useMethodName1Query, useLazyMethodName1Query } = variableApi;

// SSR, Not Always Need
export const { util: { getRunningQueriesThunk } } = variableApi; // waite untill all tasks are done
export const { methodName1 } = variableApi.endpoints;