import { Component } from 'react';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';

import { Container } from './App.styled';

class App extends Component {
  render() {
    return (
      <Container>
        <Searchbar />
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
        <Button />
      </Container>
    );
  }
}

export default App;
