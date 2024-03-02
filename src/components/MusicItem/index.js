import {AiOutlineDelete} from 'react-icons/ai'

import {
  MusicList,
  TrackInfoContainer,
  MusicImage,
  NameGenreContainer,
  Name,
  Genre,
  DurationDeleteContainer,
  Duration,
  DeleteBtn,
} from './styledComponents'

const MusicItem = props => {
  const {musiceItemDetails, onClickDelete} = props
  const {id, imageUrl, name, genre, duration} = musiceItemDetails

  const onDeleteMusic = () => {
    onClickDelete(id)
  }

  return (
    <MusicList>
      <TrackInfoContainer>
        <MusicImage src={imageUrl} alt="track" />
        <NameGenreContainer>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </NameGenreContainer>
      </TrackInfoContainer>
      <DurationDeleteContainer>
        <Duration>{duration}</Duration>
        <DeleteBtn type="button" data-testid="delete" onClick={onDeleteMusic}>
          <AiOutlineDelete size={20} />
        </DeleteBtn>
      </DurationDeleteContainer>
    </MusicList>
  )
}
export default MusicItem
