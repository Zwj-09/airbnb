import React, { memo, useEffect, useRef, useState } from 'react';
import loadingGif from '@/assets/img/loading.gif';

const LazyLoad = memo(({ src }) => {
  const [imgSrc, setImgSrc] = useState(loadingGif);
  const imgRef = useRef(null);

  useEffect(() => {
    let imgObserver;

    if (imgRef.current) {
      imgObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImgSrc(src);
            imgObserver.unobserve(imgRef.current);
          }
        });
      });

      imgObserver.observe(imgRef.current);
    }
  }, [src]);

  return <img ref={imgRef} src={imgSrc} alt="" />;
});

export default LazyLoad;
