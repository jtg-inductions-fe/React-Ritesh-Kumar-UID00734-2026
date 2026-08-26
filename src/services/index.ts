export { githubClient } from './api/axios';

export { axiosBaseQuery } from './api/axiosBaseQuery';

export {
    githubApi,
    useGetAuthenticatedUserQuery,
    useLazyGetAuthenticatedUserQuery,
    useGetUserByUsernameQuery,
    useSearchUsersQuery,
} from './github/github.service';

export type {
    AxiosBaseQueryError,
    AxiosBaseQueryArgs,
} from './api/axios.types';
