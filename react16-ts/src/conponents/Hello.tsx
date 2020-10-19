import React from 'react'

// export default function Hello(props:any) {
//     return (
//         <div>
//             {props.message}
//         </div>
//     )
// }


// interface IHelloProps {
//     message: string
// }
// export default function Hello(props: IHelloProps) {
//     return (
//         <div>
//             {props.message}
//         </div>
//     )
// }


// interface IHelloProps {
//     message: string
// }
// // export default function Hello:React.FunctionComponent<IHelloProps> (props) {
// // let Hello:React.FunctionComponent<IHelloProps> = function (props) {
// let Hello:React.FunctionComponent<IHelloProps> = (props) => {
//     return (
//         <div>
//             {props.message}
//         </div>
//     )
// }

// export default Hello


interface IHelloProps {
    message?: string
}

let Hello: React.FC<IHelloProps> = (props) => {
    return (
        <div>
            {props.message}
        </div>
    )
}
Hello.defaultProps = {
    message: "Hello"
}

export default Hello
