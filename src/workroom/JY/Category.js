import React from 'react'

function Category(props) {
    return (
        <div>
            <ul className="d-flex justify-content-around itemTitleBox">
                {
                    props.sdhdt.map((v, idx) => {
                        return <li className="d-flex flex-column align-items-center menu" data-filter=".set">
                            <img src={v.img} alt="담화박스" />
                            <div className="itemTitle">{v.nm}</div>
                        </li>
                    })
                }

            </ul>
        </div>
    )
}

export default Category
