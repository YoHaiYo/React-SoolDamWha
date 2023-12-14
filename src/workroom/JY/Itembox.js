import React from 'react'
import itemtileico from '../../data/itemTitleIco.json'

function Itembox() {
    return (
        <div>
            <ul className="d-flex justify-content-around itemTitleBox">
                {
                    itemtileico.itemTitle.map((el, idx) => {
                        return <li className="d-flex flex-column align-items-center menu" data-filter=".set">
                            <img src={el.img} alt="담화박스" />
                            <div className="itemTitle">담화박스</div>
                        </li>
                    })
                }
               
            </ul>
        </div>
    )
}

export default Itembox
