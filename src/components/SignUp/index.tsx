import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { lightTheme } from 'src/theme';
import useInput from 'src/hooks/useInput';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import Header from '../Header';
import MajorModal from '../Modal';

const Background = styled.div`
  background-color: #f4f4fc;
  text-align: center;
  width: 1920px;
  height: 1080px;
`;
const SignUpDiv = styled.div`
  display: inline-block;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 142px;
  width: 642px;
  height: 865px;
  border-radius: 16px;
  background-color: white;
`;

const Div = styled.div`
  width: 510px;
  height: 752px;
  margin: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const SignUpLabel = styled.label`
  font-size: 23px;
`;
const NickInput = styled.input`
  width: 510px;
  height: 30px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
`;

const Label = styled.label`
  font-size: 16px;
  display: flex;
`;
const ValidationLabel = styled.label`
  font-size: 14px;
  float: left;
  color: #ff0a0a;
`;
const EmailInput = styled.input`
  width: 510px;
  height: 30px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
`;

const EmailBtn = styled.button`
  width: 70px;
  height: 35px;
  float: right;
  border-radius: 6px;
  background-color: #1c00ff;
  color: white;
  border-style: none;
  cursor: pointer;
`;
const EmailDiv = styled.div`
  display: flex;
  width: 510px;
`;
const LectureModal = styled.input`
  width: 510px;
  height: 30px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  background-color: white;
`;

const FavoriteModal = styled.input`
  width: 510px;
  height: 30px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  background-color: white;
`;

const RegisterBtn = styled.button`
  cursor: pointer;
  width: 510px;
  height: 56px;
  color: white;
  border-style: none;
  border-radius: 6px;
  background-color: #1c00ff;
  font-size: 19px;
`;

interface DataForm {
  nick: 'string';
  email: 'string';
}

const Register = () => {
  // const [nick, onChangeNick] = useInput('');
  // const [email, onChangeEmail] = useInput('');
  /*
  const [nick, setNick] = useState('');
  const onChangeNick = useCallback((e) => {
    setNick(e.target.value);
  }, []);

  const [email, setEmail] = useState('');
  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);
  const emailCheck = (e) => {
    const regExp = /\d{8}@\w[bu]+\.\w[ac]+\.\w[kr]/i;
    // ????????? ?????? : ?????? 8???@bu.ac.kr
    console.log('????????? ????????? ?????? :: ', regExp.test(e.target.value));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  */
  /* Modal  */
  const [modalLecture, setModalLecture] = useState(false);
  const modalClose = (e) => {
    setModalLecture(false);
  };
  const modalOpen = (e) => {
    setModalLecture(true);
  };

  /* React-Hook-Form */
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<DataForm>();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <Background>
        <SignUpDiv>
          <Div>
            <SignUpLabel>????????????</SignUpLabel>
            <br /> <br /> <br /> <br /> <br />
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Label htmlFor="user-nick">?????????</Label>
                <br />
                <NickInput
                  // name="user-nick"
                  // required
                  // onChange={onChangeNick}
                  // value={nick}
                  placeholder="???????????? ??????????????????."
                  {...register('nick', {
                    required: true,
                  })}
                  type="text"
                />
                <ValidationLabel>{errors?.nick?.message}</ValidationLabel>
              </div>
              <br /> <br /> <br />
              <div>
                <Label htmlFor="user-email">?????????</Label>
                <br />
                <EmailDiv>
                  <EmailInput
                    // name="email"
                    // required
                    // onChange={onChangeEmail}
                    // value={email}
                    placeholder="??????????????? ???????????? ????????? ??????????????????."
                    // onBlur={emailCheck}
                    {...register('email', {
                      required: true,
                      pattern: {
                        // /\d{8}+@bu.ac.kr$/
                        value: /[A-Za-z0-9]+@\w[bu]+\.\w[ac]+\.\w[kr]$/,
                        message: '????????? ????????? ???????????????.',
                      },
                    })}
                    type="text"
                  />
                  <EmailBtn>??????</EmailBtn>
                </EmailDiv>
                <br />
                <ValidationLabel>{errors?.email?.message}</ValidationLabel>
                <br />
                <ValidationLabel>??? ????????? ????????? ????????? ???????????? ?????? ???????????????.</ValidationLabel>
                <br />
                <ValidationLabel>??? ??????: @bu.ac.kr</ValidationLabel>
              </div>
              <br /> <br /> <br />
              <div>
                <Label htmlFor="user-lecture">?????? ??????</Label>
                <LectureModal type="button" onClick={modalOpen} placeholder="?????? 2????????? ????????? ??? ????????????.">
                  {/* // eslint-disable-next-line react/jsx-boolean-value */}
                </LectureModal>
                <Modal width="400" height="300" isOpen={modalLecture}>
                  <MajorModal />
                </Modal>
              </div>
              <br /> <br /> <br />
              <div>
                <Label htmlFor="user-favorite">????????? ??????</Label>
                <FavoriteModal placeholder="#?????? ?????? #?????? ??????" />
              </div>
              <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
              <RegisterBtn>????????????</RegisterBtn>
            </form>
          </Div>
        </SignUpDiv>
      </Background>
    </>
  );
};

export default Register;
