import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Footer(props) {
  return (
    <footer id="fd">
      <div class="container">
        <h2><a href=""></a></h2>
        {
          props.datasrc.map((el, i) => {
            return (
              <div class="fdinfoArea d-flex justify-content-between">
                <div class="ftinfo">
                  <div class="ftdesc">
                    <p>{el.representative}</p>
                    <p>{el.business}</p>
                    <p>{el.address}</p>
                    <p>{el.call}</p>
                    <p>{el.email}</p>
                  </div>
                  <ul class="ftinfoUrl d-flex">
                    <li><a href="">{el.Privacy}</a></li>
                    <li><a href="">{el.terms}</a></li>
                    <li><a href="">{el.StoreEntryInquiry}</a></li>
                  </ul>
                </div>
                <div class="rightFtInfo">
                  <span>{el.company}</span>
                  <p>{el.serviceCenter}</p>
                  <p>{el.time}</p>
                  <ul class="sns d-flex justify-content-between">
                    <li><a href=""><i class="bi bi-facebook"></i></a></li>
                    <li><a href=""><i class="bi bi-instagram"></i></a></li>
                    <li><a href=""><i class="bi bi-twitter"></i></a></li>
                    <li><a href=""><i class="bi bi-youtube"></i></a></li>
                    <li><a href=""><i class="bi bi-google"></i></a></li>
                  </ul>
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
