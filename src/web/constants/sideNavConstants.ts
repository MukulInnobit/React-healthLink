import { AppRoutes } from "../router/appRoutes";
import { dashboardIcon, organizationIcon, userIcon, auditLogIcon, devicesIcon, settingsIcon } from "../images";
export const SideNavItems = {
    providerItems: [
        {
            title: "Dashboard",
            url: AppRoutes.LANDING,
            icon: dashboardIcon,


        },
        {
            title: "Patients",
            url: AppRoutes.PATIENTLIST,
            icon: dashboardIcon,


        },
        {
            title: "Reports",
            url: AppRoutes.PATIENTREPORTS,

        }
    ],
    platformAdminItems: [
        {
            title: "Dashboard",
            url: AppRoutes.LANDING,
            icon: dashboardIcon,

        },
        {
            title: "Organizations",
            url: AppRoutes.ORGANIZATIONLIST,
            icon: organizationIcon,

        },
        {
            title: "Platform Users",
            url: AppRoutes.USERLIST,
            icon: userIcon,

        },
        {
            title: "Audit Logs",
            url: AppRoutes.AUDITLOG,
            icon: auditLogIcon,

        },
        {
            title: "Devices",
            url: AppRoutes.DEVICES,
            icon: devicesIcon,

        },
        {
            title: "Settings",
            icon: settingsIcon,
            children: [
                {
                    title: "Roles and Permissions",
                    url: AppRoutes.ROLES,

                },
                {
                    title: "Manage HIE",
                    url: AppRoutes.HIE,

                },
                {
                    title: "Manage Speciality",
                    url: AppRoutes.SPECIALITY,

                },
            ],

        },
    ]
}