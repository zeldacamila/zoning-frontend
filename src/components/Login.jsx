import {
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  ConfigProvider,
  theme,
} from "antd";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const onFinish = (values) => {
  /* console.log("Success:", values); */
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const { data } = await axios.post('https://usersdata-backend.onrender.com/signin', {
        email,
        password
      }
      );
      if (data) {
        localStorage.setItem("token", data.data.token)
        navigate('/form')
      }
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          //fontSize: 18,
          colorPrimaryBg: "#e6f9ff",
          colorPrimaryBgHover: "baebff",
          colorPrimaryBorder: "91dcff",
          colorPrimary: "#17a0ff",
          algorithm: "theme.darkAlgorithm",
        },
      }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 24,
          order: 1,
        }}
        wrapperCol={{
          flex: 4,
          order: 2,
        }}
        style={{
          maxWidth: 230,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        onSubmitCapture={handleSubmit}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input className="input" value={email} onChange={handleEmailChange}/>
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password className="input" value={password} onChange={handlePasswordChange}/>
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 0,
            span: 24,
          }}
        >
          <Checkbox className="checkbox">Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 0,
            span: 24,
          }}
        >
          <Button type="primary" htmlType="submit" className="button">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
}

export default Login;
