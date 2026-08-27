import { useEffect, useState } from 'react';

import { Alert, Box, Snackbar, Stack, Typography } from '@mui/material';

import type { SearchAutocompleteOption } from '@components';
import { useSearchParams } from 'react-router-dom';

import { SearchAutocomplete, UserInfo } from '@components';
import { useDebounce } from '@hooks';
import { useGetUserByUsernameQuery, useSearchUsersQuery } from '@services';

export const SearchContainer = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [query, setQuery] = useState('');
    const [selectedUsername, setSelectedUsername] = useState('');
    const [isAutocompleteOpen, setIsAutocompleteOpen] = useState(false);
    const [isErrorOpen, setIsErrorOpen] = useState(false);

    const userParam = searchParams.get('user')?.trim() ?? '';

    const { value: debouncedQuery, isDebouncing } = useDebounce(query, 500);

    const {
        data: searchData,
        isLoading: isSearchLoading,
        isFetching: isSearchFetching,
        error: searchError,
    } = useSearchUsersQuery(debouncedQuery, {
        skip: debouncedQuery.trim().length === 0,
    });

    const {
        data: userDetails,
        isLoading: isUserLoading,
        isFetching: isUserFetching,
        error: userError,
    } = useGetUserByUsernameQuery(selectedUsername, {
        skip: selectedUsername.length === 0,
    });

    useEffect(() => {
        setQuery(userParam);
        setSelectedUsername(userParam);
    }, [userParam]);

    useEffect(() => {
        if (searchError || userError) {
            setIsErrorOpen(true);
        }
    }, [searchError, userError]);

    const options: SearchAutocompleteOption[] = isDebouncing
        ? []
        : (searchData?.items ?? []);

    const handleInputChange = (
        _: React.SyntheticEvent,
        value: string,
        reason: string,
    ) => {
        if (
            reason === 'selectOption' ||
            reason === 'reset' ||
            reason === 'blur'
        ) {
            return;
        }

        setQuery(value);

        const hasQuery = value.trim().length > 0;

        setIsAutocompleteOpen(hasQuery);

        if (!hasQuery) {
            setSelectedUsername('');
            setSearchParams({});
        }
    };

    const handleOptionChange = (
        _: React.SyntheticEvent,
        option: SearchAutocompleteOption | null,
    ) => {
        if (!option) {
            return;
        }

        const normalizedUsername = option.login.trim();

        if (!normalizedUsername) {
            return;
        }

        setQuery(normalizedUsername);
        setSelectedUsername(normalizedUsername);
        setIsAutocompleteOpen(false);

        setSearchParams({
            user: normalizedUsername,
        });
    };

    const handleAutocompleteOpen = () => {
        if (query.trim()) {
            setIsAutocompleteOpen(true);
        }
    };

    const handleAutocompleteClose = () => {
        setIsAutocompleteOpen(false);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key !== 'Enter') {
            return;
        }

        const normalizedUsername = query.trim();

        if (!normalizedUsername) {
            return;
        }

        setIsAutocompleteOpen(false);
        setSelectedUsername(normalizedUsername);

        setSearchParams({
            user: normalizedUsername,
        });
    };

    return (
        <Stack width="100%" alignItems="center" padding={12}>
            <Typography variant="h1" width="70%" maxWidth="md" marginBottom={4}>
                Search Users
            </Typography>

            <Box width="70%" maxWidth="md">
                <SearchAutocomplete
                    value={query}
                    options={options}
                    loading={
                        isDebouncing || isSearchLoading || isSearchFetching
                    }
                    open={isAutocompleteOpen}
                    label="Search GitHub users"
                    placeholder="Search users..."
                    onInputChange={handleInputChange}
                    onChange={handleOptionChange}
                    onOpen={handleAutocompleteOpen}
                    onClose={handleAutocompleteClose}
                    onKeyDown={handleKeyDown}
                />
            </Box>

            <UserInfo
                details={userDetails}
                loading={isUserLoading || isUserFetching}
            />

            <Snackbar
                open={isErrorOpen}
                autoHideDuration={4000}
                onClose={() => setIsErrorOpen(false)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <Alert severity="error" variant="filled">
                    {searchError
                        ? 'Failed to search GitHub users. Please try again.'
                        : 'Failed to load user details. Please try again.'}
                </Alert>
            </Snackbar>
        </Stack>
    );
};
