import React, { FunctionComponent } from "react"
import { Header, Footer } from "./components"
// Layout -> Header, Footer, Content

export const Layout: FunctionComponent = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex-1 px-6">{children}</div>
    <Footer />
  </div>
)
