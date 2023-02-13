import "./App.css";
import HomePage from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Singup/Signup";
import Login from "./Components/Login/Login";
// import LoggedinUserDetails from "./Components/LoggedInUserDetails/LoggedInUserDetails";
import BookTable from "./Pages/BookTable/BookTable";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import RestaurentPage from "./Components/RestaurentPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const data = {
    image:
      "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/a/j/p20996-145631488756cd9a0796608.jpg?tr=tr:n-medium",
    rating: 4.2,
    resName: "Tamasha",
    "restnt-name-href":
      "https://www.dineout.co.in/delhi/tamasha-connaught-place-central-delhi-20996",
    address: "Connaught Place",
    "restnt-loc-href":
      "https://www.dineout.co.in/delhi-restaurants/central-delhi/connaught-place",
    location: "Central Delhi",
    "restnt-loc-href-2":
      "https://www.dineout.co.in/delhi-restaurants/central-delhi",
    price: "₹ 2000",
    category: "Continental",
    "double-line-ellipsis-href":
      "https://www.dineout.co.in/delhi-restaurants/continental-cuisine",
    "double-line-ellipsis-4": ",",
    category2: "Asian",
    "double-line-ellipsis-href-2":
      "https://www.dineout.co.in/delhi-restaurants/asian-cuisine",
    "double-line-ellipsis-6": ",",
    category3: "Italian",
    "double-line-ellipsis-href-3":
      "https://www.dineout.co.in/delhi-restaurants/italian-cuisine",
    "double-line-ellipsis-8": ",",
    category4: "North Indian",
    "double-line-ellipsis-href-4":
      "https://www.dineout.co.in/delhi-restaurants/north-indian-cuisine",
    btn: "Dineout Pay",
    "btn-href":
      "https://www.dineout.co.in/dineout-pay/instant-discount/how-it-works",
    "restnt-loc-4": "",
    "restnt-loc-href-3": "",
    id: 1,
  };
  return (
    <div className="App">
      <ChakraProvider>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/singup" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/book" element={<BookTable />} />
            <Route
              path="/restaurent/:id"
              element={<RestaurentPage data={data} />}
            />
          </Routes>

          <Footer />
        </Provider>
      </ChakraProvider>
    </div>
  );
}

// <div className="App">
//       <ChakraProvider>
//         <Provider store={store}>
//           <BookTable />
//         </Provider>
//       </ChakraProvider>
//     </div>
// import { ChakraProvider } from "@chakra-ui/react";

export default App;
