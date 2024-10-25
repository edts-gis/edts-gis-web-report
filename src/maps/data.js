import axios from "axios"


export const getInitData = async (domain, layers) => {
    var initLayer = []

    for (let i = 0; i < layers.length; i++) {
      const URL = domain + "/" + layers[i].url;
      
      const response = await axios.get(URL)

      initLayer.push({
        id: layers[i].id,
        data: response.data.data,
        totalPage: response.data.total_page
      })
    }
    return initLayer;
}

export const mappingLayers = (layers, initMapLayers, initLayerData) => {
  const dataLayers = Object.fromEntries(
    initLayerData.map((l) => { return [l.id, l.totalPage]; })
  );
  const mapLayers = layers.map((l) => {
    const tmpLayer = {
      id: l.id,
      label: l.label,
      url: l.url,
      totalPage: dataLayers[l.id],
      layer: initMapLayers[l.id]
    }
    return tmpLayer;
  });
  return mapLayers;
}


export const updateLayer = (mapLayer, hostname, startPage = 2, batch = 3) => {
    let URLS = []
    const maxBatch = Math.min(startPage + batch, mapLayer.totalPage)
    for (let p = startPage; p <= maxBatch; p++) {
      URLS.push(hostname + "/" + mapLayer.url + "?page=" + p);
    }

    axios.all(URLS.map((url) => axios.get(url)))
      .then((responses) => {
        responses.forEach((r) => {
          mapLayer.layer.addData(r.data.data);
        });
      })
      .catch((error) => {console.error(error);});

    if (maxBatch < mapLayer.totalPage) {
      updateLayer(mapLayer, hostname, maxBatch + 1, batch);
    }
  }
