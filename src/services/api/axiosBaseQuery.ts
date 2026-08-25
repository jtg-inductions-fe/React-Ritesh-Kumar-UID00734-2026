import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosError, AxiosResponse } from 'axios';

import { githubClient } from './axios';
import type { AxiosBaseQueryArgs, AxiosBaseQueryError } from './axios.types';

export const axiosBaseQuery =
    (): BaseQueryFn<AxiosBaseQueryArgs, unknown, AxiosBaseQueryError> =>
    async ({ url, method, params, data, headers }, { signal }) => {
        try {
            const response: AxiosResponse<unknown> = await githubClient({
                url,
                method,
                params,
                data,
                headers,
                signal,
            });

            return {
                data: response.data,
            };
        } catch (error: unknown) {
            const axiosError = error as AxiosError<unknown>;

            return {
                error: {
                    status: axiosError.response?.status ?? 500,
                    data: axiosError.response?.data ?? axiosError.message,
                },
            };
        }
    };
