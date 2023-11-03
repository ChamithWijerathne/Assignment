import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Order/home_page";
import ItemPage from "./Pages/Order/item_page";
import ShoppingCart from "./Pages/Order/shopping_cart";
import Order from "./Pages/Order/order_page";
import FeedbackPage from "./Pages/Order/feedback_page";
import ToBeShippedPage from "./Pages/Order/to_be_shipped_page";
import ShippedPage from "./Pages/Order/shipped_item_page";
import ClientReviewPage from "./Pages/Order/client_review_page";
import Login from "./Pages/User/login_page";
import Regitstration from "./Pages/User/registration_page";
import UserProfileHome from "./Pages/User/user_profile_home";
import UserProfileNav from "./Pages/User/user_profile_nav";
import Authentication from "./Auth/authentication";
import UserProfileAddressBook from "./Pages/User/user_profile_address";
import UserProfileAddAddress from "./Pages/User/address_book_pages/user_profile_add_address";
import UserProfileAddPayment from "./Pages/User/payment_options_pages/user_profile_add_payment";
import UserProfilePaymentOptions from "./Pages/User/user_profile_payment";
import UserProfileChangePassword from "./Pages/User/user_profile_change_password";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <Authentication>
                <HomePage />
              </Authentication>
            }
          />
          <Route
            path="/item/:category/:name/:price/:rate/:id"
            element={
              <Authentication>
                <ItemPage />
              </Authentication>
            }
          />
          <Route
            path="/cart"
            element={
              <Authentication>
                <ShoppingCart />
              </Authentication>
            }
          />
          <Route
            path="/order"
            element={
              <Authentication>
                <Order />
              </Authentication>
            }
          />
          <Route
            path="/review"
            element={
              <Authentication>
                <FeedbackPage />
              </Authentication>
            }
          />
          <Route
            path="/to-be-shipped"
            element={
              <Authentication>
                <ToBeShippedPage />
              </Authentication>
            }
          />
          <Route
            path="/shipped"
            element={
              <Authentication>
                <ShippedPage />
              </Authentication>
            }
          />
          <Route
            path="/give/review/:itemId/:oid"
            element={
              <Authentication>
                <ClientReviewPage />
              </Authentication>
            }
          />
          <Route path="/registration" element={<Regitstration />} />
          <Route
            path="/profile"
            element={
              <Authentication>
                <UserProfileHome />
              </Authentication>
            }
          />
          <Route
            path="/profile/nav"
            element={
              <Authentication>
                <UserProfileNav />
              </Authentication>
            }
          />
          <Route
            path="/profile/address-book"
            element={
              <Authentication>
                <UserProfileAddressBook />{" "}
              </Authentication>
            }
          />

          <Route
            path="/profile/address-book/add"
            element={
              <Authentication>
                <UserProfileAddAddress />{" "}
              </Authentication>
            }
          />

          <Route
            path="/profile/payment"
            element={
              <Authentication>
                <UserProfilePaymentOptions />{" "}
              </Authentication>
            }
          />

          <Route
            path="/profile/payment/add"
            element={
              <Authentication>
                <UserProfileAddPayment />{" "}
              </Authentication>
            }
          />

          <Route
            path="/profile/change-password"
            element={
              <Authentication>
                <UserProfileChangePassword />{" "}
              </Authentication>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
