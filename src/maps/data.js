import axios from "axios"


export const getInitData = async (domain, paths) => {
    var initData = []

    for (let i = 0; i < paths.length; i++) {
      const URL = domain + "/" + paths[i];
      const data = await fetch(URL)
        .then((r) => {
            return r.json()
        })
        .catch((error) => {
            console.error(error);
        });

        initData.push(data.data);
    }
    return initData;
}


export const updateLayer = (layer, domain, path, page = 2) => {
    const URL = domain + "/" + path + "?page=" + page;
    axios
      .get(URL)
      .then((response) => {
        if (page >= response.data.total_page) {
          return;
        }

        layer.addData(response.data.data);
        updateLayer(layer, domain, path, page + 1);
      })
      .catch((error) => {console.error(error)});
  };
