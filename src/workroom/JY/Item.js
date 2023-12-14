import React from 'react';
import Itembox from './Itembox';


function Item() {
    return (
        <section id="itemTitle" className="mb80 mt80 wrap">
            <h2 className="text-center"><a href="#closeTop" className="text-decoration-none scrollTop">지금 당장 술 담아보기</a></h2>
            <Itembox></Itembox>

            <div className="itemImgWrap ">
                <div className="itemImgWrap_margin d-flex flex-wrap ">
                    <div className="Imgbox gwashilju">
                        <a href="">
                            <span><img src="/assets/img/set/set01.jpg" alt="" /></span>
                            <div className="ItemDesc">
                                <div className="productName ">샤인머스켓와인</div>
                                <div className="productPrice ">12000원</div>
                                <div className="starNum d-flex">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <p className="desc">달콤한 샤인머스켓 향이 듬뿍~</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </section>




    )
}

export default Item
