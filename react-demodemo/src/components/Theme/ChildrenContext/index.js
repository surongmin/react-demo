import { Button } from 'antd'
import React, { Component, useContext } from 'react'
import ConfigurationContext from '../../../ConfigurationContext'

class ChildrenContext extends Component {
    render() {
        return (
            <ConfigurationContext.Consumer>
                {
                    value => {
                        console.log(value)
                        return (
                            <div>ajdkgwi</div>
                        )
                    }
                }
            </ConfigurationContext.Consumer>
        )
    }
}

// const ChildrenContext = () => {
//     const configuration = useContext(ConfigurationContext);   //CountContext是上文创建context对象
//     console.log(configuration)
//     return (
//         <div>
//             ansdfoid
//             {configuration}
//         </div>
//     )
// };

export default ChildrenContext