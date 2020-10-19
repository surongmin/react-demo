import React, { useState, useEffect } from 'react'

// const OnButton: React.FC = () => {
//     let [obj, setObj] = useState({ like: 0, on: true })

//     let handdleAddLike = () => {
//         // 报错 缺少on属性
//         // useState是替代  之前的setState是合并
//         // setObj({
//         //     like: obj.like + 1,
//         // })
//         setObj({
//             like: obj.like + 1,
//             on: obj.on
//         })
//     }

//     let handdleOnOff = function () {
//         setObj({
//             like: obj.like,
//             on: !obj.on
//         })
//     }

//     return (
//         <>
//             <button onClick={handdleAddLike}>
//                 {obj.like}👍
//             </button>
//             <button onClick={handdleOnOff}>
//                 {obj.on ? "ON" : 'OFF'}
//             </button>
//         </>
//     )
// }


const OnButton: React.FC = () => {
    let [like, setLike] = useState(0)
    let [On, setOn] = useState(true)

    let handdleOnOff = function () {
        setOn(!On)
    }

    useEffect(() => {
        document.title = `点击了${like}次`;
    })

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

export default OnButton