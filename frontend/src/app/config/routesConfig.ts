import { LoginLazy } from "../../pages/Auth/Login/LoginLazy"
import { RegisterLazy } from "../../pages/Auth/Register/RegisterLazy"
import { NotiLazy } from "../../pages/Notifications/NotiLazy"
import { SearchLazy } from "../../pages/Search/SearchLazy"
import { SettingsLazy } from "../../pages/Settings/SettingsLazy"

// no child
export const lazyRoutesConfig = [
    { path: 'Login', component: LoginLazy },
    { path: 'Register', component: RegisterLazy },
    { path: 'About', component: '' },
]

export const routesConfig = {
    home: { path: '/' },
    user: { path: 'u/:username', component: '' },

    search: { path: 'search', component: SearchLazy },
    notifications: { path: 'noti', component: NotiLazy },
    settings: { path: 'settings', component: SettingsLazy }
}