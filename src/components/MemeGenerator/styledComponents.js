import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const Heading = styled.h1`
  color: #35469c;
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: bold;
  width: 90%;
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 40px;
    width: 80%;
    text-align: left;
  }
`
export const FormMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  flex-grow: 1;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    flex-grow: 0;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  order: 1;

  @media (min-width: 768px) {
    width: 40%;
    order: 0;
  }
`

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

export const InputLabel = styled.label`
  color: #7e858e;
  font-size: 18px;
  font-family: 'Roboto';
  margin-bottom: 15px;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 14px;
    width: 100%;
  }
`
export const TextInput = styled.input`
  width: 100%;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 14px;
  margin-top: 7px;
  color: #5a7184;
  font-size: 18px;
  font-family: 'Roboto';
`

export const SelectInput = styled.select`
  width: 100%;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 14px;
  margin-top: 7px;
`

export const FontOption = styled.option`
  color: #5a7184;
  font-size: 14px;
  font-family: 'Roboto';
  margin-bottom: 6px;

  @media (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`
export const GenerateButton = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 400;
  height: 40px;
  width: 120px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  @media (min-width: 768px) {
    height: 50px;
    width: 150px;
    font-size: 18px;
    margin-top: 20px;
  }
`
export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  order: 0;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  flex-grow: 1;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    width: 40%;
    flex-grow: 0;
    order: 1;
    margin-bottom: 0;
  }
`
export const MemeText = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
  font-family: 'Roboto';
  font-weight: 400;
`
