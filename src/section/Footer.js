import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Footer(props) {
  return (
    <footer id="fd">
      <div className="container">
        <h2><a href="#none"></a></h2>
        {
          props.datasrc.map((el, i) => {
            return (
              <div className="fdinfoArea d-md-flex justify-content-between">
                <div className="ftinfo ">
                  <div className="ftdesc d-none d-md-block">
                    <p>{el.representative}</p>
                    <p>{el.business}</p>
                    <p>{el.address}</p>
                    <p>{el.call}</p>
                    <p>{el.email}</p>
                  </div>
                  <ul className="ftinfoUrl d-flex justify-content-center justify-content-lg-start">
                    <li><a href="#none">{el.Privacy}</a></li>
                    <li><a href="#none">{el.terms}</a></li>
                    <li><a href="#none">{el.StoreEntryInquiry}</a></li>
                  </ul>
                </div>
                <div className="rightFtInfo">
                  <span>{el.company}</span>
                  <p>{el.serviceCenter}</p>
                  <p>{el.time}</p>
                  <ul className="sns d-flex justify-content-between">
                    <li><a href="#none"><i className="bi bi-facebook"></i></a></li>
                    <li><a href="#none"><i className="bi bi-instagram"></i></a></li>
                    <li><a href="#none"><i className="bi bi-twitter"></i></a></li>
                    <li><a href="#none"><i className="bi bi-youtube"></i></a></li>
                    <li><a href="#none"><i className="bi bi-google"></i></a></li>
                  </ul>

                </div>
                <div className="ftdesc d-md-none">
                  <p>{el.representative}</p>
                  <p>{el.business}</p>
                  <p>{el.address}</p>
                  <p>{el.call}</p>
                  <p>{el.email}</p>
                </div>
              </div>
            )
          })

        }

      </div>


    </footer>
  )
}

export default Footer