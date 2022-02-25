import CreatePassword from "../components/containers/auth/createPassword";
import Login from "../components/containers/auth/login";
import { Demo } from "../components/stateless/demo";
import ForgetPassword from "../components/containers/auth/forgetPassword";
import ResetPassword from "../components/containers/auth/resetPassword"
import OrganisationList from "../components/containers/organisation/organisationListing";
import AddOrganisation from "../components/containers/organisation/addOrganisation";
import { OrganisationDetails } from "../components/containers/organisation/organisationDetails";
import UserList from "../components/containers/user/list";
// import UserDetails from "../components/stateless/common/form";
import UserDetailsForm from "../components/containers/user/userDetails";
import { AddUser } from "../components/containers/user/addUser";
import AddProviderForm from "../components/containers/provider/addProvider";
import { Dashboard } from "../components/containers/user/dashboard";
import ProviderDetailsForm from "../components/containers/provider/providerDetails";

export enum AppRoutes {
  LOGIN = "/login",
  CREATEPASSWORD = "/createpassword",
  FORGETPASSWORD = "/forgetpassword",
  RESETPASSWORD = "/resetpassword",

  LANDING = "/user/landing",
  USERLIST = "/user/list",
  USERDETAILSFORM= "/user/details",
  ADDUSER = "/user/add",

  ORGANIZATIONLIST = "/organization/list",
  ADDORGANIZATION = "/organization/add",
  AUDITLOG = "/organization/auditLogs",
  ORGANIZATIONDETAILS = "/organization/details",

  DEVICES = "/settings/devices",
  ROLES = "settings/roles",
  HIE = "/settings/hieManagement",
  SPECIALITY = "/specialityManagement",

  ADDPROVIDER = "/provider/add",
  PROVIDERDETAILS = "/provider/details",

  PATIENTLIST = "/patient/list",
  PATIENTREPORTS = "/patient/reports",

}

export const PublicRoutes = [
    {
      path: AppRoutes.LOGIN,
      component: Login,
    },
    {
      path: AppRoutes.CREATEPASSWORD,
      component: CreatePassword,
    },
    {
      path: AppRoutes.FORGETPASSWORD,
      component: ForgetPassword,
    },
    {
      path: AppRoutes.RESETPASSWORD,
      component: ResetPassword
    },
    
  ];
  
export const PrivateRoutes = [
    {
      routePath: "/user/:path?",
      routes: [
        {
          path: AppRoutes.LANDING,
          component: Dashboard,
        },
        {
          path: AppRoutes.USERLIST,
          component: UserList,
        },
        {
          path: AppRoutes.USERDETAILSFORM,
          component: UserDetailsForm,

        },
        {
          path: AppRoutes.ADDUSER,
          component: AddUser
        }
      
      ],
    },
    {
      routePath: "/organization/:path?",
      routes: [
        {
          path: AppRoutes.ORGANIZATIONLIST,
          component: OrganisationList,
        },
        {
          path: AppRoutes.AUDITLOG,
          component: Demo,
        },
        {
          path: AppRoutes.ORGANIZATIONDETAILS,
          component: OrganisationDetails,
        },
        {
          path: AppRoutes.ADDORGANIZATION,
          component: AddOrganisation,
        }
      ],
    },
    {
      routePath: "/provider/:path?",
      routes: [
        {
          path: AppRoutes.ADDPROVIDER,
          component: AddProviderForm,
        },
        {
          path: AppRoutes.PROVIDERDETAILS,
          component: ProviderDetailsForm,
        }
      ]
    },
    {
      routePath: "/patients/:path?",
      routes: [
        {
          path: AppRoutes.PATIENTLIST,
          component: Demo,
        },
        {
          path: AppRoutes.PATIENTREPORTS,
          component: Demo,
        },
      ],
    },
    {
      routePath: "/settings/:path?",
      routes: [
        {
          path: AppRoutes.DEVICES,
          component: Demo,
        },
        {
          path: AppRoutes.HIE,
          component: Demo,
        },
        {
          path: AppRoutes.ROLES,
          component: Demo,
        },
      ],
    }
  ];
  