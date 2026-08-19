import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { githubClient } from './axios';



type AxiosBaseQueryArgs = {
    url: string;
    method?: AxiosRequestConfig['method'];
    params?: Record<string, string | number | boolean | undefined>;
    data?: unknown;
    headers?: AxiosRequestConfig['headers'];
};

type AxiosBaseQueryError = {
    status?: number;
    data?: unknown;
};

export const axiosBaseQuery =
    (): BaseQueryFn<AxiosBaseQueryArgs, unknown, AxiosBaseQueryError> =>
    async ({ url, method, params, data, headers }) => {
        try {
            const response: AxiosResponse<unknown> = await githubClient({
                url,
                method,
                params,
                data,
                headers,
            });

            return {
                data: response.data,
            };
        } catch (error: unknown) {
            const axiosError = error as AxiosError<unknown>;

            return {
                error: {
                    status: axiosError.response?.status,
                    data: axiosError.response?.data ?? axiosError.message,
                },
            };
        }
    };
