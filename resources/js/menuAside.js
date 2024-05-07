import {
    mdiAccountCircle,
    mdiMonitor,
    mdiGithub,
    mdiLock,
    mdiAlertCircle,
    mdiSquareEditOutline,
    mdiTable,
    mdiViewList,
    mdiTelevisionGuide,
    mdiResponsive,
    mdiPalette,
    mdiReact,
    mdiAccountSupervisor,
    mdiAccountLockOpen,
    mdiReceiptText,
    mdiGridLarge,
    mdiShapeOutline,
    mdiFileTreeOutline,
    mdiAccountCogOutline,
    mdiHomeOutline,
    mdiMinus,
    mdiBellOutline,
    mdiCogOutline,
    mdiFileDocumentEditOutline
} from '@mdi/js'
import 'boxicons'

export default [
{
    route: 'dashboard',
    icon: mdiHomeOutline,
    icon_font : "home-alt-2",
    label: 'Dashboard',
    permissions: null,
    route_list: null
},

{
    route: 'profile.show',
    label: 'Profile',
    icon: mdiAccountCogOutline,
    icon_font : "user",
    permissions: null,
    route_list: null
},
{
    label: 'Phân quyền',
    icon: mdiFileTreeOutline,
    icon_font : "cog",
    permissions: ['view-user'],
    route_list: ['permissions.index', 'roles.index', 'users.index'],
    menu: [{
        route: 'permissions.index',
        label: 'Permissions',
        icon: mdiMinus,
        permissions: ['super-admin'],
        route_list: null
    },
    {
        route: 'roles.index',
        label: 'Roles',
        icon: mdiMinus,
        permissions: ['super-admin'],
        route_list: null
    },
    {
        route: 'users.index',
        label: 'Users',
        icon: mdiMinus,
        permissions: ['view-user'],
        route_list: null
    }
    ]
},
{
    label: 'Danh Mục',
    icon: mdiShapeOutline,
    icon_font : "layout",
    permissions: ['view-user'],
    group: ['project'],
    route_list: ['admin.projects', 'admin.projects.index', 'admin.category-project.index', 'admin.category-apartment.index', 'admin.sale-policy.index'],
    menu: [{
        route: '',
        label: 'Dự Án',
        icon: mdiReceiptText,
        permissions: ['view-project']
    },
    {
        route: '',
        label: 'Loại hình dự án',
        icon: mdiGridLarge,
        permissions: ['super-admin']
    },
    {
        route: '',
        label: 'Loại hình Căn hộ',
        icon: mdiGridLarge,
        permissions: ['super-admin']
    },
    {
        route: '',
        label: 'Sale Policy',
        icon: mdiFileDocumentEditOutline,
        permissions: ['super-admin']
    }
    ]
},
{
    label: 'SETTINGS',
},
{
    route: 'login',
    label: 'Notification',
    icon: mdiBellOutline,
    icon_font : "bx bx-user",
    permissions: null,
    route_list: null,
},
{
    route: 'login',
    label: 'Settings',
    icon: mdiCogOutline,
    icon_font : "bx bx-user",
    permissions: null,
    route_list: null,
},

]
