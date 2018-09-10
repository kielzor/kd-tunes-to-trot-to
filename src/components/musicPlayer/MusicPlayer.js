import React from 'react'
// import ReactAudioPlayer from 'react-audio-player'

export const AudioPlayer = () => {
  const playlist = {
    url: '../../tunage/sample-song.mp3',
    cover: '',
    title: 'Sample Song',
    artist: [
      'Kiel Dehnert',
      'Zane Russell',
      'Marcus Spitz'
    ]
  }

  return (
    <div>
      <audio
      controls
      src= "https://freesound.org/people/Freed/sounds/1234">
      </audio>
      {/* <ReactAudioPlayer
        src="http://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3"
        autoPlay
        controls
      /> */}
    </div>
  )
}