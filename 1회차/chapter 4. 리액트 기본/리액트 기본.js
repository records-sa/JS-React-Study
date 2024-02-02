import { useEffect } from "react"

// children에 큰 요소를 전달
<SomeComponent>
    <div>
        <span>nushida</span>
        <p>sakioka</p>
    </div>
</SomeComponent>

// SomeComponent의 children에는 다음을 전달
    <div>
        <span>nushida</span>
        <p>sakioka</p>
    </div>

// State의 값이 변했을 때만 경고 표시
export const App = () => {  

    useEffect(() => {
        alert()
    }, [num]);

    return (
        {/* 생략 */}
    )
}