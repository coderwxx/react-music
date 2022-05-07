import { getSongDetail, getLyric } from "../../../service/player";
import * as actionTypes from "./constants";
import { parseLyric } from "../../../utils/parseLyric";

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
});

export const changeSequenceAciton = (sequence) => ({
  type: actionTypes.CHANGE_CURRENT_SEQENCE,
  sequence,
});

export const changeCurrentSongIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index,
});

const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAYLIST,
  playList,
});

const changeLyricListAciton = (lyricList) => ({
  type: actionTypes.CHANGE_LYRICLIST,
  lyricList,
});

export const changeLyricIndexAction = (lyricIndex) => ({
  type: actionTypes.CHANGE_LYRIC_INDEX,
  lyricIndex,
});

// 获取歌词的移动距离
export const changeTranslateYAciton = (translateY) => ({
  type: actionTypes.CHANGE_TRANSLATE_Y,
  translateY,
});

export const clearPlayListAction = (playList) => ({
  type: actionTypes.CLEAR_PLAYLIST,
  playList,
});

//根据播放模式判断下一首/上一首该播放什么歌曲
export const changeCurrentSongAndIndexAction = (tag) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(["player", "playList"]);
    const sequence = getState().getIn(["player", "sequence"]);
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);
    switch (sequence) {
      // 随机播放
      case 1:
        let randomIndex = Math.floor(Math.random() * playList.length);
        while (randomIndex === currentSongIndex) {
          randomIndex = Math.floor(Math.random() * playList.length);
        }
        currentSongIndex = randomIndex;
        break;
      // 顺序播放
      default:
        currentSongIndex += tag;
        if (currentSongIndex === playList.length) currentSongIndex = 0;
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
        break;
    }

    // 更改当前歌曲以及当前currentIndex
    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongAction(currentSong));
    dispatch(changeCurrentSongIndexAction(currentSongIndex));

    // 请求歌词
    dispatch(getLyricAction(currentSong.id));
  };
};

export const getCurrentSongAction = (ids) => {
  return (dispatch, getState) => {
    // 判断在播放列表中是否能够查找到歌曲
    const playList = getState().getIn(["player", "playList"]);
    const currentIndex = playList.findIndex((item) => item.id === ids);
    // 找到了该歌曲
    let song = null;
    if (currentIndex !== -1) {
      song = playList[currentIndex];
      dispatch(changeCurrentSongIndexAction(currentIndex));
      dispatch(changeCurrentSongAction(song));

      // 请求歌词数据
      dispatch(getLyricAction(ids));
    } else {
      // 请求歌曲
      getSongDetail(ids).then((res) => {
        const song = res.songs && res.songs[0];
        if (!song) return;

        // 1.将最新请求到的歌曲添加到播放列表中
        const newPlayList = [...playList];
        newPlayList.push(song);

        // 2.更新redux的值
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        dispatch(changeCurrentSongAction(song));

        // 3.请求歌词数据
        dispatch(getLyricAction(ids));
      });
    }
  };
};

export const getLyricAction = (id) => {
  return (dispatch) => {
    getLyric(id).then((res) => {
      const lyric = res.lrc.lyric;
      const lyricList = parseLyric(lyric);
      dispatch(changeLyricListAciton(lyricList));
    });
  };
};
