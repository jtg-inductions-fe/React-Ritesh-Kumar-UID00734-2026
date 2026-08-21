export interface LoginFormValues {
    username: string;
    token: string;
}

export interface LoginProps {
    loading?: boolean;
    error?: string;
    onSubmit: (values: LoginFormValues) => Promise<void> | void;
}

export interface LoginErrors {
    username?: string;
    token?: string;
}
