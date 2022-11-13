import { sneakersAndSocks } from '../../features/types/sneakersAndSocks';
import { RepositorySneakers } from '../repositoryType/repository.sneakers';

export class SneakerRepository implements RepositorySneakers<sneakersAndSocks> {
    url: string;
    constructor(
        url = 'https://servidor-mrsmeeseeks-production.up.railway.app/sneakers'
    ) {
        this.url = url;
    }

    createErrorSneaker(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    getAllSneakers(): Promise<Array<sneakersAndSocks>> {
        return fetch(this.url)
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createErrorSneaker(response);
            })
            .catch((error: Error) => {
                return `${error}`;
            });
    }
    createSneaker(sock: Partial<sneakersAndSocks>): Promise<sneakersAndSocks> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(sock),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createErrorSneaker(response);
            })
            .catch((error: Error) => {
                return `${error}`;
            });
    }
    updateSneaker(
        partialsock: Partial<sneakersAndSocks>
    ): Promise<sneakersAndSocks> {
        return fetch(`${this.url}/ ${partialsock.id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialsock),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createErrorSneaker(response);
            })
            .catch((error: Error) => {
                return `${error}`;
            });
    }
    deleteSneaker(id: number): Promise<void> {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (!response.ok) throw this.createErrorSneaker(response);
            })
            .catch((error: Error) => {
                return `${error}` as unknown as void;
            });
    }
}
