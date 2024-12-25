import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Dashboard from "../pages/user-dashboard/dashboard/Dashboard";
import BusinessAccount from "../pages/business-dashboard/account/BusinessAccount";
import MIForm from "../pages/business-dashboard/account/miForm/MIForm";
import MbForm from "../pages/business-dashboard/account/mbForm/MbForm";
import IndividualSettings from "../pages/business-dashboard/individual-business/settings/IndividualSettings";
import AccountSettings from "../pages/user-dashboard/settings/AccountSettings";
import MasterProfile from "../pages/master-dashboard/profile/MasterProfile";
import IndividualProfile from "../pages/business-dashboard/profile/IndividualProfile";
import MasterAccount from "../pages/master-dashboard/account/MasterAccount";
import StaffAttendance from "../pages/master-dashboard/manage-staff/staff-attendance/StaffAttendance";
import MasterPlan from "../pages/master-dashboard/plan/Plan";
import AddPlan from "../pages/master-dashboard/plan/addPlan/AddPlan";
import UserAttendance from "../pages/master-dashboard/manage-user/user-attendance/UserAttendance";
import BatchClass from "../pages/master-dashboard/batchClass/BatchClass";
import ViewEvents from "../pages/master-dashboard/events/viewEvents/ViewEvents";
import MakePayment from "../pages/master-dashboard/makePayment/MakePayment";
import Household from "../pages/user-dashboard/household/Household";
import AddUser from "../pages/master-dashboard/account/masterUser/addUser/AddUser";
import AddStaff from "../pages/master-dashboard/account/masterStaff/addStaff/AddStaff";
import ViewService from "../pages/master-dashboard/services/viewService/ViewService";
import ServiceBilling from "../pages/master-dashboard/services/viewService/serviceBilling/ServiceBilling";
import ManageCourse from "../pages/master-dashboard/courses/manageCourse/ManageCourse";
import ViewCourse from "../pages/master-dashboard/courses/viewCourse/ViewCourse";

const Routing = () => {
  // const location = useLocation();
  // const shouldShowSideBar = location.pathname !== '/';

  return (
    <div className="routes">
      {/* {shouldShowSideBar && <Sidebar />} */}
      <Sidebar />
      <Routes>
        <Route path="/" element={<IndividualProfile />} />
        <Route path="/user-home" element={<Dashboard />} />
        <Route path="/business-account" element={<BusinessAccount />} />
        <Route path="/mi-form" element={<MIForm />} />
        <Route path="/mb-form" element={<MbForm />} />
        <Route path="/individual-settings" element={<IndividualSettings />} />
        <Route path="/individual-account" element={<IndividualSettings />} />
        <Route path="/business-setting" element={<IndividualSettings />} />
        <Route
          path="/individual-account-setting"
          element={<AccountSettings />}
        />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/master-profile" element={<MasterProfile />} />
        <Route path="/master-account" element={<MasterAccount />} />
        <Route path="/view-staff" element={<MasterAccount />} />
        <Route path="/view-user" element={<MasterAccount />} />
        <Route path="/staff-attendance" element={<StaffAttendance />} />
        <Route path="/master-plan" element={<MasterPlan />} />
        <Route path="/add-plan" element={<AddPlan />} />
        <Route path="/user-attendance" element={<UserAttendance />} />
        <Route path="/batch" element={<BatchClass />} />
        <Route path="/view-events" element={<ViewEvents />} />
        <Route path="/make-payment" element={<MakePayment />} />
        <Route path="/household" element={<Household />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/add-staff" element={<AddStaff />} />
        <Route path="/view-service" element={<ViewService />} />
        <Route path="/view-service/billing" element={<ServiceBilling />} />
        <Route path="/view-course" element={<ViewCourse />} />
        <Route path="/manage-course" element={<ManageCourse />} />
      </Routes>
    </div>
  );
};

export default Routing;
