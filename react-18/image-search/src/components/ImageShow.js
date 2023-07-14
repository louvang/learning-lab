function ImageShow({ image }) {
  return (
    <div>
      <img src={image.urls.thumb} alt={image.alt_description} />
    </div>
  );
}

export default ImageShow;
