import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children:[
    //children will go wherever the outlet is
    {
      path: "/",
     element: <MainContainer />
    },
    {
      path: "watch",
     element: <WatchPage />
    },

  ]
}])

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
        <Head/>
        <RouterProvider router={appRouter}/>

        {/**
         * Head
         * boDY 
         * Sidebar
         *  Menu Items
         * Main Container 
         *  ButtonList
         *  Video Container 
         *    VideoCard
         */}
    </div>
    </Provider>
  );
}

export default App;
