import React, { Component} from 'react'
import { Card, Tag } from 'antd';

class NameCard extends Component {
    render() {
        const { name, phone, isHuman, tags } = this.props.data
        return (
            <Card title={name} bordered={false} style={{ width: 300,backgroundColor: '#ccc' }}>
                <ul>
                    <li>电话：{phone}</li>
                    <li>{isHuman ? '人类' : '外星人'}</li>
                </ul>
                <hr/>
                <p>
                    {
                        tags.map((item,index) => 
                            <Tag key={index} color="success">{item}</Tag> 
                        )
                    }
                    </p>
            </Card>
        )
    }
}

export default NameCard