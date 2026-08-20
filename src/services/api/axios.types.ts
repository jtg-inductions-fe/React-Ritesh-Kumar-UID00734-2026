import type { AxiosRequestConfig } from 'axios';

export type AxiosBaseQueryArgs = {
    url: string;
    method?: AxiosRequestConfig['method'];
    params?: Record<string, string | number | boolean | undefined>;
    data?: unknown;
    headers?: AxiosRequestConfig['headers'];
};

export type AxiosBaseQueryError = {
    status?: number;
    data?: unknown;
};
