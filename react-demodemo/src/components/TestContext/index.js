import React, { useState } from 'react'
import { Form, Switch, Divider, Radio, Button } from 'antd'
import ConfigurationContext from '../../ConfigurationContext'
import ChildrenContext from '../Theme/ChildrenContext'

const borderstyle = { border: '1px solid rgba(0,0,0,.06)', padding: '20px 20px' }
// export const ConfigurationContext = React.createContext()

const TestContext = () => {
    const [dndvalue, setDndvalue] = useState({});
    const [dndstrictly, setDndstrictly] = useState(false);
    const [dndborder, setdndborder] = useState(false);
    const [dndtitle, setDndtitle] = useState(false);
    const [dndheader, setDndheader] = useState(false);
    const [dndrowselection, setDndrowselection] = useState(false);
    const [dndsize, setDndsize] = useState('default');

    const handleDndstrictlyChange = (checked) => {
        console.log(`switch to ${checked}`);
        setDndstrictly(checked)
    }

    const handleDndBorderChange = (checked) => {
        setdndborder(checked)
    }

    const handleDndtitleChange = (checked) => {
        setDndtitle(checked)
    }

    const handleDndheaderChange = (checked) => {
        setDndheader(checked)
    }

    const handleDndrowSelectionChange = (checked) => {
        setDndrowselection(checked)
    }

    const handleDndsizeChange = (e) => {
        console.log('radio checked', e.target.value);
        setDndsize(e.target.value)
    }

    const onFinish = values => {
        console.log('Success:', values);
        setDndvalue(values)
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    console.log(dndvalue)
    return (
        <ConfigurationContext.Provider value={dndvalue}>
            <div style={borderstyle}>
                <h2>可拖拽表格</h2>
                <Divider />
                <Form
                    initialValues={{
                        dndstrictly: dndstrictly,
                        dndborder: dndborder,
                        dndtitle: dndtitle,
                        dndheader: dndheader,
                        dndrowselection: dndrowselection,
                        dndsize: dndsize,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item label="完全受控" name='dndstrictly'>
                        <Switch checked={dndstrictly} onChange={handleDndstrictlyChange} />
                    </Form.Item>
                    <Form.Item label="边框" name='dndborder'>
                        <Switch checked={dndborder} onChange={handleDndBorderChange} />
                    </Form.Item>
                    <Form.Item label="标题" name='dndtitle'>
                        <Switch checked={dndtitle} onChange={handleDndtitleChange} />
                    </Form.Item>
                    <Form.Item label="表头" name='dndheader'>
                        <Switch checked={dndheader} onChange={handleDndheaderChange} />
                    </Form.Item>
                    <Form.Item label="复选框" name='dndrowselection'>
                        <Switch checked={dndrowselection} onChange={handleDndrowSelectionChange} />
                    </Form.Item>
                    <Form.Item label="大小" name='dndsize'>
                        <Radio.Group value={dndsize} onChange={handleDndsizeChange}>
                            <Radio.Button value="default">默认</Radio.Button>
                            <Radio.Button value="middle">中等</Radio.Button>
                            <Radio.Button value="small">小</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            提交
                            </Button>
                    </Form.Item>
                </Form>
                <ChildrenContext />
            </div>
        </ConfigurationContext.Provider>
    )
}

export default TestContext
