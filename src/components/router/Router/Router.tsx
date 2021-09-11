import React from "react"
import { BrowserRouter } from "react-router-dom"
import Nav from "../Nav"
import Switch from "../Switch"

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <hr />
        <Switch />
      </div>
    </BrowserRouter>
  )
}

export default Router
