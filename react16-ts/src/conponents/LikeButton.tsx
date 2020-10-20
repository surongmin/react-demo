import React, { useState } from 'react'

// const LikeButton: React.FC = () => {
//     // useState(0)
//     let [like, setLike] = useState(0)
//     return (
//         <button onClick={() => { setLike(like + 1) }}>
//             {like}👍
//         </button>
//     )
// }

const LikeButton: React.FC = () => {
    let [like, setLike] = useState(0)

    let handdleAddLike = () => {
        setLike(like + 1)
    }

    return (
        <button onClick={handdleAddLike}>
            {like}👍
        </button>
    )
}

export default LikeButton