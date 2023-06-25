// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #ffffffff;
  background-size: cover;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MainHeading = styled.h1`
  font-family: 'Bree Serif';
  color: #4c63b6;
  font-style: 'normal';
`
export const NoteForm = styled.form`
  width: 65%;
  box-shadow: 1px 1px 2px 3px #cbd5e1;
  height: 250px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`
export const Input = styled.input`
  width: 200px;
  height: 30px;
  outline: none;
  border: none;
  margin-bottom: 30px;
  font-family: 'Roboto';
  font-weight: bold;
`
export const TextArea = styled.textarea`
  outline: none;
  border: none;
  font-family: 'Roboto';
  font-weight: 500;
  resize: none;
`
export const Button = styled.button`
  width: 80px;
  height: 140px;
  align-self: flex-end;
  border: none;
  background-color: #4c63b6;
  font-family: 'Roboto';
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
`
export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`
export const ListItems = styled.div`
  width: 70%;
  min-height: 250px;
`
export const Image = styled.img`
  width: 15%;
  margin-top: 40px;
`
export const EmptyNoteHeading = styled.h1`
  font-family: 'Roboto';
  color: #334155;
  font-size: 20px;
`
export const EmptyNoteDescription = styled.p`
  font-family: 'Roboto';
  color: #475569;
  font-size: 18px;
  font-weight: 500;
`
export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
