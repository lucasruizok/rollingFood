import React from 'react'

export const Login = () => {
  return (
    <div className='Login'>
      <header className='Login-header'>
        <Form autoComplete="off" labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}>
          // Input: Email
          <Form.Item name="email" label="Email" rules={[{
            required: true,
            message: "Please enter you email"
          }]}>
            <Input placeholder="Type your email" />
          </Form.Item>
          // Input: Password
          <Form.Item name="password" label="Password">
            <Input.Password placeholder="Type your password" />
          </Form.Item>
          // Checkbox: Remember Password
          <Form.Item name="remember" wrapperCol={{ span: 24 }}>
            <Checkbox>
              {" "}
              Remember my password
            </Checkbox>
          </Form.Item>
          // Button: Log In
          <Form.Item>
            <Button block type="primary" htmlType="submit">Log In</Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  )
}
