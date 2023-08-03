import React from "react";

import "./Headers.css"

function Headers() {
    return (
        <div class="header d-flex">
            <div class="햄버거버튼상자">
                <button>
                    <img class="햄버거버튼이미지" src="img/hamburger.png" alt="메뉴" />
                </button>
            </div>
            <div class="로고상자">
                <a href="/home">
                    <img class="로고이미지" src="img/logo.png" alt="로고" />
                </a>
            </div>
            <div class="로그인상자">
                <a href="/">
                    로그인
                </a>
            </div>
        </div>
    );
}

export default Headers