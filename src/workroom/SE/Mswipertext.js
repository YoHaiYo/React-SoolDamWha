import React from 'react'
import Msdb from '../../data/MainSwiper.json'
function Mswipertext() {
    return (
        <div className='effecttext'>
            {
                Msdb.effecttext.map((el, idx) => {
                    return (
                        `<strong>${el.strong}</strong>
                        <p>${el.Mtext}</p>`

                    )
                })
            }
        </div>
    )
}

export default Mswipertext
