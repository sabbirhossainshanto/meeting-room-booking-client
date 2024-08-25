import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css"
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.tsx";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
    <Toaster />
  </React.StrictMode>
);
