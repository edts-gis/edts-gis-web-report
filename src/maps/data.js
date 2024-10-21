import axios from "axios"


export const getInitData = async (domain, paths) => {
    var initData = []
    var totalPages = []

    for (let i = 0; i < paths.length; i++) {
      const URL = domain + "/" + paths[i];
      
      const response = await axios.get(URL)
      initData.push(response.data.data)
      totalPages.push(response.data.total_page);
    }
    return [initData, totalPages];
}


export const updateLayer = (layer, domain, path, total_page, start_page = 2, batch = 10) => {
    let URLS = []
    const max_batch = Math.min(start_page + batch, total_page)
    for (let p = start_page; p <= max_batch; p++) {
      URLS.push(domain + "/" + path + "?page=" + p);
    }

    axios.all(URLS.map((url) => axios.get(url)))
      .then((responses) => {
        responses.forEach((r) => {
          layer.addData(r.data.data);
        });
      })
      .catch((error) => {console.error(error);});

    if (max_batch < total_page) {
      updateLayer(layer, domain, path, total_page, max_batch + 1, batch);
    }
  }