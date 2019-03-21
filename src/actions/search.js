import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var handleVideoSearch = q => {
  const options = { YOUTUBE_API_KEY, q, max: 5 };
  return dispatch => {
    searchYouTube(options, videos => {
      dispatch(changeVideoList(videos), changeVideo(videos[0]));
    });
  };
};

export default handleVideoSearch;
