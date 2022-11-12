import { sneakersAndSocks } from '../features/types/sneakersAndSocks';
import { RepositorySocks } from './repositoryType/repository.socks';

export class SocksRepository implements RepositorySocks<sneakersAndSocks> {
    url: string;
    constructor(
        url = 'https://servidor-mrsmeeseeks-production.up.railway.app/socks'
    ) {
        this.url = url;
    }

    createErrorSock(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    getAllSocks(): Promise<Array<sneakersAndSocks>> {
        return fetch(this.url).then((response) => {
            if (response.ok) return response.json();
            throw this.createErrorSock(response);
        });
    }
    createSock(sock: Partial<sneakersAndSocks>): Promise<sneakersAndSocks> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(sock),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => {
            if (response.ok) return response.json();
            throw this.createErrorSock(response);
        });
    }
    updateSock(
        partialsock: Partial<sneakersAndSocks>
    ): Promise<sneakersAndSocks> {
        return fetch(`${this.url}/ ${partialsock.id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialsock),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => {
            if (response.ok) return response.json();
            throw this.createErrorSock(response);
        });
    }
    deleteSock(id: number): Promise<void> {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE',
        }).then((response) => {
            if (!response.ok) throw this.createErrorSock(response);
        });
    }
}
