import { json } from 'stream/consumers';
import { sneakersAndSocks } from '../features/types/sneakersAndSocks';
import { Repository } from './repository';

export class SneackersRepository implements Repository<sneakersAndSocks> {
    url: string;
    constructor(
        url = 'https://servidor-mrsmeeseeks-production.up.railway.app/socks'
    ) {
        this.url = url;
    }

    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    getAll(): Promise<Array<sneakersAndSocks>> {
        return fetch(this.url).then((response) => {
            if (response.ok) return response.json();
            throw this.createError(response);
        });
    }
    create(sock: Partial<sneakersAndSocks>): Promise<sneakersAndSocks> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(sock),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => {
            if (response.ok) return response.json();
            throw this.createError(response);
        });
    }
    update(partialsock: Partial<sneakersAndSocks>): Promise<sneakersAndSocks> {
        return fetch(`${this.url}/ ${partialsock.id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialsock),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => {
            if (response.ok) return response.json();
            throw this.createError(response);
        });
    }
    delete(id: number): Promise<void> {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE',
        }).then((response) => {
            if (!response.ok) throw this.createError(response);
        });
    }
}
