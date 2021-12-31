import ReactDOM from 'react-dom';

const product = 'Macbook'

ReactDOM.render(
  <h1>나만의 {product.toUpperCase()} 주문하기</h1>,
  document.getElementById('root')
);