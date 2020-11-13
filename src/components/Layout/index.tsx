import React, { FunctionComponent } from "react"
import { Header, Footer } from "./components"
// Layout -> Header, Footer, Content

export const Layout: FunctionComponent = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex-1 px-6">
      <div className="flex flex-col items-center">
        <div className="max-w-none lg:max-w-screen-4xl">{children}</div>
      </div>
    </div>
    <Footer />
  </div>
)
