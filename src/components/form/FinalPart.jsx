import { Form } from "antd";
import { Button, DatePicker, Input, message, Upload } from "antd/es";
import React from "react";
import { UploadOutlined } from '@ant-design/icons';

const FinalPart = () => {

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} archivo correctamente recibido`);
      } else if (info.file.status === 'error') {
        message.success(`${info.file.name} Archivo correctemente subido`);
      }
    },
  };

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
      /* onFinish={onFinish}
      onFinishFailed={onFinishFailed} */
      autoComplete="off"
    >
      <Upload {...props}>
    <Button style={{marginTop: '40px'}} icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
      <Form.Item
        label="Número de indetificación"
        name="numberID"
      >
        <Input />
      </Form.Item>
      <Form.Item
      className='date'
      label={
        <div>Fecha de nacimiento</div>
      }
        name="date"
      >
        <DatePicker style={{
          width: '45vw'
        }} />
      </Form.Item>
    </Form>
    </div>
    );
};

export default FinalPart;
