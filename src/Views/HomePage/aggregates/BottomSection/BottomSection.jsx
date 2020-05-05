import React, { useEffect, useState } from 'react';
import { useHistory, Link } from "react-router-dom";
import {
  Container
} from './style';
import useFetch from '../../../../utils/useFetch';
import Image from '../../../../components/Image/Image';


const LoginPage = function (props) {
  const [images, setImages] = useState([]);
  const [data, loading] = useFetch(
    "https://www.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=667a6ce5f358b237ec13e9d99bb659de&group_id=2309748%40N20&format=json"
  );
  let history = useHistory();
  const handleOnClick = () => {
    history.push("/login");
  };
  useEffect(()=>{
    if(loading === 2) {
      // https://farm{farm_id}.staticflickr.com/{server}/{photo_id}_{secret}.jpg
      const img = data.map(item => {
        return `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`;
      })
      setImages(img);
    }
  }, [loading, data]);
  const imgs = images.map((item, index) => (
    <Link
      to={`/image/${index}`}
    >
      <Image src={item} alt={item} width={200} height={200} />
    </Link>
  ));
  return (
    <Container>
      {loading === 1 ? (
        "Loading..."
      ) : imgs}
    </Container>
  )
};
export default LoginPage;
