import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { SearchAutocomplete } from '@components/SearchAutocomplete/SearchAutocomplete';
import { UserInfo } from '@components/UserInfo/UserInfo';
import { useDebounce } from '@hooks/useDebounce';
import {
    useGetUserByUsernameQuery,
    useSearchUsersQuery,
} from '@services/github/githubApi';

import {
    SearchHeading,
    SearchInputContainer,
    SearchSection,
} from './SearchContainer.styles';

export const SearchContainer = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState('');
    const [selectedUsername, setSelectedUsername] = useState('');
    const userParam = searchParams.get('user')?.trim() ?? '';
    const debouncedQuery = useDebounce(query, 500);

    useEffect(() => {
        setQuery(userParam);
        setSelectedUsername(userParam);
    }, [userParam]);

    const {
        data: searchData,
        isLoading: isSearchLoading,
        isFetching: isSearchFetching,
        error: searchError,
    } = useSearchUsersQuery(debouncedQuery, {
        skip: debouncedQuery.length < 1,
    });

    const {
        data: user,
        isLoading: isUserLoading,
        isFetching: isUserFetching,
        error: userError,
    } = useGetUserByUsernameQuery(selectedUsername, {
        skip: selectedUsername.length === 0,
    });

    const handleQueryChange = (value: string) => {
        setQuery(value);

        if (!value.trim()) {
            setSelectedUsername('');
            setSearchParams({});
        }
    };

    const handleUserSelect = (username: string) => {
        const normalizedUsername = username.trim();

        if (!normalizedUsername) {
            return;
        }

        setQuery(normalizedUsername);
        setSelectedUsername(normalizedUsername);

        setSearchParams({
            user: normalizedUsername,
        });
    };

    return (
        <SearchSection>
            <SearchHeading>Search Users</SearchHeading>

            <SearchInputContainer>
                <SearchAutocomplete
                    query={query}
                    users={searchData?.items ?? []}
                    loading={isSearchLoading || isSearchFetching}
                    error={searchError}
                    onQueryChange={handleQueryChange}
                    onUserSelect={handleUserSelect}
                />
            </SearchInputContainer>

            <UserInfo
                user={user}
                loading={isUserLoading || isUserFetching}
                error={userError}
            />
        </SearchSection>
    );
};
