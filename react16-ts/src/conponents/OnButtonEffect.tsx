import React, { useState, useEffect } from 'react'

const OnButtonEffect: React.FC = () => {
    let [like, setLike] = useState(0)
    let [On, setOn] = useState(true)

    let handdleOnOff = function () {
        setOn(!On)
    }

    useEffect(() => {
        console.log('document title effect is running')
        document.title = `点击了${like}次`;
        // }, [like])    //只有like变化的时候才调用
    }, [like, On])  // like、on 变化的时候调用

    return (
        <>
            <button onClick={() => setLike(like + 1)}>
                {like}👍
            </button>
            <button onClick={handdleOnOff}>
                {On ? "ON" : 'OFF'}
            </button>
        </>
    )
}

export default OnButtonEffect