import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(0);
  async function fetchUrl() {
    setLoading(1);
    fetch(url)
    .then(response => response.text())
    .then(data => {
      let d = data.replace('jsonFlickrApi(', '');
      d = d.substring(0, d.length - 1);
      setData(JSON.parse(d).photos.photo);
      setLoading(2);
    })
    .catch(error => {
      setData(error);
      setLoading(3);
    });
    
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
} 