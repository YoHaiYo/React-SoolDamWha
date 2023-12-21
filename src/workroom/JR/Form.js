import React from 'react';

function Form() {
  return (
    <>
      <div className='him h-100'>
        <label htmlFor="formnm">이름</label>
        <input className='ms-4' type='text' name='name' placeholder='이름' required />
      </div>
      <div className='him h-100'>
        <label htmlFor="formnum">전화번호</label>
        <input className='ms-4' type='text' name='num' placeholder=' - 제외 번호만 작성해주세요.' required />
      </div>
      <div className='him h-100'>
        <label htmlFor="formemail">이메일</label>
        <input className='ms-3' type='email' name='email' placeholder='example@example.com' required />
      </div>
      <div className='him h-100 w-100' id='c-m'>
        <label htmlFor="formessage">메세지</label>
        <textarea id='message' name='message' placeholder='메세지를 입력해주세요.' required className='bg-transparent'></textarea>
      </div>
    </>
  );
}

export default Form;
