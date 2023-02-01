import React from "react"
import { Routes, Route } from "react-router"
import Home from "./cmps/home"
import AppHeader from "./cmps/app-header"
import "../src/assets/styles/main.scss"
import AppFooter from "./cmps/app-footer"

const App = () => {
  return (
    <div className="app">
      <div className="main-header">
        <AppHeader />
      </div>
      <main className="main-content">
        <Home />
      </main>
      <AppFooter />
    </div>
  )
}

export default App
