const API_URL = 'http://localhost:3000';

// Types
export interface User {
    _id: string;
    username: string;
    createdAt: string;
}

export interface Message {
    _id: string;
    senderId: User;
    receiverId: User;
    text: string;
    timestamp: string;
    isRead: boolean;
}

export interface AuthResponse {
    success: boolean;
    message: string;
    data?: {
        user: User;
        token: string; // Token for Socket.IO authentication (also stored in httpOnly cookie)
    };
}

export interface UsersResponse {
    success: boolean;
    count?: number;
    data: User[];
    message?: string;
}

export interface ChatHistoryResponse {
    success: boolean;
    count?: number;
    data: Message[];
    message?: string;
}

// Auth APIs
export const register = async (username: string, password: string): Promise<AuthResponse> => {
    const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // Include cookies
        body: JSON.stringify({ username, password })
    });
    return response.json();
};

export const login = async (username: string, password: string): Promise<AuthResponse> => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // Include cookies
        body: JSON.stringify({ username, password })
    });
    return response.json();
};

export const getCurrentUser = async (): Promise<AuthResponse> => {
    const response = await fetch(`${API_URL}/auth/me`, {
        method: 'GET',
        credentials: 'include', // Include cookies
    });
    return response.json();
};

export const logout = async (): Promise<{ success: boolean; message: string }> => {
    const response = await fetch(`${API_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include', // Include cookies
    });
    return response.json();
};

// User APIs
export const getUsers = async (): Promise<UsersResponse> => {
    const response = await fetch(`${API_URL}/users`, {
        credentials: 'include', // Include cookies
    });
    return response.json();
};

export const getUserById = async (userId: string): Promise<{ success: boolean; data: User; message?: string }> => {
    const response = await fetch(`${API_URL}/users/${userId}`, {
        credentials: 'include', // Include cookies
    });
    return response.json();
};

// Message APIs
export const getChatHistory = async (userId: string): Promise<ChatHistoryResponse> => {
    const response = await fetch(`${API_URL}/messages/${userId}`, {
        credentials: 'include', // Include cookies
    });
    return response.json();
};

export const sendMessageREST = async (receiverId: string, text: string): Promise<{ success: boolean; message: string; data: Message }> => {
    const response = await fetch(`${API_URL}/messages`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include', // Include cookies
        body: JSON.stringify({ receiverId, text })
    });
    return response.json();
};

export const markAsRead = async (userId: string): Promise<{ success: boolean; message: string }> => {
    const response = await fetch(`${API_URL}/messages/read/${userId}`, {
        method: 'PUT',
        credentials: 'include', // Include cookies
    });
    return response.json();
};
