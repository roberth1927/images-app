
export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=DdRXCSSAccxDRaLs87GgwRvhHEWL3Xxa&q=${category}&limit=10`;
    const res = await fetch(url);
    const {data} = await res.json();
    const gifs = data.map(item => ({
          id: item.id,
          title: item.title,
          url: item.images.downsized_medium.url
    }));

   return gifs;

}


