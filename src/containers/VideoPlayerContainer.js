import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

const mapState = state => ({
  video: state.currentVideo
});

const VideoPlayerContainer = connect(
  mapState,
  null
)(VideoPlayer);

export default VideoPlayerContainer;
