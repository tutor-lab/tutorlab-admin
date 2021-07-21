import React, {useState, useEffect, useReducer} from 'react';
import {Container, Row, Col, Label, Input, InputGroup, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsChevronLeft} from 'react-icons/bs';
import styles from "../styles/signup2.module.scss";
import Router from 'next/router';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRouter, withRouter } from 'next/router';
import { Select, CaretIcon, ModalCloseButton  } from 'react-responsive-select';
import 'react-responsive-select/dist/react-responsive-select.css';
//import { gql, useMutation } from '@apollo/client';


const ageOptions = [
    {value: '', text: '나이'},
    {value: 10, text: '10'},
    {value: 20, text: '20'},
    {value: 30, text: '30'}
]

const sexOptions = [
    {value: '', text: '성별'},
    {value: 'F', text: '여성'},
    {value: 'M', text: '남성'}
]

const addressOptions = [
    {value: '', text: '주소'},
    {value: '서울', text: '서울'},
    {value: '인천', text: '인천'},
    {value: '경기', text: '경기'}
]

// const MUATTION = gql`
//     mutation($file: Upload!) {
//         uploadFile(file: $file) {
//             success
//         }
//     }
//     `;

const SignUp2 = () => {
    const router = useRouter();
    
    const [age, setAge] = useState();
    const [sex, setSex] = useState();
    const [address, setAddress] = useState();

    const [highestLvl, setHighestLvl] = useState();
    const [school, setSchool] = useState();
    const [major, setMajor] = useState();

    const [ certificateList, setCertificateList ] = useState([/*{value: ''}*/]);
    const [ careerList, setCareerList ] = useState([{value: ''}]);

    useEffect(() => {
        console.log(`name props=${router.query.name}`);
    }, [router]);

    useEffect(() => {
        console.log(`age=${age}`);
    }, [age]);

    useEffect(() => {
        console.log(`sex=${sex}`);
    }, [sex]);

    useEffect(() => {
        console.log(`address=${address}`);
    }, [address]);

    return(
        <div className={styles.box}>
            <Container fluid>
                <Row className={styles.header}>
                    <Col xs={1}>
                        <BsChevronLeft className='float-left' onClick={() => {Router.push('/signup')}}/>
                    </Col>
                    <Col xs={11}>
                        <Label for='form' className='mt-1'>회원 가입(2/2)</Label>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <PerfectScrollbar className={styles.scrollbar}>
                            <Row>
                                <div className={styles.label}>
                                    <Label for='basic-info'><b>{router.query.name}</b> 튜터님의 기본 정보를 입력해주세요.</Label>
                                </div>
                                <BasicInfo setAddress = {setAddress} setAge = {setAge} setSex = {setSex}/>
                            </Row>
                            <br/>
                            <Row>
                                <div className={styles.label}>
                                    <Label for='education'>학력을 입력해주세요.</Label>
                                </div>
                                <Education setHighestLvl={setHighestLvl} setSchool={setSchool} setMajor={setMajor}/>
                            </Row>
                            <br/>
                            <Row>
                                <div className={styles.label}>
                                    <Label for='career'>자격증/교육 경력을 입력해주세요.(선택)</Label>
                                </div>
                                <Career certificateList={certificateList} careerList={careerList} setCareerList={setCareerList} setCertificateList={setCertificateList}/>
                            </Row>
                            <br/>
                            <Row>
                                <div className={styles.label}>
                                    <Label for='career'>추가 입력 사항(선택)</Label>
                                </div>
                                <AdditionalInfo/>
                            </Row>
                            <br/>
                            <Row>
                                <div className={styles.label}>
                                    <Label for='file'>입력한 내용을 인증할 수 있는 첨부파일을 업로드 해주세요.</Label>
                                </div>
                                <FileUpload/>
                            </Row>
                        </PerfectScrollbar>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className={styles.form}>
                        <div className={styles.button} onClick={() => {alert('click')}}>완료</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


const BasicInfo = ({setAge, setSex, setAddress}) => {
    
    return (
        <div>
            <Row className={styles.row}>
                <Col xs={5} sm={2} md={2}>
                    <Select 
                        name='age'
                        modalCloseButton={<ModalCloseButton/>}
                        options={ageOptions}
                        caretIcon={<CaretIcon/>}
                        selectedValue=''
                        onChange={(e) => {setAge(e.value)}}
                    />
                </Col>
                <Col xs={5} sm={2} md={2}>
                    <Select 
                        name='sex'
                        modalCloseButton={<ModalCloseButton/>}
                        options={sexOptions}
                        caretIcon={<CaretIcon/>}
                        selectedValue=''
                        onChange={(e) => {setSex(e.value)}}
                    />
                </Col>
            </Row>
            <Row className={styles.row}>
                <Col xs={10} sm={4} md={4}>
                    <Select 
                        name='address'
                        modalCloseButton={<ModalCloseButton/>}
                        options={addressOptions}
                        caretIcon={<CaretIcon/>}
                        selectedValue=''
                        onChange={(e) => {setAddress(e.value)}}
                    />
                </Col>
            </Row>
        </div>
    )
}

const Education = ({setHighestLvl, setSchool, setMajor}) => {
    return (
        <>
        <Row className={styles.row2}>
            <Col xs={12} sm={4} md={4} className={styles.form}>
                <Input 
                    className={styles.input}
                    id='highestLvl'
                    type='text' 
                    placeholder='최종 학력' 
                    onChange={(event) => {setHighestLvl(event.target.value)}}
                />
                
            </Col>
        </Row>
        <Row className={styles.row2}>
            <Col xs={12} sm={4} md={4} className={styles.form}>
                <Input 
                    className={styles.input}
                    id='school'
                    type='text' 
                    placeholder='학교' 
                    onChange={(event) => {setSchool(event.target.value)}}
                />
                
            </Col>
        </Row> 
        <Row className={styles.row2}>
            <Col xs={12} sm={4} md={4} className={styles.form}>
                <Input 
                    className={styles.input}
                    id='major'
                    type='text' 
                    placeholder='전공' 
                    onChange={(event) => {setMajor(event.target.value)}}
                />
                
            </Col>
        </Row>
        </>
    )
}

const Career = ({ certificateList ,setCertificateList, careerList, setCareerList}) => {

    useEffect(() => {
        console.log(`certificateList=${certificateList}`)
    }, [certificateList]);

    useEffect(() => {
        console.log(`careerList=${careerList}`)
    }, [careerList]);
    
    const addCertificate = () => {
        //alert('click');
        setCertificateList(certificateList.concat([{value: ''}]));
    }
    
    const addCareer = () => {
        setCareerList(careerList.concat([{value: ''}]));
    }
    
    const setCertificateValue = (e) => {
        // const { id, value } = e.target;
        // let copyList = [...certificateList];
        // copyList[id].value = value;
        
        // setCertificateList(copyList);
    }

    
    const setCareerValue = (e) => {
        const { id, value } = e.target;
        let copyList = [...careerList];
        copyList[id].value = value;
        
        setCareerList(copyList);
    }

    const CertificateInputList = ({certificateList, onChange}) => {
        return(
            <>
                {certificateList.lenth > 0 && certificateList.map((e, i) => {
                    <CertificateInput key={i} value={''} id={i} onChange={setCertificateValue}/>
                })}
            </>
        );
    }
    //이 함수가 list를 맵으로 렌더링한 컴포넌트 return 해줘요 위에 보시면 있구용..타고 들어가면
    const renderCertificateInput = (certificateList, setCertificateValue) => {
        return <CertificateInputList certificateList={certificateList} onChange={setCertificateValue}/>
    }
    return (
        <>
        <div className={styles.btnwrapper}>
            <div className={styles.plus} onClick={ addCertificate }> + </div>
        </div>
        {/* <Row className={styles.row2}>
            <Col xs={12} sm={4} md={4} className={styles.form}>
                <Input 
                    className={styles.input}
                    id='certificate'
                    type='text' 
                    placeholder='자격증' 
                    onChange={(event) => {console.log(event.target.value)}}
                />
                
            </Col>
        </Row> */}
        {/* 밑에 함수가 렌더링 하는 함수인데 렌더링이 안되용... */}
        {certificateList.lenth > 0 &&  renderCertificateInput(certificateList, setCertificateValue)}
        <Row className={styles.row2}>
            <Col xs={12} sm={4} md={4} className={styles.form}>
                <Input 
                    className={styles.input}
                    id='career'
                    type='text' 
                    placeholder='경력/기간' 
                    onChange={(event) => {console.log(event.target.value)}}
                />
                
            </Col>
        </Row> 
        </>
    )
}


//결론적으로 자격증 인풋이랑 같은데 컴포넌트로 빼놨구요..
const CertificateInput = ({value, id, onChange}) => {
    return (
        <Row className={styles.row2}>
            <Col xs={12} sm={4} md={4} className={styles.form}>
                <Input 
                    className={styles.input}
                    id={id}
                    type='text' 
                    value={ value || ''}
                    placeholder='자격증' 
                    onChange={(e) => {onChange(e)}}
                />
            </Col>
        </Row>
    );
}

const AdditionalInfo = () => {
    return (
        <>
        <Row className={styles.row2}>
            <Col xs={12} sm={4} md={4} className={styles.form}>
                <Input 
                    className={styles.input}
                    id='graduate-school'
                    type='text' 
                    placeholder='대학원' 
                    onChange={(event) => {console.log(event.target.value)}}
                />
                
            </Col>
        </Row>
        <Row className={styles.row2}>
            <Col xs={12} sm={4} md={4} className={styles.form}>
                <Input 
                    className={styles.input}
                    id='graduate-major'
                    type='text' 
                    placeholder='대학원 전공' 
                    onChange={(event) => {console.log(event.target.value)}}
                />
                
            </Col>
        </Row> 
        </>
    )
}

const FileUpload = () => {
    // const [mutate] = useMutation(MUATTION);

    // function onChange({
    //     target: {
    //       validity,
    //       files: [file],
    //     },
    //   }) {
    //     if (validity.valid) mutate({ variables: { file } });
    //   }

      return (
          <>
          {/* <Row className={styles.row2}>
            <Col xs={12} sm={4} md={4} className={styles.form}>
                <div className={styles.upload}>
                    <div className="input-group">
                        <div className="custom-file">
                            <input
                                type="file"
                                className="custom-file-input"
                                id="inputGroupFile01"
                                aria-describedby="inputGroupFileAddon01"
                            />
                            <label className="custom-file-label" htmlFor="inputGroupFile01">학력</label>
                        </div>
                    </div>
                </div>
            </Col>
          </Row>
          <Row className={styles.row2}>
            <Col xs={12} sm={4} md={4} className={styles.form}>
                <div className={styles.upload}>
                    <div className="input-group">
                        <div className="custom-file">
                            <input
                                type="file"
                                className="custom-file-input"
                                id="inputGroupFile01"
                                aria-describedby="inputGroupFileAddon01"
                            />
                            <label className="custom-file-label" htmlFor="inputGroupFile01">경력/기간</label>
                        </div>
                    </div>
                </div>
            </Col>
          </Row> */}
          </>
      )
}

export default withRouter(SignUp2);