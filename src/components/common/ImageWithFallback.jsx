import { useState } from 'react';

function ImageWithFallback({
  src,
  alt,
  label = 'Preview unavailable',
  className = '',
  imgClassName = '',
  width,
  height,
  loading = 'lazy',
}) {
  const [failed, setFailed] = useState(!src);

  return (
    <div className={`image-frame ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          className={`h-full w-full object-contain ${imgClassName}`}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="image-fallback" role={alt ? 'img' : undefined} aria-label={alt}>
          <span>{label}</span>
        </div>
      )}
    </div>
  );
}

export default ImageWithFallback;
