import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


function ProductCard(props) {
    // console.log('SSH !!',props.datasrc)

    const [tap, setTap] = useState(0);
    const [a, setA] = useState(0);

    let stars = [];
    for (let i = 0; i < 4; i++) {
        //   stars.push(i) += '<span></span>';
        stars.push(i);
    }

    const colorChange = (idx) => {
        // setA((prevIndex) => (prevIndex === idx ? "" : idx)); //클릭후 같은 자리 클릭하면 다시 원상복귀되는 오류발생
        setA((prevIndex) => (prevIndex === idx ? prevIndex : idx));
        //이전인덱스가 현재 인덱스와 같으면 이전인덱스, 아니면 현재인덱스
    }

    return (
        <section id="itemTitle" className="mb80 mt80 wrap container" >
            <h2 className="text-center">
                <a href="#closeTop" className="text-decoration-none scrollTop">
                    지금 당장 술 담아보기
                </a>
            </h2>
            <ul className="d-flex justify-content-around itemTitleBox">
                {
                    props.datasrc.map((v, idx) => {
                        console.log(v)
                        return (
                            <li className={`d-flex flex-column align-items-center itemTitle ${a === idx ? 'b' : ''}`} key={idx} onClick={() => {
                                //현재인덱스가 맵핑된 인덱스와 같으면 클래스 b를 넣어서 클릭한 글자색상을 바꿔준다.
                                setTap(idx)
                                colorChange(idx)//클릭한 리스트의 색상을 바꿔주는 함수호출
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
                        props.datasrc[tap].productinfo && (

                            props.datasrc[tap].productinfo.map((vv, i) => {
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
                                                {Array.from({ length: vv.starNum }, (_, index) => (
                                                    <span key={index}></span>
                                                ))}
                                                {/* Array.from은 새로운 배열을 만들거나 기존의 유사배열 객체나 반복가능한 객체를 배열로 변환하는 메서드이다. */}
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

export default ProductCard
