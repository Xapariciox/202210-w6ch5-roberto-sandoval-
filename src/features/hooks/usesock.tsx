import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../infrastructure/store/store';
import { SocksRepository } from '../../services/repository/sock.repository';
import * as act from '../reducer.category.socks/action.creator';
import {
    protoSneakersAndSocks,
    sneakersAndSocks,
} from '../types/sneakersAndSocks';

export const useSock = () => {
    const socks = useSelector((state: rootState) => state.socks);
    const dispatcher = useDispatch();
    const apiSocks = useMemo(() => new SocksRepository(), []);

    useEffect(() => {
        apiSocks
            .getAllSocks()
            .then((socks) => dispatcher(act.loadActionCreator(socks)))
            .catch((error: Error) => console.log(error.name, error.message));
    }, [apiSocks, dispatcher]);

    const handleAdd = (newSock: protoSneakersAndSocks) => {
        apiSocks
            .createSock(newSock)
            .then((sock) => dispatcher(act.addActionCreator(sock)))
            .catch((error: Error) => console.log(error.name, error.message));
    };
    const handleUpdate = (updateSock: Partial<sneakersAndSocks>) => {
        apiSocks
            .updateSock(updateSock)
            .then((sock) => dispatcher(act.updateActionCreator(sock)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleDelete = (id: number) => {
        apiSocks
            .deleteSock(id)
            .then(() => dispatcher(act.deleteActionCreator(id)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        socks,
        handleAdd,
        handleDelete,
        handleUpdate,
    };
};
