import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function colorChange() {
    var itemTitles = document.querySelectorAll(".itemTitle");

    itemTitles.forEach(function (itemTitle) {
        itemTitle.addEventListener('click', function () {
            this.style.color = "#3395ED";

            itemTitles.forEach(function (otherItemTitle) {
                if (otherItemTitle !== itemTitle) {
                    otherItemTitle.style.color = "";
                }
            });

        });
    });
}
function Category(props) {
    const [tap, setTap] = useState(0)
    return (
        <section section id="itemTitle" className="mb80 mt80 wrap container" >
            <h2 className="text-center">
                <a href="#closeTop" className="text-decoration-none scrollTop">
                    지금 당장 술 담아보기
                </a>
            </h2>
            <ul className="d-flex justify-content-around itemTitleBox">
                {
                    props.sdhdt.map((v, idx) => {
                        return (
                            <li className="d-flex flex-column align-items-center itemTitle" key={idx} onClick={() => {
                                setTap(idx)
                                colorChange()
                            }}>
                                <img src={v.imgsrc} alt="담화박스" />
                                <div className="itemTitle">{v.categorytitle}</div>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="itemImgWrap ">
                <div className="itemImgWrap_margin d-flex flex-wrap ">

                    {
                        props.sdhdt[tap].productinfo && (

                            props.sdhdt[tap].productinfo.map((vv, i) => {
                                return (
                                    <div className="Imgbox gwashilju">
                                        <div>
                                            <a href="">
                                                <img src={vv.imgsrc} alt="" />
                                            </a>
                                        </div>
                                        <div className="ItemDesc">
                                            <div className="productName "><a href="">{vv.productName}</a></div>
                                            <div className="productPrice ">{vv.productPrice}</div>
                                            <div className="starNum d-flex">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                            <p className="desc">{vv.desc}</p>
                                        </div>
                                    </div>

                                )
                            })
                        )
                    }


                </div>
            </div>

        </section >

    )
}

export default Category
