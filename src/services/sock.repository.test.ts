import { SocksRepository } from './sock.repository';

describe('Given TaskApi Service', () => {
    describe('When we instantiate it', () => {
        let service: SocksRepository;
        beforeEach(() => {
            service = new SocksRepository();
        });
        test('Then if i use service.error(), it should return an error', () => {
            const error = service.createErrorSock(
                new Response('Error', {
                    status: 400,
                    statusText: 'error',
                })
            );

            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(error).toEqual(result);
        });

        test(`Then if I use service.getAllSneakers() 
            it should return a Promise of an Array of sneakers`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            });
            const result = await service.getAllSocks();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
        test('Then if i use service.getAll() and the response went wrong it shold throw an error', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });

            const expectedResult = await service.getAllSocks();
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
        });

        test(`Then if I use service.create()
                it should return a Promise of the crated product`, async () => {
            const mockProduct = {
                id: 1,
                name: '',
                offer: true,
                price: 1,
                brand: '',
                color: '',
                image: '',
                Description: '',
            };

            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockProduct),
            });
            const result = await service.createSock(mockProduct);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockProduct);
        });

        test('Then if i use service.createSneaker() and the response went wrong it shold throw an error', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });

            const expectedResult = await service.createSock({});
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
        });

        test('Then if I use service.deletesneaker() it should return an undefined', async () => {
            const mockProduct = {
                id: 1,
                name: '',
                offer: true,
                price: 1,
                brand: '',
                color: '',
                image: '',
                Description: '',
            };

            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue({}),
            });
            const result = await service.deleteSock(mockProduct.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBeUndefined();
        });

        test('Then if i use service.deletesneaker() and the response went wrong it shold throw an error', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });

            const expectedResult = await service.deleteSock(1);
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
        });

        test('Then if I use service.update.sneaker it should return', async () => {
            const mockProduct = {
                name: 'name',
            };

            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue({}),
            });
            const result = await service.updateSock(mockProduct);

            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual({});
        });

        test('Then if i use service.updateSneaker() and the response went wrong it shold throw an error', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });

            const expectedResult = await service.updateSock({});
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
        });
    });

    describe('When we instantiate it with an specified url', () => {
        let service: SocksRepository;
        beforeEach(() => {
            service = new SocksRepository('test');
        });

        test('Then it should change the fetch url to the specified one', () => {
            expect(service.url).toBe('test');
        });
    });
});
