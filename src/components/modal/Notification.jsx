import { Button, Modal } from "antd";
import React, { useState } from "react";

const Notification = () => {
	const [isModalOpen, setIsModalOpen] = useState(true);

  	const handleOk = () => {
    	setIsModalOpen(false);
  	};
  	const handleCancel = () => {
    	setIsModalOpen(false);
  	};

	


  return (
  	<div>
		<Modal 
			title="Querido usuario..." 
			open={isModalOpen} 
			onOk={handleOk} 
			onCancel={handleCancel} 
			footer={[
				<Button type="default" onClick={handleCancel}>
				  Continuar con el registro
				</Button>,
			  ]}
		>
			<p>Hola querido usuario, para poder visualizar la información de esta página es necesario terminar el registro </p>
		</Modal>
	</div>
	);
};

export default Notification;
