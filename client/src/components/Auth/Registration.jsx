import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import { useState, useContext } from 'react';
import { AuthContext } from '../../App';
import { Row, Col, TextInput, Button } from 'react-materialize'


const Registration = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        confirmPass: ''
    })

const { login } = useContext(AuthContext);
const registerHandler = async (e) => {
    e.preventDefault()
    try{
        if (form.password !== form.confirmPass) {
            alert("Пароли не совпадают")
            return
        }
        await axios.post("/api/auth/registration", {
            ...form
        }).then(response => login(response.data.token, response.data.user.id))
    }catch(e){
        console.log(e)
    }
}
    return (
        <div className="container">
            <div className="auth-page">
                <h3 className="teal-text">Регистрация</h3>
                <form className="form form-login" onSubmit={registerHandler}>
                    <Col
                        s={12}>
                        <TextInput
                            email
                            className="auth-input"
                            label="Почта"
                            validate
                            onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </Col>
                    <Col
                        s={12}>
                        <TextInput
                            type="password"
                            label="Пароль"
                            onChange={(e) => setForm({ ...form, password: e.target.value })} />
                    </Col>
                    <Col
                        s={12}>
                        <TextInput
                            type="password"
                            label="Подтверждение пароля"
                            onChange={(e) => setForm({ ...form, confirmPass: e.target.value })} />
                    </Col>
                    <Row>
                        <Button
                            className="green"
                            type="submit"
                            waves="light">
                            Отправить
                        </Button>
                        <Link to="/login" className="btn-outline btn-reg teal-text">Уже есть аккаунт?</Link>
                    </Row>
                </form>
            </div>
        </div>
    );
}

export default Registration;
