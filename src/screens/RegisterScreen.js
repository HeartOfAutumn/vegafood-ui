import React from 'react';
import './RegisterScreen.css';

import { Form, Input, Button, Checkbox } from 'antd';

function RegisterView() {
  return (
    <div id="contact" className="block contactBlock register">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Tạo tài khoản Vegafood</h2>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="customername"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập họ tên !'
              }]
            }
          >
            <Input placeholder="Họ tên" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'Email không hợp lệ',
              },
              {
                required: true,
                message: 'Email',
              },
            ]}
          >
            <Input placeholder="Địa chỉ Email" />
          </Form.Item>

          <Form.Item
            name="password"
          >
            <Input placeholder="Mật khẩu" type="password" />
          </Form.Item>

          <Form.Item
            name="repassword"
          >
            <Input placeholder="Nhập lại mật khẩu" type="password" />
          </Form.Item>

          <Form.Item
            name="phone"
          >
            <Input placeholder="Số điện thoại" />
          </Form.Item>

          <Form.Item
            name="city"
          >
            <Input placeholder="Thành phố" />
          </Form.Item>

          <Form.Item
            name="district"
          >
            <Input placeholder="Quận" />
          </Form.Item>

          <Form.Item
            name="address"
          >
            <Input placeholder="Số nhà, đường" />
          </Form.Item>



          {/* <Form.Item
            name="message"
          >
            <TextArea placeholder="..." />
          </Form.Item> */}
          <Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              noStyle
              rules={[
                { validator: (_, value) => value ? Promise.resolve() : Promise.reject('Chấp nhận thỏa thuận') },
              ]}
            >
              <Checkbox>Tôi đồng ý với thỏa thuận và điều kiện.</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default RegisterView;