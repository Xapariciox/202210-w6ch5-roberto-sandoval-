export interface RepositorySneakers<T> {
    getAllSneakers: () => Promise<Array<T>>;
    getSneakers?: (id: number) => Promise<T>;
    createSneaker: (item: Partial<T>) => Promise<T>;
    updateSneaker: (item: Partial<T>) => Promise<T>;
    deleteSneaker: (id: number) => Promise<void>;
}
