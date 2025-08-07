import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazyRoutesConfig, routesConfig } from "../config/routesConfig";
import Home from "../../pages/Home/Home";
import { Suspense } from "react";

export function AppRouter(){

    return (
        <BrowserRouter>
            <Routes>
                {/* Home */}
                <Route path={routesConfig.home.path} element={<Home />} />
                
                {/* lazyRoutes */}
                {lazyRoutesConfig.map((e,idx) => (
                    <Route 
                    path={e.path} 
                    element={<e.component />} 
                    key={idx}
                    />
                ))}

                {/* Search */}
                <Route 
                path={routesConfig.search.path} 
                element={
                    <Suspense fallback={<p>загрузка</p>}>
                        <routesConfig.search.component/>
                    </Suspense>
                }
                />

                {/* Noti */}
                <Route 
                path={routesConfig.notifications.path} 
                element={
                    <Suspense fallback={<p>загрузка</p>}>
                        <routesConfig.notifications.component/>
                    </Suspense>
                }
                />

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