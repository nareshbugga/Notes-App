// Write your code here
import {ListCard, ListHeading, ListDescription} from './styledComponents'

const NoteItem = props => {
  const {notesList} = props
  const {title, notes} = notesList
  console.log(notesList)
  return (
    <ListCard>
      <ListHeading>{title}</ListHeading>
      <ListDescription>{notes}</ListDescription>
    </ListCard>
  )
}

export default NoteItem
