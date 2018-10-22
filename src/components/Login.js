import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, Layout, Header, Footer, Row, Col } from 'antd';
import 'antd/lib/date-picker/style/css'
import 'antd/lib/badge/style/css'
import 'antd/lib/layout/style/css'
import 'antd/lib/row/style/css'
import 'antd/lib/col/style/css'
import axios from 'axios';

const FormItem = Form.Item;

class Login extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            axios.get('https://jsonplaceholder.typicode.com/todos/1')
                .then(res => console.log(res))

        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row className="" type="flex" justify="space-around" align="middle" style={{ height: '-webkit-fill-available' }}>
                <Col span={10}></Col>
                <Col span={4} >
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </FormItem> <br />
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem> <br />
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me </Checkbox>
                            )}
                            <br />
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                                </Button>
                        </FormItem>
                    </Form>

                </Col>
                <Col span={10}></Col>
            </Row>
        );
    }
}

const LoginForm = Form.create()(Login);

export default LoginForm