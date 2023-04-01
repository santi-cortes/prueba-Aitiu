import { Button, Checkbox, Form, Input } from "antd";
import React from "react";

const InitalPart = () => {

  let pat = '^[0-9]+$';

  return (
	<div className="inital-part-container">
		<Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
	  width: '90%',
	  display: 'flex',
	  flexDirection: 'column',
	  justifyContent: 'center',
	  alignItems: 'center'
    }}
    initialValues={{
      remember: true,
    }}
    /* onFinish={onFinish}
    onFinishFailed={onFinishFailed} */
    autoComplete="off"
  >
    <Form.Item
      label="Nombre"
      name="name"
      rules={[
        {
          required: true,
          message: 'Por favor ingresa tu nombre',
        },
      ]}
    >
      <Input
      />
      
    </Form.Item>

    <Form.Item
      label="Apellidos"
      name="last-name"
      rules={[
        {
          required: true,
          message: 'Por favor ingresa tus datos',
        },
      ]}
    >
      <Input />
    </Form.Item>
	<Form.Item
      label="Correo"
      name="mail"
      rules={[
        {
          required: true,
          message: 'Por favor ingresa tu correo',
        },
		{
			type: 'email',
			message: 'Ingresa un correo con formato valido',
		}
      ]}
    >

      <Input />
    </Form.Item>
	<Form.Item
      label="Celular"
      name="phone"
      rules={[
        {
          required: true,
          message: 'Por favor ingresa tus datos',
        },
		{
      pattern: pat,
			message: 'Por favor un dato numerico (celular)',
		}
      ]}
    >
      <Input/>
    </Form.Item>
  </Form>
	</div>
  );
};

export default InitalPart;
