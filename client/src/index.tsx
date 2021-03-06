import "./components/dev/wdyr"

import "react-hot-loader"

import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { hot } from "react-hot-loader/root"
import reportWebVitals from "./reportWebVitals"
import { StyledEngineProvider } from "@mui/material"
import { BrowserRouter } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"
import { Provider } from "react-redux"
import { store } from "./redux/store"

let persistor = persistStore(store)

const HotApp = hot(App)

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <HotApp />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </StyledEngineProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
