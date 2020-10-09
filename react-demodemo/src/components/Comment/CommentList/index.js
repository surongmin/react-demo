import React, { Component } from 'react'
import {
    List,
    Button
} from 'antd'
import { CloseOutlined } from '@ant-design/icons';

class CommentList extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    handdleClickDelete(index){
        this.props.onDeleteComment(index)
    }

    render() {
        let { comments } = this.props
        return (
            <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={comments}
                renderItem={(item,index) => (
                    <List.Item>
                        {/* <Typography.Text mark>[ITEM]</Typography.Text>  */}
                        {item}
                        <Button style={{marginLeft:"50px"}} icon={<CloseOutlined />}
                            onClick = {this.handdleClickDelete.bind(this,index)}
                        >
                            删除
                        </Button>                  
                    </List.Item>
                )}
            />

        )
    }
}

export default CommentList