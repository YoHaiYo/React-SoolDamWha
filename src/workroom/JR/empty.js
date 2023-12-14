import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    num: '',
    email: '',
    message: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 제출 로직을 여기에 추가하세요
    console.log('폼 데이터가 제출되었습니다:', formData);
  };

  return (
    <div className="contactbox d-flex">
      <form onSubmit={handleSubmit} name="contact-info" className="containe">
        <div className="text-center">
          <div className="d-flex justify-content-center align-content-center">
            <div id="n-c-e" className="d-flex flex-column">

              <div className="him h-100">
                <label htmlFor="name" className="me-4">이름</label>
                <input className="ms-4" type="text" name="name" placeholder="이름" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="him h-100">
                <label htmlFor="num">전화번호</label>
                <input type="text" name="num" placeholder="010-0000-0000" value={formData.num} onChange={handleChange} required />
              </div>

              <div className="him h-100">
                <label htmlFor="email">이메일</label>
                <input className="ms-3" type="email" name="email" placeholder="example@example.com" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="him h-100 w-100" id="c-m">
                <label htmlFor="message">메시지</label>
                <textarea id="message" name="message" cols="19" rows="5" placeholder="메세지를 입력해주세요^^" value={formData.message} onChange={handleChange} required style={{ backgroundColor: 'transparent' }}></textarea>
              </div>
            </div>

            <div className="him h-100" id="send">
              <div>
                <label htmlFor="agree">개인정보수집 이용 동의</label>
                <input type="checkbox" id="agree" name="agree" checked={formData.agree} onChange={handleChange} />
                <input type="submit" name="send-btn" value="보내기" className="sooldam-btn mt-3" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;