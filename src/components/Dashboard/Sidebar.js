import React from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'

function Sidebar(props) {
    const [user, setUser] = React.useState()
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        axios.get("http://127.0.0.1:4000/employee/me", {
            headers: {
                'Authorization': 'Bearer ' + Cookies.get("auth")
            }
        }).then(response => { setUser(response.data); setLoading(false) })
    }, [])
    return (
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="sidebar-sticky pt-3">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class={!props.name ? "nav-link active" : "nav-link"} href="/dashboard">
                            <span data-feather="home"></span>
                            {props.name !== "Dashboard" ? <>Dashboard</> : <>Dashboard <span className="sr-only">(current)</span></>}
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class={props.name === "Inquiries" ? "nav-link active" : "nav-link"} href="/dashboard/Inquiries">
                            <span data-feather="file"></span>
                            {props.name === "Inquiries" ? <>Inquiries <span className="sr-only">(current)</span></> : <>Inquiries</>}
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class={props.name === "Products" ? "nav-link active" : "nav-link"} href="/dashboard/Products">
                            <span data-feather="shopping-cart"></span>
                            {props.name === "Products" ? <>Products <span className="sr-only">(current)</span></> : <>Products</>}
                        </a>
                    </li>
                    {!loading && user.isAdmin && <li class="nav-item">
                        <a class={props.name === "Create" ? "nav-link active" : "nav-link"} href="/dashboard/Create">
                            <span data-feather="shopping-cart"></span>
                            {props.name === "Create" ? <>Create Employee <span className="sr-only">(current)</span></> : <>Create Employee</>}
                        </a>
                    </li>}

                </ul>


            </div>
        </nav>
    )
}

export default Sidebar