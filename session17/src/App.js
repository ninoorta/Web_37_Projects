import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainNav from './component/parts/MainNav'
import Routes from './Routes'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app container">
                    <MainNav />
                    <Routes />
                </div>
            </BrowserRouter>

        )
    }
}

export default App





            // <BrowserRouter>
            //     <div className="app">
            //         <ul>
            //             <li>
            //                 <Link to="/">Home</Link>
            //             </li>
            //             <li>
            //                 <Link to="/about">About</Link>
            //             </li>
            //             <li>
            //                 <Link to="/about/child">About Child</Link>
            //             </li>
            //             <li>
            //                 <Link to="/profile">Profile</Link>
            //             </li>
            //         </ul>
            //         <Switch>
            //             <Route path="/about/child">
            //                 <div>About Child</div>
            //             </Route>
            //             <Route path="/about">
            //                 <div>About</div>
            //             </Route>
            //             <Route path="/profile">
            //                 <div>Profile</div>
            //             </Route>
            //             {/* Path con để lên trước 
            //                 Path cha để cuối cùng */}
            //             <Route path="/">
            //                 <div>Home</div>
            //             </Route>
            //         </Switch>
            //     </div>
            // </BrowserRouter>