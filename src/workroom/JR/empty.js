import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSubmit} name="contact-info">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">이름</label>
              <input type="text" className="form-control" name="name" placeholder="이름" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label htmlFor="num" className="form-label">전화번호</label>
              <input type="text" className="form-control" name="num" placeholder="010-0000-0000" value={formData.num} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">이메일</label>
              <input type="email" className="form-control" name="email" placeholder="example@example.com" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">메시지</label>
              <textarea className="form-control" id="message" name="message" rows="5" placeholder="메세지를 입력해주세요^^" value={formData.message} onChange={handleChange} required></textarea>
            </div>

            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="agree" name="agree" checked={formData.agree} onChange={handleChange} />
              <label className="form-check-label" htmlFor="agree">개인정보수집 이용 동의</label>
            </div>

            <button type="submit" className="btn btn-primary">보내기</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1 className="text-center mt-5">React Contact Form</h1>
      <ContactForm />
    </div>
  );
};

export default App;
