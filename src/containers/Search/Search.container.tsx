import { useEffect, useState } from 'react';

import { Alert, Box, Snackbar, Stack, Typography } from '@mui/material';

import { SearchAutocomplete } from '@components/SearchAutocomplete/SearchAutocomplete.component';
import { useDebounce } from '@hooks/useDebounce.hook';
import { useSearchUsersQuery } from '@services/github/github.service';

export const SearchContainer = () => {
    const [query, setQuery] = useState('');
    const [isErrorOpen, setIsErrorOpen] = useState(false);

    const debouncedQuery = useDebounce(query, 500);

    const isDebouncing = query.trim().length > 0 && query !== debouncedQuery;

    const { data, isLoading, isFetching, error } = useSearchUsersQuery(
        debouncedQuery,
        {
            skip: debouncedQuery.trim().length < 1,
        },
    );

    useEffect(() => {
        if (error) {
            setIsErrorOpen(true);
        }
    }, [error]);

    return (
        <Stack width="100%" alignItems="center" padding={12}>
            <Typography variant="h1" width="70%" maxWidth="md" marginBottom={4}>
                Search Users
            </Typography>

            <Box width="70%" maxWidth="md">
                <SearchAutocomplete
                    query={query}
                    users={isDebouncing ? [] : (data?.items ?? [])}
                    loading={isDebouncing || isLoading || isFetching}
                    onQueryChange={setQuery}
                />
            </Box>

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
                    Failed to search GitHub users. Please try again.
                </Alert>
            </Snackbar>
        </Stack>
    );
};
