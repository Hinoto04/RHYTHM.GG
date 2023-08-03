import "./Welcome.css"

import React from "react"

function Welcome() {
    return (
        <div class="d-flex justify-content-center">
            <div className="flex-column">
                <div className="banner">
                    <h2 class="introduction">당신이 새긴 모든 비트를 한곳에</h2>
                    <p class="intro-description">리듬게임 종합 전적 사이트 RHYTHM.GG</p>
                    
                    <div className="banner-button-css">
                        <button class="start-button">시작하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;