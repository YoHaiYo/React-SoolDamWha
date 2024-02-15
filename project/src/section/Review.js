import React from 'react'
import ReviewCard from '../workroom/JR/Reviwecard'

function Review() {
  return (
    <>

      <section id="review" className="mb-5">
        <h2 className="text-center"><a href="#none">실시간 상품후기</a></h2>
        <div id="photoRvbox" className="d-flex justify-content-center align-content-center">
          <ReviewCard />

        </div>
      </section >
    </>
  )
}

export default Review