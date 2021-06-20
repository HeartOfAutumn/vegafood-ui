import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './SigninScreen.css';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

const LoginView = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <div id="contact" className="block contactBlock login">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Đăng nhập Vegafood</h2>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập email',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Nhập mật khẩu của bạn"
            />
          </Form.Item>
          <Form.Item>
            <Row gutter={[16, 16]}>
              <Link to="/register">
                <Col span={12} >
                  <Button type="primary" >
                    Đăng ký
                  </Button>
                </Col>
              </Link>
              <Col span={12} className="right">
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Đăng nhập
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginView;