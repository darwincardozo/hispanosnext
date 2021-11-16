import React from 'react'

const Footer = () => {
  return (

    <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">

      <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
        {/*begin::Container*/}
        <div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
          {/*begin::Copyright*/}
          <div className="text-dark order-2 order-md-1">
            <span className="text-muted fw-bold me-1">2021©</span>
            <a href="https://keenthemes.com" target="" className="text-gray-800 text-hover-primary">Keenthemes</a>
          </div>
          {/*end::Copyright*/}
          {/*begin::Menu-footer*/}
          <ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
            <li className="menu-item">
              <a href="https://keenthemes.com" target="" className="menu-link px-2">About</a>
            </li>
            <li className="menu-item">
              <a href="https://keenthemes.com/support" target="" className="menu-link px-2">Support</a>
            </li>
            <li className="menu-item">
              <a href="https://1.envato.market/EA4JP" target="" className="menu-link px-2">Purchase</a>
            </li>
          </ul>
          {/*end::Menu -footer*/}
        </div>
        {/*end::Container*/}
      </div>
    </div>

  )
}

export default Footer
