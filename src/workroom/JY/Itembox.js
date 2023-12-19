import React from 'react'

function Itembox() {
    return (
        <div className="itemImgWrap ">
            <div className="itemImgWrap_margin d-flex flex-wrap ">
                <div className="Imgbox gwashilju">
                    <div>
                        <a href="">
                            <img src="/assets/img/set/set01.jpg" alt="" />
                        </a>
                    </div>
                    <div className="ItemDesc">
                        <div className="productName "><a href="">샤인머스켓와인</a></div>
                        <div className="productPrice ">12000원</div>
                        <div className="starNum d-flex">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <p className="desc">달콤한 샤인머스켓 향이 듬뿍~</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Itembox
