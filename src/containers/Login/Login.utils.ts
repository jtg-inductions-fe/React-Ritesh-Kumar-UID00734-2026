const GITHUB_CLASSIC_PAT_PATTERN = /^ghp_[A-Za-z0-9_]+$/;
const GITHUB_FINE_GRAINED_PAT_PATTERN = /^github_pat_[A-Za-z0-9_]+$/;
const GITHUB_USERNAME_PATTERN = /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/;

const isValidGitHubTokenFormat = (token: string): boolean => {
    const isValidLength = token.length === 40 || token.length === 93;

    const hasValidPrefix =
        GITHUB_CLASSIC_PAT_PATTERN.test(token) ||
        GITHUB_FINE_GRAINED_PAT_PATTERN.test(token);

    return isValidLength && hasValidPrefix;
};

export const validateToken = (token: string): string | undefined => {
    const trimmedToken = token.trim();

    if (!trimmedToken) {
        return 'Personal access token is required.';
    }

    if (!isValidGitHubTokenFormat(trimmedToken)) {
        return 'Please enter a valid GitHub personal access token.';
    }

    return undefined;
};

export const validateUsername = (username: string): string | undefined => {
    const trimmedUsername = username.trim();

    if (!trimmedUsername) {
        return 'Username is required.';
    }

    if (trimmedUsername.length > 39) {
        return 'GitHub username cannot exceed 39 characters.';
    }

    if (!GITHUB_USERNAME_PATTERN.test(trimmedUsername)) {
        return 'GitHub username can only contain letters, numbers, and hyphens.';
    }

    return undefined;
};
