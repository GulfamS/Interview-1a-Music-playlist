import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #152850;
  height: 100vh;
  background-size: cover;
`

export const BgImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 25vh;
  background-size: cover;
  padding-left: 80px;
`

export const SingerName = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 28px;
  font-weight: 500;
`

export const SingerInfo = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 20px;
`

export const SongPlaylistContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const PlaylistHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 700;
  margin-left: 40px;
`

export const Input = styled.Input`
  background-color: transparent;
  padding: 6px;
  border: 1px solid #cbd5e1;
  width: 18%;
  outline: none;
  cursor: pointer;
`

export const MusicList = styled.ul`
  margin-left: 40px;
  margin-right: 40px;
`

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NoSongText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
`
