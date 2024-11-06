import styled from 'styled-components'

export const Logo = styled.img`
  height: 80px;
  width: 208px;
  max-width: 524px;
  flex-shrink: 1;
  margin-right: 20px;
`
export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 90%;
  max-width: 1110px;
  margin: auto;
  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19);
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  width: 350px;
  flex-shrink: 0;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  padding: 64px 48px 64px 48px;
  max-width: 350px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`
export const InputLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #475569;
`
export const UsernameInput = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: #e2e8f0;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19);
`
export const PasswordInput = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: #e2e8f0;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19);
`
export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #ff0b37;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-weight: bold;
  font-family: 'Roboto';
  line-height: 16px;
  color: red;
`
export const ToggleButton = styled.input`
  margin: 0px 5px;
  cursor: pointer;
`
export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: flex-start;
  margin: 10px;
`
