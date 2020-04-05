import React, { Component } from 'react';
import logo from '../images/LOGO.png';
import isStringFarsi from '../utils/PersianText';
import isFarsiNumber from '../utils/PersianNumber';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.setName = this.setName.bind(this);
        this.setPhone = this.setPhone.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setUserName = this.setUserName.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.showSignup = this.showSignup.bind(this);
        this.showLogin  = this.showLogin.bind(this);
        this.setUserNameLogin  = this.setUserNameLogin.bind(this);
        this.setPasswordLogin  = this.setPasswordLogin.bind(this);

        this.nameRef = React.createRef();
        this.phoneRef = React.createRef();
        this.emailRef = React.createRef();
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
        this.signupRef = React.createRef();
        this.loginRef = React.createRef();
        this.usernameRefLogin = React.createRef();
        this.passwordRefLogin = React.createRef();

        this.state = {
            name: '',
            phone: '',
            email: '',
            username: '',
            password: '',
            usernameLogin: '',
            passwordLogin: '',
            inSignup: true
        }
    }
    setName(event) {
        this.setState({name: event.target.value});
        this.nameRef.current.style.borderColor = 'gray';
    }
    setPhone(event) {
        this.setState({phone: event.target.value});
        this.phoneRef.current.style.borderColor = 'gray';
    }
    setEmail(event) {
        this.setState({email: event.target.value});
        this.emailRef.current.style.borderColor = 'gray';
    }
    setUserName(event) {
        this.setState({username: event.target.value});
        this.usernameRef.current.style.borderColor = 'gray';
    }
    setPassword(event) {
        this.setState({password: event.target.value});
        this.passwordRef.current.style.borderColor = 'gray';
    }
    isPhoneValid(num) {
        if (num.length === 11 && isFarsiNumber(num) && num[0] === '۰' && num[1] === '۹')
            return true;
        if (num.length === 11 && num.match(/^\d+$/) && num[0] === '0' && num[1] === '9')
            return true;
        return false;
    }
    handleSignup(event) {
        // Name
        if (this.state.name == null || this.state.name === "") {
            this.nameRef.current.style.borderColor = 'red';
            this.nameRef.current.placeholder = 'پر کردن این قسمت الزامی است!';
        }
        else if (!isStringFarsi(this.state.name)) {
            this.setState({name : ''});
            this.nameRef.current.style.borderColor = 'red';
            this.nameRef.current.placeholder = 'از حروف فارسی استفاده کنید!';
        }
        // Phone
        if (this.state.phone == null || this.state.phone === "") {
            this.phoneRef.current.style.borderColor = 'red';
            this.phoneRef.current.placeholder = 'پر کردن این قسمت الزامی است!';
        }
        else if (!this.isPhoneValid(this.state.phone)) {
            this.setState({phone : ''});
            this.phoneRef.current.style.borderColor = 'red';
            this.phoneRef.current.placeholder = 'شماره ی وارد شده معتبر نیست!';
        }
        // Email
        if (this.state.email == null || this.state.email === "") {
            this.emailRef.current.style.borderColor = 'red';
            this.emailRef.current.placeholder = 'پر کردن این قسمت الزامی است!';
        }
        else if (!this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            this.setState({email : ''});
            this.emailRef.current.style.borderColor = 'red';
            this.emailRef.current.placeholder = 'ایمیل وارد شده معتبر نیست!';
        }
        // Username
        if (this.state.username == null || this.state.username === "") {
            this.usernameRef.current.style.borderColor = 'red';
            this.usernameRef.current.placeholder = 'پر کردن این قسمت الزامی است!';
        }
        // Password
        if (this.state.password == null || this.state.password === "") {
            this.passwordRef.current.style.borderColor = 'red';
            this.passwordRef.current.placeholder = 'پر کردن این قسمت الزامی است!';
        }
    }

    setUserNameLogin(event) {
        this.setState({usernameLogin: event.target.value});
        this.usernameRefLogin.current.style.borderColor = 'gray';
    }
    setPasswordLogin(event) {
        this.setState({passwordLogin: event.target.value});
        this.passwordRefLogin.current.style.borderColor = 'gray';
    }
    handleLogin(event) {
        // Username
        if (this.state.usernameLogin == null || this.state.usernameLogin === "") {
            this.usernameRefLogin.current.style.borderColor = 'red';
            this.usernameRefLogin.current.placeholder = 'پر کردن این قسمت الزامی است!';
        }
        // Password
        if (this.state.passwordLogin == null || this.state.passwordLogin === "") {
            this.passwordRefLogin.current.style.borderColor = 'red';
            this.passwordRefLogin.current.placeholder = 'پر کردن این قسمت الزامی است!';
        }
    }
    showSignup(event) {
        this.state.inSignup = true;
        this.signupRef.current.style.visibility = 'visible';
        this.signupRef.current.style.display = 'block';
        this.loginRef.current.style.visibility = 'hidden';
        this.loginRef.current.style.display = 'none';
        this.forceUpdate();
    }
    showLogin(event) {
        this.state.inSignup = false;
        this.loginRef.current.style.visibility = 'visible';
        this.loginRef.current.style.display = 'block';
        this.signupRef.current.style.visibility = 'hidden';
        this.signupRef.current.style.display = 'none';
        this.forceUpdate();
    }

    render() {
        let rightButton = 'btn myRightTabButton';
        let leftButton = 'btn myLeftTabButton';
        if (this.state.inSignup) {
            rightButton += ' myActiveTab';
            leftButton += ' myNotActiveTab';
        }
        else {
            rightButton += ' myNotActiveTab';
            leftButton += ' myActiveTab';
        }
        return (
            <div class="mySignupBody">
                <header>         
                    <img class="mySignupLogo" src={logo} alt="logo"/>
                    <p class ="myGreetingMsg">اولین و بزرگترین وب سایت سفارش آنلاین غذا در دانشگاه تهران</p>
                </header>

                <div class="mySignupTab">
                    <div class="d-flex justify-content-center">
                        <button type="button" className={rightButton} onClick={this.showSignup}>ثبت نام</button>
                        <button type="button" className={leftButton} onClick={this.showLogin}>ورود</button>
                    </div>
                    <div ref={this.signupRef} class="active card myMiddleCard myCardBorder mySignupCard">
                        <div class="card-body">
                            <div class="container">
                                <div class="row justify-content-center signUpRow">
                                    <div class="col-4 signUpCol ">نام و نام خانوادگی</div>
                                    <div class="col-6">
                                        <input type="text" class="form-control myCreditInp" id="name" value={this.state.name} onChange={this.setName} ref={this.nameRef}/>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class = "col-9 separatorLine"></div>
                                </div>

                                <div class="row justify-content-center signUpRow">
                                    <div class="col-4 signUpCol ">تلفن همراه</div>
                                    <div class="col-6">
                                        <input type="tel" class="form-control myCreditInp" id="phone" value={this.state.phone} onChange={this.setPhone} ref={this.phoneRef}/>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class = "col-9 separatorLine"></div>
                                </div>

                                <div class="row justify-content-center signUpRow">
                                    <div class="col-4 signUpCol ">ایمیل</div>
                                    <div class="col-6">
                                        <input type="email" class="form-control myCreditInp" id="email" value={this.state.email} onChange={this.setEmail} ref={this.emailRef}/>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class = "col-9 separatorLine"></div>
                                </div>

                                <div class="row justify-content-center signUpRow">
                                    <div class="col-4 signUpCol ">نام کاربری</div>
                                    <div class="col-6">
                                        <input type="text" class="form-control myCreditInp" id="username" value={this.state.username} onChange={this.setUserName} ref={this.usernameRef}/>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class = "col-9 separatorLine"></div>
                                </div>

                                <div class="row justify-content-center signUpRow">
                                    <div class="col-4 signUpCol ">رمز عبور</div>
                                    <div class="col-6">
                                        <input type="password" class="form-control myCreditInp" id="password" value={this.state.password} onChange={this.setPassword} ref={this.passwordRef}/>
                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-4">
                                        <button type="button" class="btn myCreditBtn" onClick={this.handleSignup}>ثبت نام</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div ref={this.loginRef} class="active card myMiddleCard myCardBorder mySignupCard myHiddenDiv">
                        <div class="card-body">
                            <div class="container">
                                <div class="row justify-content-center signUpRow">
                                    <div class="col-4 signUpCol">نام کاربری</div>
                                    <div class="col-6">
                                        <input type="text" class="form-control myCreditInp" value={this.state.usernameLogin} onChange={this.setUserNameLogin} ref={this.usernameRefLogin}/>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class = "col-9 separatorLine"></div>
                                </div>

                                <div class="row justify-content-center signUpRow">
                                    <div class="col-4 signUpCol ">رمز عبور</div>
                                    <div class="col-6">
                                        <input type="password" class="form-control myCreditInp" value={this.state.passwordLogin} onChange={this.setPasswordLogin} ref={this.passwordRefLogin}/>
                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-4">
                                        <button type="button" class="btn myCreditBtn" onClick={this.handleLogin}>ورود</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 

export default Signup;