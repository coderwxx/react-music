export const handleSongCategory = (data) => {
  // 1.获取所有的类别
  const category = data.categories;
  // 2.创建类别数据结构
  const categoryData = Object.entries(category).map(([key, value]) => {
    return {
      name: value,
      subs: [],
    };
  });

  console.log(categoryData);
  // 3.将subs添加到对应的类别中

  // Q：categoryData[item.category].subs.push为什么可以实现按类别添加数据？ categoryData[item.category]获取的是数组的每一项(0-4),给添加subs属性难道不应该是把所有的数据都加上了？

  for (const item of data.sub) {
    categoryData[item.category].subs.push(item);
  }

  return categoryData;
};

function generateSingerAlpha() {
  const singerAlpha = ["热门"];
  for (var i = 0; i < 26; i++) {
    singerAlpha.push(String.fromCharCode(65 + i));
  }
  singerAlpha.push("其他");
  return singerAlpha;
}
export const singerAlpha = generateSingerAlpha();
