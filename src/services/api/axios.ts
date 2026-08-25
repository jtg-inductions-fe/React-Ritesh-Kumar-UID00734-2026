import axios from 'axios';

export const githubClient = axios.create({
    baseURL: 'https://api.github.com',
    timeout: 10000,
    headers: {
        Accept: 'application/vnd.github+json',
    },
});
