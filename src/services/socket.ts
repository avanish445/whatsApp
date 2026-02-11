import { io, Socket } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:3000';

class SocketService {
    private socket: Socket | null = null;

    connect(token: string, userId: string): Socket {
        this.socket = io(SOCKET_URL, {
            autoConnect: false
        });

        this.socket.connect();

        this.socket.on('connect', () => {
            console.log('Socket connected');
            this.socket?.emit('join', { token, userId });
        });

        return this.socket;
    }

    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
            this.socket = null;
        }
    }

    sendMessage(token: string, senderId: string, receiverId: string, text: string) {
        if (this.socket) {
            this.socket.emit('sendMessage', {
                token,
                senderId,
                receiverId,
                text
            });
        }
    }

    onReceiveMessage(callback: (data: any) => void) {
        if (this.socket) {
            this.socket.on('receiveMessage', callback);
        }
    }

    onMessageSent(callback: (data: any) => void) {
        if (this.socket) {
            this.socket.on('messageSent', callback);
        }
    }

    onUserOnline(callback: (data: any) => void) {
        if (this.socket) {
            this.socket.on('userOnline', callback);
        }
    }

    onUserOffline(callback: (data: any) => void) {
        if (this.socket) {
            this.socket.on('userOffline', callback);
        }
    }

    sendTyping(receiverId: string, isTyping: boolean) {
        if (this.socket) {
            this.socket.emit('typing', { receiverId, isTyping });
        }
    }

    onUserTyping(callback: (data: any) => void) {
        if (this.socket) {
            this.socket.on('userTyping', callback);
        }
    }
}

const socketServiceInstance = new SocketService();
export default socketServiceInstance;
