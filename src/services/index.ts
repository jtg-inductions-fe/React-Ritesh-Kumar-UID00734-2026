export { githubClient } from './api/axios';
export { axiosBaseQuery } from './api/axiosBaseQuery';

export {
    githubApi,
    useCheckFollowingUserQuery,
    useFollowUserMutation,
    useGetAuthenticatedUserQuery,
    useGetUserByUsernameQuery,
    useGetUserFollowersQuery,
    useLazyGetAuthenticatedUserQuery,
    useSearchUsersQuery,
} from './github/github.service';

export type {
    AxiosBaseQueryError,
    AxiosBaseQueryArgs,
} from './api/axios.types';
