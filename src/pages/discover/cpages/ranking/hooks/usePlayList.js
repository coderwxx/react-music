import { eventBus } from "../../../../../utils/event-bus";

import { useCallback, useState, useEffect } from "react";

export default function () {
  const [playList, setPlayList] = useState([]);
  const getPlayList = useCallback((playList) => {
    setPlayList(playList);
  }, []);
  const changePlayList = useCallback((playList) => {
    setPlayList(playList);
  }, []);
  useEffect(() => {
    eventBus.addListener("getPlayList", getPlayList);
    eventBus.addListener("changePlayList", changePlayList);
    return () => {
      eventBus.removeListener("getPlayList", getPlayList);
      eventBus.removeListener("changePlayList", changePlayList);
    };
  }, [changePlayList, getPlayList]);
  return playList;
}
