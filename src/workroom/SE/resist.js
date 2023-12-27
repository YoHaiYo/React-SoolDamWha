import React from 'react'

function Resist() {
    return (
        <div>
            <ul id="login" className='d-flex resistabs'>
                <li className='me-5'><a href="#">로그인</a></li>
                <li className='me-5'><a href="#">회원가입</a></li>

                <li>

                    <select>
                        <option value="en">English</option>
                        <option value="ko" selected>한국어</option>
                    </select>
                </li>
            </ul>
        </div>
    )
}

export default Resist
