import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Slider, message } from "antd";

import PlayerPannel from "../app-player-pannel";
import { PlayerBarWrapper } from "./style";
import {
  changeSequenceAciton,
  changeCurrentSongAndIndexAction,
  changeLyricIndexAction,
  changeTranslateYAciton,
} from "../store/actionCreators";
import {
  getImageUrl,
  formatMinuteSecond,
  getPlaySong,
} from "@/utils/format-data";

export default memo(function XXAppPlayerBar() {
  // props and state
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  // redux hook
  const dispatch = useDispatch();
  const { currentSong, sequence, lyricList, lyricIndex } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      sequence: state.getIn(["player", "sequence"]),
      lyricList: state.getIn(["player", "lyricList"]),
      lyricIndex: state.getIn(["player", "lyricIndex"]),
    }),
    shallowEqual
  );

  // other hooks

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
    audioRef.current
      .play()
      .then((res) => {
        setIsPlaying(true);
      })
      .catch((err) => {
        setIsPlaying(false);
      });
  }, [currentSong]);
  // 获取到audio对象
  const audioRef = useRef();

  // other handle
  const picUrl = (currentSong && currentSong.al && currentSong.al.picUrl) || "";
  const name = (currentSong && currentSong.name && currentSong.name) || "";
  const artist =
    (currentSong && currentSong.ar && currentSong.ar[0].name) || "";
  const dt = (currentSong && currentSong.dt && currentSong.dt) || 0;
  const showDuration = formatMinuteSecond(dt);
  const showCurrentTime = formatMinuteSecond(currentTime);

  // other functions
  const playMusic = useCallback(() => {
    !isPlaying ? audioRef.current.play() : audioRef.current.pause();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  // 时间更改的回调函数
  const timeUpdate = (e) => {
    // 获取到当前歌曲播放的时间
    const currentTime = e.target.currentTime * 1000;

    if (!isChanging) {
      setProgress((currentTime / dt) * 100);
      setCurrentTime(currentTime);
    }

    // 获取当前歌词
    let i = 0;
    for (; i < lyricList.length; i++) {
      const time = lyricList[i].time;
      if (currentTime < time) {
        break;
      }
    }
    if (lyricIndex !== i - 1) {
      dispatch(changeLyricIndexAction(i - 1));
      // 更改TranslateY的值
      if (i >= 3) {
        dispatch(changeTranslateYAciton(-32 * (i - 3)));
      }

      const content = lyricList[i - 1] && lyricList[i - 1].content;
      message.open({
        content,
        duration: 0,
        key: "lyric",
      });
    }
  };

  const sliderChange = useCallback(
    (value) => {
      setIsChanging(true);
      const currentTime = (value / 100) * dt;
      setCurrentTime(currentTime);
      setProgress(value);
      if (!isPlaying) {
        playMusic();
      }
    },
    [dt, isPlaying, playMusic]
  );

  const sliderAfterChange = useCallback(
    (value) => {
      const currentTime = ((value / 100) * dt) / 1000;
      audioRef.current.currentTime = currentTime;
      setIsChanging(false);
      setCurrentTime((value / 100) * dt);
    },
    [dt]
  );
  const handlePlayMode = () => {
    // 更改播放模式
    let currentSequence = sequence + 1;
    if (currentSequence > 2) {
      currentSequence = 0;
    }
    dispatch(changeSequenceAciton(currentSequence));
  };

  // 播放上一首/下一首
  const changeMusic = (tag) => {
    dispatch(changeCurrentSongAndIndexAction(tag));
  };

  const handleMusicEnded = () => {
    // 单曲循环
    if (sequence === 2) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changeCurrentSongAndIndexAction(1));
    }
  };
  return (
    <PlayerBarWrapper
      className="sprite_playbar"
      isPlaying={isPlaying}
      sequence={sequence}
    >
      <div className="content wrap-v1">
        <div className="control">
          <button
            className="prev sprite_playbar btn"
            onClick={(e) => {
              changeMusic(-1);
            }}
          ></button>
          <button
            className="play sprite_playbar btn"
            onClick={playMusic}
          ></button>
          <button
            className="next sprite_playbar btn"
            onClick={(e) => {
              changeMusic(1);
            }}
          ></button>
        </div>
        <div className="image">
          {picUrl ? <img src={getImageUrl(picUrl, 35)} alt="" /> : ""}
          <a href="/#" className="cover sprite_playbar">
            {""}
          </a>
        </div>
        <div className="info">
          <div className="song">
            <a href="#/" className="album">
              {name}
            </a>
            <a href="#/" className="artist">
              {artist}
            </a>
          </div>
          <Slider
            value={progress}
            onChange={sliderChange}
            onAfterChange={sliderAfterChange}
          />
        </div>
        <div className="time">
          <span className="total-time">{showDuration} </span>
          <span className="current-time"> / {showCurrentTime} </span>
        </div>
        <div className="operator">
          <div className="left">
            <button className="favor btn sprite_playbar"></button>
            <button className="share btn sprite_playbar"></button>
            <div className="right sprite_playbar">
              <button className="volumn btn sprite_playbar"></button>
              <button
                className="loop btn sprite_playbar"
                onClick={handlePlayMode}
              ></button>
              <button
                className="playlist btn sprite_playbar"
                onClick={(e) => setShowPanel(!showPanel)}
              ></button>
            </div>
          </div>
        </div>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={(e) => timeUpdate(e)}
        onEnded={(e) => {
          handleMusicEnded(e);
        }}
      ></audio>
      {showPanel && <PlayerPannel />}
    </PlayerBarWrapper>
  );
});
