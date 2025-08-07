import { LoginLazy } from "../../pages/Auth/Login/LoginLazy"
import { RegisterLazy } from "../../pages/Auth/Register/RegisterLazy"
import { NotiLazy } from "../../pages/Notifications/NotiLazy"
import { SearchLazy } from "../../pages/Search/SearchLazy"
import { SettingsLazy } from "../../pages/Settings/SettingsLazy"
import { UserPageLazy } from "../../pages/User/userPageLazy"


// no child
export const lazyRoutesConfig = [
    { path: 'Login', component: LoginLazy },
    { path: 'Register', component: RegisterLazy },
    { path: 'About', component: '' },
]

export const routesConfig = {
    layout: { path: '/',
        outlets: {
            notifications: { path: 'noti', component: NotiLazy },
        }
     },

    search: { path: 'search', component: SearchLazy },
    
    settings: { path: 'settings', component: SettingsLazy },
    user: { path: 'u/:username', component: UserPageLazy }
}