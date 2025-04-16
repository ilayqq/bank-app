import { Button, Form, Input } from "antd";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";
import "./css/LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      const res = await login(values);
      localStorage.setItem("token", res.token);
      navigate("/dashboard");
    } catch {
      alert("Wrong credentials");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-logo">F</div>
        <h1 className="login-brand">Finanza</h1>
        <h2 className="login-welcome">Welcome Back</h2>

        <Form layout="vertical" onFinish={onFinish} className="login-form">
          <Form.Item label="Username" name="username" rules={[{ required: true }]}>
            <Input className="login-input" />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true }]}>
            <Input.Password className="login-input" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" className="login-button" block>
              Log in
            </Button>
          </Form.Item>
        </Form>

        <a className="login-forgot" href="/">Forget password?</a>
      </div>
    </div>
  );
};

export default LoginPage;
