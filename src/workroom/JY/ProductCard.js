import 'bootstrap/dist/css/bootstrap.min.css'


function ProductCard({ datasrc, tap }) {

    let stars = [];
    for (let i = 0; i < 4; i++) {
        //   stars.push(i) += '<span></span>';
        stars.push(i);
    }

    return (
        <div className="itemImgWrap ">
            <div className="itemImgWrap_margin d-flex flex-wrap justify-content-center ">
                {
                    datasrc[tap].productinfo && (

                        datasrc[tap].productinfo.slice(0, 8).map((vv, i) => {
                            return (
                                <div className="Imgbox gwashilju" key={i}>
                                    <div>
                                        <a href="#none">
                                            <img key={i} src={vv.imgsrc} alt="" />
                                        </a>
                                    </div>
                                    <div className="ItemDesc">
                                        <div className="productName "><a href="#none">{vv.productName}</a></div>
                                        <div className="productPrice ">{vv.productPrice}</div>
                                        <div className="starNum d-flex">
                                            {Array.from({ length: vv.starNum }, (_, index) => (
                                                <span key={index}></span>
                                            ))}
                                            {/* Array.from은 새로운 배열을 만들거나 기존의 유사배열 객체나 반복가능한 객체를 배열로 변환하는 메서드이다. */}
                                        </div>
                                        <p className="desc" key={i}>{vv.desc}</p>
                                    </div>
                                </div>

                            )
                        })
                    )
                }
            </div>
        </div>

    )
}

export default ProductCard