import React from "react";
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
        <div class="navbar navbar-expand-sm bg-white navbar-light absol">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    커피
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="">
                        아메리카노
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        아메리카노2
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown ">
                  <a
                    class="nav-link dropdown-toggle "
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    빙수
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="">
                        빙수1
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        빙수2
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        빙수3
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        빙수4
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown ">
                  <a
                    class="nav-link dropdown-toggle "
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    베이커리
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="">
                        베이커리1
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        베이커리2
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown ">
                  <a
                    class="nav-link dropdown-toggle "
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    디저트
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="">
                        디저트1
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        디저트2
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown ">
                  <a
                    class="nav-link dropdown-toggle "
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    음료
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="">
                        음료1
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        음료2
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown ">
                  <a
                    class="nav-link dropdown-toggle "
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    버블티
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="">
                        버블티1
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        버블티2
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown ">
                  <a
                    class="nav-link dropdown-toggle "
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    에이드
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="">
                        에이드1
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        에이드2
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="logo">
        <img src="/image/pean.png" alt="" width="200" height="200"></img>
        <h3> MENU </h3>
      </div>
      <div class="menu">
        <ul>
          <li>
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
          <li>
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
          <li>
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
          <li>
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
        </ul>
      </div>
      {modalOpen && <ModalBasic setModalOpen={setModalOpen} juiceTitle={juiceTitle} img={img}/>}
    </div>
  );
};

export default Main;
