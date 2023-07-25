import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  padding-left: 18px;
  padding-right: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Heading = styled.h1`
  font-family: 'Open Sans';
  color: #35469c;
  font-size: 26px;
  font-weight: 700;
  text-align: center;
`

export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const MemeContainer = styled.div`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  height: 260px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const MemeText = styled.p`
  font-family: 'Open Sans';
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
  font-weight: 500;
`

export const MemeOptionsContainer = styled.form`
  padding-top: 18px;
  padding-bottom: 18px;
`

export const Label = styled.label`
  font-family: 'Open Sans';
  font-size: 12px;
  color: #7e858e;
`

export const Input = styled.input`
  font-family: 'Open Sans';
  color: #7e858e;
  font-size: 12px;
  border: 1px solid #7e858e;
  width: 100%;
  padding: 4px 8px;
  border-radius: 4px;
  outline: none;
  margin-bottom: 8px;
`

export const BreakLine = styled.br``

export const Select = styled.select`
  font-family: 'Open Sans';
  color: #7e858e;
  font-size: 12px;
  border: 1px solid #7e858e;
  width: 100%;
  padding: 4px 8px;
  border-radius: 4px;
  outline: none;
  margin-bottom: 8px;
`

export const Option = styled.option``

export const GenerateBtn = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  font-family: 'Open Sans';
  font-size: 12px;
  border-radius: 4px;
  padding: 8px 28px;
  border: none;
  outline: none;
  cursor: pointer;
`
