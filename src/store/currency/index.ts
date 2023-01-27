import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type TFetchedData = {
    id: number,
    name: string,
    surname: string,
    login:string,
    email:string,
    pass:string,
};

export const variableApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: ''}),
    tagTypes:['variableTag'],
    endpoints: (builder) => ({
        methodName1: builder.query<TFetchedData[],null>({
            query: () => '/users',
            providesTags:['variableTag'],
            }),
        methodName2: builder.query<TFetchedData,number>({
            query: (userId:number) => `/users?id=userId`,
            providesTags:['variableTag'],
            }),
        methodName3: builder.mutation<TFetchedData[],TFetchedData>({
            query: (variableArg:TFetchedData) => ({
                url: '',
                method: 'POST', // POST,GET,PUT,PATCH,DELETE,TRACE,OPTIONS,HEAD,CONNECT
                body: variableArg,
            }),
            invalidatesTags:['variableTag'],
        })
    })
});

// For`use` + `MethodName` + `Query` or `Mutation`, useLazyQuery - for handle onClick and Fire hook on Action ( Clock ...) 
export const { useMethodName1Query, useLazyMethodName1Query, useMethodName2Query, useMethodName3Mutation } = variableApi;

// SSR, Not Always Need
export const { util: { getRunningQueriesThunk } } = variableApi; // waite untill all tasks are done
export const { methodName2, methodName4 } = variableApi.endpoints;