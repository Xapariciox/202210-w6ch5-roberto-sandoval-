// import { SneakerRepository } from '../../services/repository/sneakers.repository';
// import { protoSneakersAndSocks, sneakersAndSocks } from '../types/sneakersAndSocks';

// jest.mock('../../services/repository/sneakers.repository');

// const mocksneaker = {
//     id: 1,
//     name: '',s
//     offer: true,
//     price: 1,
//     brand: '',
//     color: '',
//     image: '',
//     Description: '',
// };

// describe('Given the Custom hook "useSneakers"', () => {
//     let result: {
//         current: {
//             products: sneakersAndSocks[];
//             handleAdd: (newProduct: protoSneakersAndSocks) => void;
//             hanldeUpdate: (updateProduct: sneakersAndSocks) => void;
//             handleDelete: (id: string) => void;
//         };
// }
//     beforeEach(() => {
//         SneakerRepository.prototype.getAllSneakers = jest
//             .fn()
//             .mockResolvedValue([mocksneaker]);

//         SneakerRepository.prototype.createSneaker = jest
//             .fn()
//             .mockResolvedValue(mocksneaker);

//         SneakerRepository.prototype.updateSneaker = jest
//             .fn()
//             .mockResolvedValue(mocksneaker);

//         SneakerRepository.prototype.deleteSneaker = jest
//             .fn()
//             .mockResolvedValue(mocksneaker);

//         const wrapper = ({ children }: { children: JSX.Element }) => (
//             <Provider store={appStore}>{children}</Provider>
//         );

//         ({ result } = renderHook(() => useProducts(), { wrapper }));
//     })
export function Prueba() {
    return console.log('hola');
}
