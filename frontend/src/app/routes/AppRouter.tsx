import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazyRoutesConfig, routesConfig } from "../config/routesConfig";
import Home from "../../pages/Home/Home";
import { Suspense } from "react";
import Main from "../../components/main/Main";
import { Loader } from "../../shared/UI/Loader";

export function AppRouter(){

    return (
        <BrowserRouter>
            <Routes>
                {/* Layout */}
                <Route path={routesConfig.home.path} element={<Home />} >

                    <Route index element={<Main />} />

                    {/* Noti */}
                    <Route 
                        path={routesConfig.home.outlets.notifications.path} 
                        element={
                        <Suspense fallback={<Loader />}>
                            <routesConfig.home.outlets.notifications.component/>
                        </Suspense>
                    }
                    />

                    {/* Search*/}
                    <Route 
                        path={routesConfig.home.outlets.search.path} 
                        element={
                        <Suspense fallback={<Loader />}>
                            <routesConfig.home.outlets.search.component/>
                        </Suspense>
                    }
                    />

                 </Route>
                
                {/* lazyRoutes */}
                {lazyRoutesConfig.map((e,idx) => (
                    <Route 
                    path={e.path} 
                    element={<e.component />} 
                    key={idx}
                    />
                ))}


                {/* Settings */}
                <Route 
                path={routesConfig.settings.path} 
                element={
                    <Suspense fallback={<p>загрузка</p>}>
                        <routesConfig.settings.component/>
                    </Suspense>
                }
                />

                {/* User */}
                <Route 
                path={routesConfig.user.path} 
                element={
                    <Suspense fallback={<p>загрузка</p>}>
                        <routesConfig.user.component/>
                    </Suspense>
                }
                />

            </Routes>
        </BrowserRouter>
    )
}