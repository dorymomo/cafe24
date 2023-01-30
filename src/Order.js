import React from 'react';



const order = () => {
    
    return (
      <p>
        <h4>주문 정보 </h4>

        <label>
          수량을 선택
          <input type="number" name="number_select" min="1" max="10"></input>
        </label>

        <button onClick={()=>{alert('구매완료')}}>주문확인</button>

      </p>
    );
};

export default order;
