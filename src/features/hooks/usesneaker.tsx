import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../infrastructure/store/store';
import { SneakerRepository } from '../../services/sneakers.repository';
import * as act from '../reducer.category.sneakers/action.creator';
import {
    protoSneakersAndSocks,
    sneakersAndSocks,
} from '../types/sneakersAndSocks';

export const useSneakers = () => {
    const sneakers = useSelector((state: rootState) => state.sneakers);
    const dispatcher = useDispatch();
    const apiSneaker = useMemo(() => new SneakerRepository(), []);

    useEffect(() => {
        apiSneaker
            .getAllSneakers()
            .then((sneaker) => dispatcher(act.loadActionCreator(sneaker)))
            .catch((error: Error) => console.log(error.name, error.message));
    }, [apiSneaker, dispatcher]);

    const handleAdd = (newSneaker: protoSneakersAndSocks) => {
        apiSneaker
            .createSneaker(newSneaker)
            .then((sneaker: sneakersAndSocks) =>
                dispatcher(act.addActionCreator(sneaker))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };
    const handleUpdate = (updatesneaker: Partial<sneakersAndSocks>) => {
        apiSneaker
            .updateSneaker(updatesneaker)
            .then((sneaker: sneakersAndSocks) =>
                dispatcher(act.updateActionCreator(sneaker))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };
    const handleDelete = (id: number) => {
        apiSneaker
            .deleteSneaker(id)
            .then(() => dispatcher(act.deleteActionCreator(id)))
            .catch((error: Error) => console.log(error.name, error.message));
    };
    return {
        sneakers,
        handleAdd,
        handleDelete,
        handleUpdate,
    };
};
