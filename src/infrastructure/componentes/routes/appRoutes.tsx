import { Routes } from 'react-router-dom';
import { DetailsPage } from '../../../features/details/details';
import { OffersPages } from '../../../features/offers/offers';
import { SneakerPage } from '../../../features/sneakers.page/sneakers.page';
import { SocksPage } from '../../../features/socks.page/SocksPage';

export function AppRoutes() {
    return (
        <>
            <Routes>
                <Route
                    path="offers"
                    element={<OffersPages></OffersPages>}
                ></Route>
                <Route
                    path="sneakers"
                    element={<SneakerPage></SneakerPage>}
                ></Route>
                <Route path="socks" element={<SocksPage></SocksPage>}></Route>
                <Route
                    path="/Details/:id"
                    element={<DetailsPage></DetailsPage>}
                ></Route>
                <Route path="" element={<></>}></Route>

                <Route
                    path="*"
                    element={<Navigate replace to="offers" />}
                ></Route>
            </Routes>
        </>
    );
}
