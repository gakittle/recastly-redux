import { connect } from 'react-redux';
import VideoList from '../components/VideoList.js';
import changeVideo from '../actions/currentVideo.js';

const mapState = state => ({
  videos: state.videoList
});

const mapDispatch = dispatch => {
  return {
    handleVideoListEntryTitleClick: video => dispatch(changeVideo(video))
  };
};

const VideoListContainer = connect(
  mapState,
  mapDispatch
)(VideoList);

export default VideoListContainer;
