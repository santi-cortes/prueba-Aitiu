import { Button, Steps, theme, message } from "antd";
import React, { useState } from "react";
import InitalPart from "../form/InitalPart";
import MidPart from "../form/MidPart";
import FinalPart from "../form/FinalPart";

const GuideSteps = () => {

	const [go, setGo] = useState(false);
	  
	const { token } = theme.useToken();
	const [current, setCurrent] = useState(0);
	const next = () => {
	  setGo(true);
	  setCurrent(current + 1);
	};
	const prev = () => {
	  setCurrent(current - 1);
	};

	const steps = [
		{
		  title: 'Perfil',
		  content: (<InitalPart go={go}>
		  </InitalPart>),
		},
		{
		  title: 'Informacion',
		  content: (<MidPart go={go}>
		  </MidPart>),
		},
		{
		  title: 'Documentos',
		  content: (<FinalPart>
		  </FinalPart>),
		},
	  ];


	  const items = steps.map((item) => ({
		key: item.title,
		title: item.title,
	  }));
	  const contentStyle = {
		lineHeight: '260px',
		textAlign: 'center',
		color: token.colorTextTertiary,
		borderRadius: token.borderRadiusLG,
		border: `1px dashed ${token.colorBorder}`,
		marginTop: 16,
		marginBottom: 10
	  };
	  return (
		<div className="w-full flex flex-col">
		  <Steps current={current} items={items} className="steps" />
		  <div className="container-form" style={contentStyle}>{steps[current].content}</div>
		  <div className="flex flex-row items-center justify-center buttons">
		  {current > 0 && (
			  <Button
			  className="text-black text-xl shadow-xl flex justify-center items-center"
				style={{
				  margin: '0 8px',
				}}
				onClick={() => prev()}
			  >
				Regresar
			  </Button>
			)}
			{current < steps.length - 1 && (
			  <Button className="text-black text-xl shadow-xl flex justify-center items-center" style={{padding: '0px !important'}} onClick={() => next()}>
				Siguiente
			  </Button>
			)}
			{current === steps.length - 1 && (
			  <Button type="primary" className="text-black text-xl shadow-xl flex justify-center items-center" onClick={() => message.success('Informacion enviada!')}>
				Enviar
			  </Button>
			)}

		  </div>
		</div>
	  );
};

export default GuideSteps;
