import "./Welcome.css"

import React from "react"

function Welcome() {
    return (
        <div class="d-flex justify-content-center">
            <div className="flex-column">
                <h1 class="welcome">RHYTHM.GG</h1>
                <p class="description">본 사이트는 리듬게임 종합 인포 사이트로, 여러 리듬게임들의 시스템 소개 및 수록곡 정보, 스코어 데이터를 제공합니다.</p>
            </div>
        </div>
    );
}

export default Welcome;