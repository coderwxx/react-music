/*
[00:00.000] 作词 : 许嵩
[00:01.000] 作曲 : 许嵩
[00:02.000] 编曲 : 许嵩
[00:22.240]天空好想下雨
[00:24.380]我好想住你隔壁
[00:26.810]傻站在你家楼下
[00:29.500]抬起头数乌云
[00:31.160]如果场景里出现一架钢琴
[00:33.640]我会唱歌给你听
[00:35.900]哪怕好多盆水往下淋
[00:41.060]夏天快要过去
[00:43.340]请你少买冰淇淋
[00:45.680]天凉就别穿短裙
[00:47.830]别再那么淘气
[00:50.060]如果有时不那么开心
[00:52.470]我愿意将格洛米借给你
*/
const regExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
export function parseLyric(lyric) {
  const lineStrings = lyric.split("\n");
  const lyrics = [];
  for (const line of lineStrings) {
    if (line) {
      const result = regExp.exec(line);
      if (!result) return;
      const time1 = result[1] * 60 * 1000;
      const time2 = result[2] * 1000;
      const time3 = result[3].length === 3 ? result[3] * 1 : result[3] * 10;
      const time = time1 + time2 + time3;
      const content = line.replace(regExp, "").trim();

      // 去除有空白歌词 为了之后进行translateY的取值
      if (content) {
        const lineObj = { time, content };
        lyrics.push(lineObj);
      }
    }
  }
  return lyrics;
}
