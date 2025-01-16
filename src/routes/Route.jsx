import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
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
import Login from "../pages/Authentication/Login";
import AgeSelection from "../pages/Authentication/AgeSelection";
import RegistrationForm from "../pages/Authentication/RegistrationForm";
import AdultRegistrationForm from "../pages/Authentication/AdultRegistrationForm";
import ForgotPassword from "../pages/Authentication/ForgotPassword";
import ResetPassword from "../pages/Authentication/ResetPassword";
import PrivateRoute from "../components/PrivateRoute";
import NotFound from "../pages/NotFound";

const Routing = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  
  return (
    <div className="routes">
      {isAuthenticated && <Sidebar />}
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={!isAuthenticated ? <AgeSelection /> : <Navigate to="/" />} />
        <Route path="/register/below16" element={<RegistrationForm />} />
        <Route path="/register/above16" element={<AdultRegistrationForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Protected Routes */}
        <Route path="/" element={
          <PrivateRoute>
            <IndividualProfile />
          </PrivateRoute>
        } />
        <Route path="/user-home" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path="/business-account" element={
          <PrivateRoute>
            <BusinessAccount />
          </PrivateRoute>
        } />
        <Route path="/mi-form" element={
          <PrivateRoute>
            <MIForm />
          </PrivateRoute>
        } />
        <Route path="/mb-form" element={
          <PrivateRoute>
            <MbForm />
          </PrivateRoute>
        } />
        <Route path="/individual-settings" element={
          <PrivateRoute>
            <IndividualSettings />
          </PrivateRoute>
        } />
        <Route path="/individual-account" element={
          <PrivateRoute>
            <IndividualSettings />
          </PrivateRoute>
        } />
        <Route path="/business-setting" element={
          <PrivateRoute>
            <IndividualSettings />
          </PrivateRoute>
        } />
        <Route path="/individual-account-setting" element={
          <PrivateRoute>
            <AccountSettings />
          </PrivateRoute>
        } />
        <Route path="/account-settings" element={
          <PrivateRoute>
            <AccountSettings />
          </PrivateRoute>
        } />
        <Route path="/master-profile" element={
          <PrivateRoute>
            <MasterProfile />
          </PrivateRoute>
        } />
        <Route path="/master-account" element={
          <PrivateRoute>
            <MasterAccount />
          </PrivateRoute>
        } />
        <Route path="/view-staff" element={
          <PrivateRoute>
            <MasterAccount />
          </PrivateRoute>
        } />
        <Route path="/view-user" element={
          <PrivateRoute>
            <MasterAccount />
          </PrivateRoute>
        } />
        <Route path="/staff-attendance" element={
          <PrivateRoute>
            <StaffAttendance />
          </PrivateRoute>
        } />
        <Route path="/master-plan" element={
          <PrivateRoute>
            <MasterPlan />
          </PrivateRoute>
        } />
        <Route path="/add-plan" element={
          <PrivateRoute>
            <AddPlan />
          </PrivateRoute>
        } />
        <Route path="/user-attendance" element={
          <PrivateRoute>
            <UserAttendance />
          </PrivateRoute>
        } />
        <Route path="/batch" element={
          <PrivateRoute>
            <BatchClass />
          </PrivateRoute>
        } />
        <Route path="/view-events" element={
          <PrivateRoute>
            <ViewEvents />
          </PrivateRoute>
        } />
        <Route path="/make-payment" element={
          <PrivateRoute>
            <MakePayment />
          </PrivateRoute>
        } />
        <Route path="/household" element={
          <PrivateRoute>
            <Household />
          </PrivateRoute>
        } />
        <Route path="/add-user" element={
          <PrivateRoute>
            <AddUser />
          </PrivateRoute>
        } />
        <Route path="/add-staff" element={
          <PrivateRoute>
            <AddStaff />
          </PrivateRoute>
        } />
        <Route path="/view-service" element={
          <PrivateRoute>
            <ViewService />
          </PrivateRoute>
        } />
        <Route path="/view-service/billing" element={
          <PrivateRoute>
            <ServiceBilling />
          </PrivateRoute>
        } />
        <Route path="/view-course" element={
          <PrivateRoute>
            <ViewCourse />
          </PrivateRoute>
        } />
        <Route path="/manage-course" element={
          <PrivateRoute>
            <ManageCourse />
          </PrivateRoute>
        } />
        
        {/* 404 Route - This should be the last route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Routing;
