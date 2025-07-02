import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense, lazy } from "react";

// Login Pages
const Login = lazy(() => import("./components/pages/login/Login"));
const Dashboard = lazy(() => import("./components/pages/Dashboard/dashboard/Dashboard"));

// Promotional Management
const Banner = lazy(() => import("./components/pages/banner/Banner"));
const Ads = lazy(() => import("./components/pages/Promotion_Management/ads/Ads"));
const Coupon = lazy(() => import("./components/pages/coupon/Coupon"));
const Notification = lazy(() => import("./components/pages/notification/Notification"));

// Order Management
const Order = lazy(() => import("./components/pages/order/Order"));
const Pending = lazy(() => import("./components/pages/order/Pending"));
const Confirm = lazy(() => import("./components/pages/order/Confirm"));
const Pickup = lazy(() => import("./components/pages/order/Pickup"));
const Ontheway = lazy(() => import("./components/pages/order/Ontheway"));
const Deliver = lazy(() => import("./components/pages/order/Deliver"));
const Cancel = lazy(() => import("./components/pages/order/Cancel"));

// Sidebar or other layouts (optional)

const Processing = lazy(() => import("./components/pages/order/Processing"));
const Layout = lazy(() => import("./components/Layout"));
const Reviews = lazy(() => import("./components/pages/reviews/Reviews"));
const ColorList = lazy(() => import("./components/pages/Colorlist/ColorList"));
const SizeList = lazy(() => import("./components/pages/sizelist/SizeList"));
const UnitList = lazy(() => import("./components/pages/unitlist/UnitList"));
const Customers = lazy(() => import("./components/pages/customers/Customer"));
const Employee = lazy(() => import("./components/pages/user_management/employees/Emoloyee"));
const Business = lazy(() => import("./components/pages/business_management/business_setting/business_setup/Business"));
const Verification = lazy(() => import("./components/pages/business_management/business_setting/verification/verification"));
const Category = lazy(() => import("./components/pages/category/Category"));
const SubCategory = lazy(() => import("./components/pages/category/SubCategory"));
const EditCategory = lazy(() => import("./components/pages/category/EditCategory"));
const Products = lazy(() => import("./components/pages/category/Products"));
const EditProducts = lazy(() => import("./components/pages/category/EditProducts"));
const FlashSales = lazy(() => import("./components/pages/category/FlashSalses"));
const EditFlashSales = lazy(() => import("./components/pages/category/EditFlashSales"));
const Support = lazy(() => import("./components/pages/support/Support"));
const SupportMessage = lazy(() => import("./components/pages/support/SupportMessage"));
const EditBanner = lazy(() => import("./components/pages/editbanner/EditBanner"));
const EditBoucher = lazy(() => import("./components/pages/couponModal/EditBoucher"));
const OrderDetails = lazy(() => import("./components/pages/order/OrderDetails"));
const ProductDetails = lazy(() => import("./components/pages/category/ProductDetails"));
const EditFlashable = lazy(() => import("./components/pages/category/EditFlashable"));
const Language = lazy(() => import("./components/pages/language/Language"));
const EditLanguage = lazy(() => import("./components/pages/language/EditLanguage"));
const CreateLanguage = lazy(() => import("./components/pages/language/CreateLanguage"));
const PaymentGateways = lazy(() => import("./components/pages/payments/paymentGateway/PaymentGateways"));
const SMSGateways = lazy(() => import("./components/pages/payments/smsGateway/SMSGateways"));
const PusherSetup = lazy(() => import("./components/pages/payments/pusherSetup/PusherSetup"));
const MailConfig = lazy(() => import("./components/pages/payments/mailConfig/MailConfig"));
const Firebase = lazy(() => import("./components/pages/payments/firebase/Firebase"));
const BulkExport = lazy(() => import("./components/pages/import_export/BulkExport"));
const GalleryImport = lazy(() => import("./components/pages/import_export/GalleryImport"));
const BulkImport = lazy(() => import("./components/pages/import_export/BulkImport"));
const UploadZipFile = lazy(() => import("./components/pages/import_export/UploadZipFile"));
const ProfileDetails = lazy(() => import("./components/pages/header/ProfileDetails"));
const EditProfileDetails = lazy(() => import("./components/pages/header/EditProfileDetails"));
const AdminSetting = lazy(() => import("./components/pages/header/AdminSetting"));
const ChangePassword = lazy(() => import("./components/pages/header/ChangePassword"));
const Notifications = lazy(() => import("./components/pages/header/Notifications"));
const BrandList = lazy(() => import("./components/pages/productVarient/Brand"));
const General = lazy(() => import("./components/pages/business_management/business_setting/general_setting/General"));
const ManageDelivery = lazy(() => import("./components/pages/business_management/business_setting/delivery_charge/ManageDelivery"));
const EditCity = lazy(() => import("./components/pages/business_management/business_setting/delivery_charge/EditCity"));
const ManageCity = lazy(() => import("./components/pages/business_management/business_setting/delivery_charge/ManageCity"));
const CreateNewDelivery = lazy(() => import("./components/pages/business_management/business_setting/delivery_charge/CreateNewDelivery"));
const AddNewCity = lazy(() => import("./components/pages/business_management/business_setting/delivery_charge/AddNewCity"));
const ImportCity = lazy(() => import("./components/pages/business_management/business_setting/delivery_charge/ImportCity"));
const ThemeColor = lazy(() => import("./components/pages/business_management/business_setting/theme_color/ThemeColor"));
const SocialLink = lazy(() => import("./components/pages/business_management/business_setting/social_links/SocialLink"));
const TicketIssue = lazy(() => import("./components/pages/business_management/business_setting/ticke_issue-type/TicketIssue"));
const PrivacyPolicy = lazy(() => import("./components/pages/legal-pages/privacyPolicy/PrivacyPolicy"));
const EditPrivacyPolicy = lazy(() => import("./components/pages/legal-pages/privacyPolicy/EditPrivacypolicy"));
const CreateNewCategory = lazy(() => import("./components/pages/category/CreateNewCategory"));
const CreateSubCategory = lazy(() => import("./components/pages/category/CreateSubCategory"));
const AddNewProduct = lazy(() => import("./components/pages/category/AddNewProduct"));
const GenerateBarcode = lazy(() => import("./components/pages/category/GenerateBarcode"));
const RolesAndPermissions = lazy(() => import("./components/pages/role&permission/Role&Permission"));
const TermAndCondition = lazy(() => import("./components/pages/legal-pages/term-and-condition/TermAndCondition"));
const EditTermAndCondition = lazy(() => import("./components/pages/legal-pages/term-and-condition/EditTermAndCondition"));
const ReturnRefund = lazy(() => import("./components/pages/legal-pages/return_refund/ReturnRefund"));
const EditReturnRefund = lazy(() => import("./components/pages/legal-pages/return_refund/EditReturnRefund"));
const ShippingDeliveryPolicy = lazy(() => import("./components/pages/legal-pages/Shipping-and-delivery/ShipingAndDelivery"));
const EditShippingDelivery = lazy(() => import("./components/pages/legal-pages/Shipping-and-delivery/EditShippingDelivery"));
const LegalAboutUs = lazy(() => import("./components/pages/legal-pages/abous-us/LegalAboutUs"));
const EditAboutUs = lazy(() => import("./components/pages/legal-pages/abous-us/EditLegalAboutUs"));
const CreateEmployee = lazy(() => import("./components/pages/user_management/employees/CreateEmployee"));
const EmployeePermissions = lazy(() => import("./components/pages/user_management/employees/EmployeePermission"));
const Return = lazy(() => import("./components/pages/order/Return"));
const Replacement = lazy(() => import("./components/pages/order/Replacement"));
const LegalContactUs = lazy(() => import("./components/pages/legal-pages/contact-us/LegalContactUs"));
const PrivateRoute = lazy(() => import("./components/pages/PrivateRoute"));




function App() {

  const isAuthenticated = localStorage.getItem('token') === 'STATIC_AUTH_TOKEN';

  return (
    <>
    <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
      <Routes>
        <Route path="/login" element={<Login />} />

      
        { isAuthenticated && (
           <Route path="/" element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }>
          {/* Dashboard */}
          <Route index element={<Dashboard />} />

          {/* Header Section */}
          <Route path="/admin/profile" element={<ProfileDetails />} />
          <Route path="/admin/profile/edit" element={<EditProfileDetails />} />
          <Route path="/admin/general-setting" element={<AdminSetting />} />
          <Route path="/admin/profile/change-password" element={<ChangePassword />} />
          <Route path="/admin/notifications" element={<Notifications />} />

          {/* Promotion Management */}
          <Route path="/admin/banners" element={<Banner />} />
          <Route path="/admin/advertise" element={<Ads />} />
          <Route path="/admin/banners/edit" element={<EditBanner />} />
          <Route path="/admin/coupons" element={<Coupon />} />
          <Route path="/admin/coupons/edit-boucher" element={<EditBoucher />} />
          <Route path="/admin/customer-notifications" element={<Notification />} />

          {/* Order Management  */}
          <Route path="/admin/all-orders" element={<Order />} />
          <Route path="/admin/orders/order-details" element={<OrderDetails />} />
          <Route path="/admin/orders/pending" element={<Pending />} />
          <Route path="/admin/orders/confirm" element={<Confirm />} />
          <Route path="/admin/orders/processing" element={<Processing />} />
          <Route path="/admin/orders/pickup" element={<Pickup />} />
          <Route path="/admin/orders/on-the-way" element={<Ontheway />} />
          <Route path="/admin/orders/delivered" element={<Deliver />} />
          <Route path="/admin/orders/return" element={<Return />} />
          <Route path="/admin/orders/replacement" element={<Replacement />} />
          <Route path="/admin/orders/cancelled" element={<Cancel />} />
          <Route path="/admin/orders/review" element={<Reviews />} />

          {/* Product Varient */}
          <Route path="/admin/Product/brands" element={<BrandList />} />
          <Route path="/admin/Product/Color" element={<ColorList />} />
          <Route path="/admin/product/Size" element={<SizeList />} />
          <Route path="/admin/Product/Unit" element={<UnitList />} />

          {/* Product Management */}
          <Route path="/admin/products/categories/category" element={<Category />} />
          <Route path="/admin/products/categories/category/edit" element={<EditCategory />} />
          <Route path="/admin/products/categories/category/create" element={<CreateNewCategory />} />

          <Route path="/admin/products/categories/sub-category" element={<SubCategory />} />
          <Route path="/admin/products/categories/sub-category/create" element={<CreateSubCategory />} />

          <Route path="/admin/products/categories/products" element={<Products />} />
          <Route path="/admin/products/categories/products/create" element={<AddNewProduct />} />
          <Route path="/admin/products/categories/products/product-details" element={<ProductDetails />} />
          <Route path="/admin/products/categories/products/generate-barcode" element={<GenerateBarcode />} />
          <Route path="/admin/products/categories/products/product-edit" element={<EditProducts />} />
          <Route path="/admin/products/categories/flash-sales" element={<FlashSales />} />
          <Route path="/admin/products/categories/flash-sales/edit" element={<EditFlashable />} />
          <Route path="/admin/products/categories/flash-sales/edit" element={<EditFlashSales />} />

          {/* USER MANAGEMENT */}

          <Route path="/admin/User/Customer" element={<Customers />} />
          <Route path="/admin/User/Employee" element={<Employee />} />
          <Route path="/admin/User/Employee/create" element={<CreateEmployee />} />
          <Route path="/admin/User/Employee/employee-permission" element={<EmployeePermissions />} />
          <Route path="/admin/user/Role&Permission" element={<RolesAndPermissions />} />


          {/* Business MANAGEMENT */}

          <Route path="/admin/Business/General" element={<General />} />
          <Route path="/admin/Business/Busines" element={<Business />} />
          <Route path="/admin/Business/Verification" element={<Verification />} />
          <Route path="/admin/Business/delivery-charge" element={<ManageDelivery />} />
          <Route path="/admin/Business/delivery-charges/cities/edit-city" element={<EditCity />} />
          <Route path="/admin/Business/delivery-charges/cities/cities" element={<ManageCity />} />
          <Route path="/admin/Business/delivery-charges/cities/create-new-delivery" element={<CreateNewDelivery />} />
          <Route path="/admin/Business/delivery-charges/cities/add-new-city" element={<AddNewCity />} />
          <Route path="/admin/business/delivery-charges/cities/import" element={<ImportCity />} />
          <Route path="/admin/business/color-theme" element={<ThemeColor />} />
          <Route path="/admin/business/social-link" element={<SocialLink />} />
          <Route path="/admin/ticket-issue-types" element={<TicketIssue />} />

          {/* Legal Policy */}
          <Route path="/admin/business/legel-privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/admin/business/edit-privacy-policy" element={<EditPrivacyPolicy />} />
          <Route path="/admin/business/term-and-condition" element={<TermAndCondition />} />
          <Route path="/admin/legalpage/term-and-condition/edit" element={<EditTermAndCondition />} />
          <Route path="/admin/business/return-refund-policy" element={<ReturnRefund />} />
          <Route path="/admin/business/return-refund-policy/edit" element={<EditReturnRefund />} />
          <Route path="/admin/business/shiping-delivery" element={<ShippingDeliveryPolicy />} />
          <Route path="/admin/business/return-refund-policy/shiping-delivery/edit" element={<EditShippingDelivery />} />
          <Route path="/admin/business/about-us" element={<LegalAboutUs />} />
          <Route path="/admin/business/about-us/edit" element={<EditAboutUs />} />
          <Route path="/admin/business/legal-contact-us" element={<LegalContactUs />} />

          {/* Payment Gateways */}
          <Route path="/admin/Business/payment-gateway" element={<PaymentGateways />} />
          <Route path="/admin/Business/sms-gateways" element={<SMSGateways />} />
          <Route path="/admin/Business/pusher" element={<PusherSetup />} />
          <Route path="/admin/Business/mail" element={<MailConfig />} />
          <Route path="/admin/Business/firebase" element={<Firebase />} />

          {/* Language */}
          <Route path="/admin/language" element={<Language />} />
          <Route path="/admin/language/create" element={<CreateLanguage />} />
          <Route path="/admin/language/edit" element={<EditLanguage />} />

          {/* Import / Export */}
          <Route path="/admin/product/bulk-export" element={<BulkExport />} />
          <Route path="/admin/product/bulk-import" element={<BulkImport />} />
          <Route path="/admin/product/gallery" element={<GalleryImport />} />
          <Route path="/admin/product/gallery/upload-image" element={<UploadZipFile />} />

          {/* Support  */}
          <Route path="/admin/support" element={<Support />} />
          <Route path="/admin/support-message" element={<SupportMessage />} />

        </Route>


        )}
        {!isAuthenticated && <Route path="*" element={<Navigate to="/" />} />}
        {/* Toastify container */}
      </Routes>
      </Suspense>
      {/* <ToastContainer position="top-right" autoClose={3000} /> */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </>
  );
}

export default App;
