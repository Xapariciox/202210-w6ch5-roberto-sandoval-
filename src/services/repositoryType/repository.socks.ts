export interface RepositorySocks<T> {
    getAllSocks: () => Promise<Array<T>>;
    getSock?: (id: number) => Promise<T>;
    createSock: (item: Partial<T>) => Promise<T>;
    updateSock: (item: Partial<T>) => Promise<T>;
    deleteSock: (id: number) => Promise<void>;
}
