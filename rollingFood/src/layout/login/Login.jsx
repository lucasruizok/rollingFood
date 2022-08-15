import React from 'react'
import { Button, Form, Input, Row,Col, notification } from 'antd';
import axios from 'axios';

export const Login = () => {
  const URL = 'http://localhost:3400';
  const openNotification = (message, description, type) =>{
    notification[type]({
      message: message,
      description: description,
      placement:'top'
    })
  }
  async function handleSubmitFinish(values){
    try{
      const loginData = values;
      console.log(loginData)
      const response = await axios.post(`${URL}/login`,loginData)
      console.log(response)
      openNotification('Login correcto', 'Ha ingresado correctamente', 'succes')
    } catch(error){
      console.log(error)
      openNotification('Login incorrecto', 'No pudo ingresar verificar datos ingresados', 'error')
    }
  }
  function createUser(){
    
  } 

  return (
    <>
    <Row justify='center' className='p-lg pt-5'>
      <Col span={16}>
        <h2 className='text-center'>INICIAR SESION</h2>
      <Form labelCol={{span: 8}} wrapperCol={{span: 12}} onFinish={handleSubmitFinish}>
        <Form.Item
            label='Email'
            name='mail'
            rules={[
            { required: true, message: 'Por favor introducir email' },
            { type: 'email', message: 'el correo debe ser valido'}
            ]}>
          <Input type='email' minLength={3}/>
        </Form.Item>
        <Form.Item
            label='Contraseña'
            name='password'
            rules={[
              {required: true, message:'Por favor introducir contraseña'},
              {type:'password'},
              {min: 4, message:'Este campo necesita minimo de 4 caracteres'}
            ]}>
          <Input type='password' minLength={4} maxLength={12}/>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 12, span: 12}}>
        <Button type="primary" danger onClick={createUser} htmlType="submit" className='mx-5'>
          Registrarse
        </Button>
        <Button type="primary" htmlType="submit">
          Ingresar
        </Button>
      </Form.Item>
      </Form>
      </Col>
    </Row>

    </>
  )
}
