// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  MainContainer,
  MainHeading,
  NoteForm,
  Input,
  TextArea,
  Button,
  Ul,
  ListItems,
  Image,
  EmptyNoteHeading,
  EmptyNoteDescription,
  EmptyContainer,
} from './styledComponents'
import NoteItem from '../NoteItem'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }
  const onChangeNotes = event => {
    setNotes(event.target.value)
  }

  const onSubmitForm = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      notes,
    }
    setNotesList(prevState => [...prevState, newNote])
    setTitle('')
    setNotes('')
  }

  return (
    <>
      <MainContainer>
        <MainHeading>Notes</MainHeading>
        <NoteForm onSubmit={onSubmitForm}>
          <Input placeholder="Title" value={title} onChange={onChangeTitle} />
          <TextArea
            rows={30}
            cols={30}
            placeholder="Take a Note..."
            value={notes}
            onChange={onChangeNotes}
          />
          <Button type="submit">Add</Button>
        </NoteForm>
        <ListItems>
          {notesList.length === 0 ? (
            <EmptyContainer>
              <Image
                src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
                alt="notes empty"
              />
              <EmptyNoteHeading>No Notes Yet</EmptyNoteHeading>
              <EmptyNoteDescription>
                Notes you add will appear here
              </EmptyNoteDescription>
            </EmptyContainer>
          ) : (
            <Ul>
              {notesList.map(eachList => (
                <NoteItem key={eachList.id} notesList={eachList} />
              ))}
            </Ul>
          )}
        </ListItems>
      </MainContainer>
    </>
  )
}

export default Notes
