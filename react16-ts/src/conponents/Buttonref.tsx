import React, { useState, useEffect, useRef } from 'react'

const Buttonref: React.FC = () => {
    let [like, setLike] = useState(0)
    let [On, setOn] = useState(true)

    let likeRef = useRef(0)
    let didMountRef = useRef(false)
    let domRef = useRef<HTMLInputElement>(null)

    let handdleOnOff = function () {
        setOn(!On)
    }

    useEffect(() => {
        console.log('document title effect is running')
        document.title = `点击了${like}次`;
        // }, [like])    //只有like变化的时候才调用
    }, [like])  // like、on 变化的时候调用

    useEffect(() => {
        if (didMountRef.current) {
            console.log('this is updated')
        } else {
            didMountRef.current = true
        }
    })

    useEffect(() => {
        if (domRef && domRef.current) {
            domRef.current.focus()
        }
    })

    function handleAlertClick() {
        setTimeout(() => {
            alert('you click on' + like)
        }, 3000)
    }

    function handleRefAlertClick() {
        setTimeout(() => {
            alert('you click on' + likeRef.current)
        }, 3000)
    }

    return (
        <>
            <input type='text' ref={domRef} />
            <button onClick={handleAlertClick}>
                Alert!
            </button>
            <button onClick={handleRefAlertClick}>
                Ref Alert!
            </button>
            {/* <button onClick={() => setLike(like + 1)}> */}
            {/* likeRef 不会重新渲染 */}
            <button onClick={() => { setLike(like + 1); likeRef.current++ }}>
                {like}👍
            </button>
            <button onClick={handdleOnOff}>
                {On ? "ON" : 'OFF'}
            </button>
        </>
    )
}

export default Buttonref