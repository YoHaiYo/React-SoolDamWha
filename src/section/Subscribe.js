import React from 'react'
import SubscribeCard from '../workroom/SH/SubscribeCard'
import { Link } from 'react-router-dom';



function Subscribe(props) {
  return (
    <>
      <section id="subscribe" className="wrap text-center mb-5">

        <h2><a href="">{props.datasrc.etc.title}</a></h2>

        <div className="subscribe-main-wrap d-flex justify-content-around">
          <SubscribeCard datasrc={props.datasrc.item} />
        </div>

        <Link to={`/subscribe`}>
          <button className="ssh--btn-apply">{props.datasrc.etc.btn}</button>
        </Link>

      </section>

    </>
  )
}

export default Subscribe