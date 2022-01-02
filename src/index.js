import ReactDOM from 'react-dom';

const product = 'Macbook'
const model = "Air";
const item = product + model;
const imageUrl = 'https://forum-creallo.s3.dualstack.ap-northeast-2.amazonaws.com/original/1X/5e0d906585d6dbbf7f3c9997484eee594bd01da1.jpeg'

ReactDOM.render(
  <>
  <h1>나만의 {product.toUpperCase()} 주문하기</h1>
  <img src={imageUrl} alt="어피치" />
  <button onClick={handleClick}>확인</button>
  </>,
  document.getElementById('root')
);