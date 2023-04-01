import { DatePicker, Form, Input } from "antd";
import React from "react";

const MidPart = () => {

  let pat = '^[0-9]+$';
  let patRFC = '^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3})$';


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
        label="CURP"
        name="name"
        rules={[
          {
            required: true,
            message: 'Por favor ingresa tu CURP',
          },
        ]}
      >
        <Input />
      </Form.Item>
  
      <Form.Item
        label="RFC"
        name="last-name"
        rules={[
          {
            required: true,
            message: 'Por favor ingresa tu RFC',
          },
          {
            pattern: patRFC,
            message: 'Ingresa el formato correcto'
          }
        ]}
      >
        <Input placeholder="Ejemplo: COMS040508HPL" />
      </Form.Item>
    <Form.Item
        className="date"
        label={
          <div>Fecha de nacimiento</div>
        }
        name="date"
        rules={[
          {
            required: true,
            message: 'Por favor ingresa tu fecha de nacimiento',
          }
        ]}
      >
        <DatePicker
        style={{width: '45vw'}}
        placeholder=''
        />
      </Form.Item>
    </Form>
    </div>
    );
};

export default MidPart;
