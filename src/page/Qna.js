import { useRef, useState } from "react";
import React from 'react'

const Qna = () => {
  const faq = useRef(null);
  const [shownum, numupdate] = useState(null);
  const precont = [
    {
        h3: "구독 서비스에 대해서 알려주셈",
        div: "음... 일단 구독을 하시면 알게될겁니다 ^^"
    },
    {
        h3: "배송은 얼마나 걸리나요?",
        div: "3일 안에 배송 되며, 오후 3시 이전 주문건은 당일 출고 입니다!"
    },
    {
        h3: "구독했다가 상품 변경하고 싶을 때는 어케하쥬?",
        div: "마이페이지 가셔서 변경하시면 됩니다."
    },
    {
        h3: "술담화 오프라인 매장은 없나용?",
        div: "유감스럽지만 아직 오프라인 매장은 없습니다."
    },

    ]
  //문자.split('구분기호') -> array타입으로 전환 
  //(문자를 정렬데이터로 변환하는 아주 중요한 메서드)
    return (
            <section ref={faq}>
            <h2>면접전에 봐주세요.</h2>
            <ul>
                {
                precont.map((e, i) => {
                    return (
                    <li key={i}>
                        <h3 onClick={()=>{numupdate(i)}}>{e.h3}</h3>

                        {shownum === i && <div>{
                        e.div.split('/').map((e, i) => {
                            return (
                            <React.Fragment key={i}>
                                {e}
                                <br />
                            </React.Fragment>
                            )
                        })
                        }</div>
                        }
                    </li>
                    );
                })
                }
            </ul>
        </section>
    )
}

export default Qna;