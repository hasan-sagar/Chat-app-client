import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ChatContextProvider from "./context/ChatContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChatContextProvider>
        <ChakraProvider>
          <Toaster />
          <App />
        </ChakraProvider>
      </ChatContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
