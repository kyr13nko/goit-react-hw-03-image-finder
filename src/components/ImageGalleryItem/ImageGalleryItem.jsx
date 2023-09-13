import { Image, Item } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ images }) => {
  return images.map(({ id, webformatURL, tags }) => {
    return (
      <Item key={id}>
        <Image src={webformatURL} alt={tags} />
      </Item>
    );
  });
};

export default ImageGalleryItem;
