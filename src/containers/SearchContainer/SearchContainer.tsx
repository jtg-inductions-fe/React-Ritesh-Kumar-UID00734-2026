import { useState } from 'react';

import { SearchAutocomplete } from '@components/SearchAutocomplete/SearchAutocomplete';
import { useDebounce } from '@hooks/useDebounce';
import { useSearchUsersQuery } from '@services/github/githubApi';

import {
    SearchHeading,
    SearchInputContainer,
    SearchSection,
} from './SearchContainer.styles';

export const SearchContainer = () => {
    const [query, setQuery] = useState('');

    const debouncedQuery = useDebounce(query, 500);

    const { data, isLoading, isFetching, error } = useSearchUsersQuery(
        debouncedQuery,
        {
            skip: debouncedQuery.trim().length < 1,
        },
    );

    return (
        <SearchSection>
            <SearchHeading>Search Users</SearchHeading>

            <SearchInputContainer>
                <SearchAutocomplete
                    query={query}
                    users={data?.items ?? []}
                    loading={isLoading || isFetching}
                    error={error}
                    onQueryChange={setQuery}
                />
            </SearchInputContainer>
        </SearchSection>
    );
};
