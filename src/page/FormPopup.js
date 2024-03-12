import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { MoreButton } from '../styled/Btns'
import { textData } from './Curation';
import  xicon  from '../workroom/JY/icon_close.svg'

function FormPopup({ setGudock, gudock, bringData }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    //폼 제출을 처리
    const handleClick = () => {
        setGudock((prevstate) => !prevstate);
        reset();
    }
    const onSubmit = async (data) => {
        // try {
        //     // '/api/o_form' 엔드포인트로 POST 요청을 보냄
        //     const formresponse = await axios.post('/api/o_form', {
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: data
        //     });
        //     console.log("온거", formresponse);
        //     console.log("간거", data)
        //     alert('신청되었습니다!')

        //     if (formresponse.data) {
        //         setContent(true)
        //     }
        // } catch (error) {
        //     console.error('폼 데이터 제출 오류:', error);
        // }

    }


    return (
        <div className={`gudockForm ${gudock ? 'd-block' : ""}`}>

            <div className='border-0 close' onClick={handleClick}><img src={xicon} alt="닫기" /></div>
            <form onSubmit={handleSubmit(onSubmit)} className='sooldamform mx-auto mt-5'>
                <div className='m-2'>
                    <input type="text" {...register("u_name", { required: true })} placeholder='이름' className='border w-100 p-2' />
                    {errors.u_name && <p>이름을 입력하세요</p>}
                </div>
                <div className='m-2'>
                    <input type="text" {...register("u_phone", { required: true })} placeholder='전화번호' className='border w-100 p-2' />
                    {errors.u_phone && <p>전화번호를 입력하세요</p>}
                </div>
                <div className='m-2'>
                    <input type="email" {...register("u_email", { required: true })} placeholder='메일주소' className='border w-100 p-2' />
                    {errors.u_email && <p>메일주소를 입력하세요</p>}
                </div>
                <div className='m-2'>
                    <select name="drink" id="drink" className='border w-100' {...register("u_select", { required: true })}>
                        {/* <option value="" disabled selected hidden>선택하세요</option> */}
                        {
                            bringData === 0 ? <option value="종합 담화박스">종합 담화박스</option> : null
                        }
                        {
                            bringData === 1 ? <option value="청주 담화박스">청주 담화박스</option> : null
                        }
                        {
                            bringData === 2 ? <option value="증류주 담화박스">증류주 담화박스</option> : null
                        }
                    </select>
                    {errors.u_select && <p>담화박스를 선택하세요</p>}
                </div>
                <div className='m-2'>
                    <textarea type="text"{...register("board", { required: false })} placeholder='문의사항' className='border w-100 p-2' />
                </div>
                <MoreButton type='submit' className='mx-auto d-block mt-5 mb-5'>구독 신청하기</MoreButton>
            </form>
        </div >

    )
}

export default FormPopup
