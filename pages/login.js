import {Container, Row, Col} from 'reactstrap';
import styles from "../styles/login.module.scss";
import 'bootstrap/dist/css/bootstrap.css';

const LogIn = ({}) => {
    const checkAccount = () => {
        const id = document.getElementById('id').value;
        const password = document.getElementById('password').value;

        if(id==='' || password ==='') {
            alert('id와 password를 입력해주세요');
        } else {
            alert(`id=${id} / password=${password}`);
        }
    }

    return (
        <div className={styles.box}>
            <Container fluid className={styles.container}>
                <div className={styles.title}>튜터 로그인</div>
                <Row>
                    <Col xs='12' sm='12' md ='4' className={styles.form}>
                        <input type='text' id='id' name='id' placeholder='ID(Email)'/>
                        <div className='mt-1'/>
                        <input type='text' id='password' name='password' placeholder='Password'/>
                    </Col> 
            
                </Row>
                <Row className='mt-5'>
                    <Col xs='12' sm='12' md ='4' className={styles.submit}>
                        <input id={styles.button} type="submit" value="로그인 하기" onClick={checkAccount}/>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <div className={styles.find}>
                        <div className={styles.find} onClick={() => {alert('find id')}}>아이디 찾기</div>
                        <div className={styles.find} onClick={() => {alert('find pw')}}>비밀번호 찾기</div>
                    </div>
                </Row>
                <Row>
                    <div className={styles.footer}><span>@tutorlab</span></div>
                </Row>
            </Container>
        </div>
    )
}

export default LogIn;