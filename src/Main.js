import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ModalBasic from "./Modalmenu/ModalBasic.js";

//document.writeln("<script type='text/javascript' src='modal.js'></script>");
const Main = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const [juiceTitle, setJuiceTitle] = useState();
  const [img, setImg] = useState();

  const yogurt = useRef([]);
  const moca = useRef([]);
  const latte = useRef([]);
  const tea = useRef([]);
  const htea = useRef([]);
  const dessert = useRef([]);

  // 모달창 노출
  const showModal = (e) => {
    setJuiceTitle(e.target.nextSibling.childNodes[0].innerText);
    setImg(e.target.attributes[0].nodeValue);
    setModalOpen(true);
  };

  return (
    <div>
      <div class="logocenter">
        <a href="/">
          <img src="./image/logo3.png"></img>
        </a>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <form action="" method="POST" class="right">
        <div class="input-box">
          <input
            id="username"
            type="text"
            name="username"
            placeholder="아이디"
          />
        </div>

        <div class="input-box">
          <input
            id="password"
            type="password"
            name="password"
            placeholder="비밀번호"
          />
        </div>
        <input type="submit" value="로그인" />
        <a href="/SignUp">
          <input type="submit" value="회원가입" />
        </a>
      </form>
      <div>
        <h3>카페 종류 </h3> <br></br>
        <div class="check1">
          <div class="form-check">
          <input  class="form-check-input" type="checkbox" id="flexCheckDefault" 
          onClick={(e)=>{
            // console.log(e.currentTarget.checked)
            // console.log(yogurt.current);
            if(e.currentTarget.checked === true){
              yogurt.current.forEach((item, i)=>{
                console.log(item);
                item.style.display = "flex";
              })
              moca.current.forEach((item, i)=>{
                item.style.display = "flex";
              })
              latte.current.forEach((item, i)=>{
                item.style.display = "flex";
              })
              tea.current.forEach((item, i)=>{
                item.style.display = "flex";
              })
              htea.current.forEach((item, i)=>{
                item.style.display = "flex";
              })
              dessert.current.forEach((item, i)=>{
                item.style.display = "flex";
              })
            } else{
                yogurt.current.forEach((item, i)=>{
                  console.log(item);
                  item.style.display = "none";
                })
                moca.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
                latte.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
                tea.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
                htea.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
                dessert.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
            }
          }
          }></input>
          <label class="form-check-label" for="flexCheckDefault">
            ALL
            
          </label>
          </div>
          <div class="form-check">
          <input  class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
          onClick={(e)=>{
            if(e.currentTarget.checked === true){
              yogurt.current.forEach((item, i)=>{
                console.log(item);
                item.style.display = "flex";
              })
              moca.current.forEach((item, i)=>{
                item.style.display = "none";
              })
              latte.current.forEach((item, i)=>{
                item.style.display = "none";
              })
              tea.current.forEach((item, i)=>{
                item.style.display = "none";
              })
              htea.current.forEach((item, i)=>{
                item.style.display = "none";
              })
              dessert.current.forEach((item, i)=>{
                item.style.display = "none";
              })
            } else{
                yogurt.current.forEach((item, i)=>{
                  console.log(item);
                  item.style.display = "none";
                })
                moca.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
                latte.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
                tea.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
                htea.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
                dessert.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
            }
          }
          }></input>
          <label class="form-check-label" for="flexCheckDefault">
            요거스
          </label>
          </div>
          <div class="form-check">
          <input  class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
          onClick={(e)=>{
            if(e.currentTarget.checked === true){
              yogurt.current.forEach((item, i)=>{
                console.log(item);
                item.style.display = "none";
              })
              moca.current.forEach((item, i)=>{
                item.style.display = "flex";
              })
              latte.current.forEach((item, i)=>{
                item.style.display = "none";
              })
              tea.current.forEach((item, i)=>{
                item.style.display = "none";
              })
              htea.current.forEach((item, i)=>{
                item.style.display = "none";
              })
              dessert.current.forEach((item, i)=>{
                item.style.display = "none";
              })
            } else{
                yogurt.current.forEach((item, i)=>{
                  console.log(item);
                  item.style.display = "none";
                })
                moca.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
                latte.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
                tea.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
                htea.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
                dessert.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
            }
          }
          }
          ></input>
          <label class="form-check-label" for="flexCheckDefault">
            음료
          </label>
          </div>
          <div class="form-check">
          <input  class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
          onClick={(e)=>{
          
            if(e.currentTarget.checked === true){
              yogurt.current.forEach((item, i)=>{
                console.log(item);
                item.style.display = "none";
              })
              moca.current.forEach((item, i)=>{
                item.style.display = "none";
              })
              latte.current.forEach((item, i)=>{
                item.style.display = "flex";
              })
              tea.current.forEach((item, i)=>{
                item.style.display = "none";
              })
              htea.current.forEach((item, i)=>{
                item.style.display = "none";
              })
              dessert.current.forEach((item, i)=>{
                item.style.display = "none";
              })
            } else{
                yogurt.current.forEach((item, i)=>{
                  console.log(item);
                  item.style.display = "none";
                })
                moca.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
                latte.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
                tea.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
                htea.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
                dessert.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
            }
          }
          }></input>
          <label class="form-check-label" for="flexCheckDefault">
            라떼
          </label>
          </div>
          <div class="form-check">
          <input  class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
          onClick={(e)=>{
            if(e.currentTarget.checked === true){
              yogurt.current.forEach((item, i)=>{
                console.log(item);
                item.style.display = "none";
              })
              moca.current.forEach((item, i)=>{
                item.style.display = "none";
              })
              latte.current.forEach((item, i)=>{
                item.style.display = "none";
              })
              tea.current.forEach((item, i)=>{
                item.style.display = "none";
              })
              htea.current.forEach((item, i)=>{
                item.style.display = "flex";
              })
              dessert.current.forEach((item, i)=>{
                item.style.display = "none";
              })
            } else{
                yogurt.current.forEach((item, i)=>{
                  console.log(item);
                  item.style.display = "none";
                })
                moca.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
                latte.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
                tea.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
                htea.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
                dessert.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
            }
          }
          }></input>
          <label class="form-check-label" for="flexCheckDefault">
            차
          </label>
          </div>
          <div class="form-check">
          <input  class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
          onClick={(e)=>{
            if(e.currentTarget.checked === true){
              yogurt.current.forEach((item, i)=>{
                console.log(item);
                item.style.display = "none";
              })
              moca.current.forEach((item, i)=>{
                item.style.display = "none";
              })
              latte.current.forEach((item, i)=>{
                item.style.display = "none";
              })
              tea.current.forEach((item, i)=>{
                item.style.display = "none";
              })
              htea.current.forEach((item, i)=>{
                item.style.display = "none";
              })
              dessert.current.forEach((item, i)=>{
                item.style.display = "flex";
              })
            } else{
                yogurt.current.forEach((item, i)=>{
                  console.log(item);
                  item.style.display = "none";
                })
                moca.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
                latte.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
                tea.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
                htea.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
                dessert.current.forEach((item, i)=>{
                  item.style.display = "none";
                })
            }
          }
          }></input>
          <label class="form-check-label" for="flexCheckDefault">
            디저트
          </label>
          </div>        
        </div>
      </div><br></br> <br></br><br></br><br></br><br></br>
      <div class="logo"> 
        <h3> MENU </h3>
      </div><br></br><br></br>
      <div class="menu">
        <ul style={{display:"flex", flexWrap: "wrap" }}>
          
            <li ref={e=>(yogurt.current[0] = e)}>
            <div class="img-box">
              <a onClick={showModal}>
                <div class="imgC">
                  <img src="/image/ex1.jpg" width="200" height="200"></img>
                  <div class="txt-box">
                    <h4>복숭아 요거스</h4>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li ref={e=>(yogurt.current[1] = e)}>
            <div class="img-box">
              <a onClick={showModal}>
                <div class="imgC">
                  <img src="/image/ex2.jpg" width="200" height="200"></img>
                  <div class="txt-box">
                    <h4>딸기 요거스</h4>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li ref={e=>(yogurt.current[2] = e)}>
            <div class="img-box">
              <a onClick={showModal}>
                <div class="imgC">
                  <img src="/image/ex3.jpg" width="200" height="200"></img>
                  <div class="txt-box">
                    <h4>플레인 요거스</h4>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li ref={e=>(yogurt.current[3] = e)}>
            <div class="img-box">
              <a onClick={showModal}>
                <div class="imgC">
                  <img src="/image/ex4.jpg" width="200" height="200"></img>
                  <div class="txt-box">
                    <h4>블루베리 요거스</h4>
                  </div>
                </div>
              </a>
            </div>
          </li>
          
          <li ref={e=>(moca.current[0] = e)}>
            <div class="img-box1">
              <a onClick={showModal}>
                <div class="imgC">
                  <img src="/image/exc1.png" width="200" height="200"></img>
                  <div class="txt-box">
                    <h4>콜드브루</h4>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li ref={e=>(moca.current[1] = e)}>
            <div class="img-box1">
              <a onClick={showModal}>
                <div class="imgC">
                  <img src="/image/exc2.png" width="200" height="200"></img>
                  <div class="txt-box">
                    <h4>바닐라 라떼</h4>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li ref={e=>(moca.current[2] = e)}>
            <div class="img-box1">
              <a onClick={showModal}>
                <div class="imgC">
                  <img src="/image/exc3.png" width="200" height="200"></img>
                  <div class="txt-box">
                    <h4>토피 더 샷 토피 </h4>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li ref={e=>(moca.current[3] = e)}>
            <div class="img-box1">
              <a onClick={showModal}>
                <div class="imgC">
                  <img src="/image/exc4.png" width="200" height="200"></img>
                  <div class="txt-box">
                    <h4>카페모카</h4>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li ref={e=>(latte.current[0] = e)}>
            <div class="img-box1">
              <a onClick={showModal}>
                <div class="imgC">
                  <img src="/image/ec1.png" width="200" height="200"></img>
                  <div class="txt-box">
                    <h4>쿠앤크라떼</h4>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li ref={e=>(latte.current[1] = e)}>
            <div class="img-box1">
              <a onClick={showModal}>
                <div class="imgC">
                  <img src="/image/ec2.jpg" width="200" height="200"></img>
                  <div class="txt-box">
                    <h4>자색고구마라떼</h4>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li ref={e=>(latte.current[2] = e)}>
            <div class="img-box1">
              <a onClick={showModal}>
                <div class="imgC">
                  <img src="/image/ec3.jpg" width="200" height="200"></img>
                  <div class="txt-box">
                    <h4>샤이닝 슈가</h4>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li ref={e=>(latte.current[3] = e)}>
            <div class="img-box1">
              <a onClick={showModal}>
                <div class="imgC">
                  <img src="/image/ec4.jpg" width="200" height="200"></img>
                  <div class="txt-box">
                    <h4>민트초코라떼 </h4>
                  </div>
                </div>
              </a>
            </div>
          </li>
          

          
          <li ref={e=>(tea.current[0] = e)} >
            <div class="img-box1">
              <a onClick={showModal}>
                <div class="imgC">
                  <img src="/image/te1.jpg" width="200" height="200"></img>
                  <div class="txt-box">
                    <h4>오렌지 주스</h4>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li ref={e=>(tea.current[1] = e)}>
            <div class="img-box1">
              <a onClick={showModal}>
                <div class="imgC">
                  <img src="/image/te2.jpg" width="200" height="200"></img>
                  <div class="txt-box">
                    <h4>수박 주스</h4>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li ref={e=>(tea.current[2] = e)}>
            <div class="img-box1">
              <a onClick={showModal}>
                <div class="imgC">
                  <img src="/image/te3.jpg" width="200" height="200"></img>
                  <div class="txt-box">
                    <h4>레몬에이드</h4>
                  </div>
                </div>
              </a>
            </div>
          </li>
          
          <li ref={e=>(htea.current[0] = e)}>
            <div class="img-box1">
              <a onClick={showModal}>
                <div class="imgC">
                  <img src="/image/tc1.jpg" width="200" height="200"></img>
                  <div class="txt-box">
                    <h4>옐로우 허그티</h4>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li ref={e=>(htea.current[1] = e)}>
            <div class="img-box1">
              <a onClick={showModal}>
                <div class="imgC">
                  <img src="/image/tc2.jpg" width="200" height="200"></img>
                  <div class="txt-box">
                    <h4>유자차</h4>
                  </div>
                </div>
              </a>
            </div>
          </li>
          
          <li ref={e=>(dessert.current[0] = e)}>
            <div class="img-box1">
              <a onClick={showModal}>
                <div class="imgC">
                  <img src="/image/de1.png" width="200" height="200"></img>
                  <div class="txt-box">
                    <h4>스트로베리</h4>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li ref={e=>(dessert.current[1] = e)}>
            <div class="img-box1">
              <a onClick={showModal}>
                <div class="imgC">
                  <img src="/image/de2.png" width="200" height="200"></img>
                  <div class="txt-box">
                    <h4>허쉬 초코 멜로 쿠키</h4>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li ref={e=>(dessert.current[2] = e)}>
            <div class="img-box1">
              <a onClick={showModal}>
                <div class="imgC">
                  <img src="/image/de3.png" width="200" height="200"></img>
                  <div class="txt-box">
                    <h4>콤비네이션 피자</h4>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li ref={e=>(dessert.current[3] = e)}>
            <div class="img-box1">
              <a onClick={showModal}>
                <div class="imgC">
                  <img src="/image/de4.jpg" width="200" height="200"></img>
                  <div class="txt-box">
                    <h4>딸기잼</h4>
                  </div>
                </div>
              </a>
            </div>
          </li>
          
          
        </ul>
      </div>
      {modalOpen && <ModalBasic setModalOpen={setModalOpen} juiceTitle={juiceTitle} img={img}/>}
    </div>
  );
};

export default Main;
