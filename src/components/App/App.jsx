import { Component } from 'react';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';

import { getImage } from 'services/getImageAPI';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './App.styled';

class App extends Component {
  state = {
    searchValue: '',
    page: 1,
    hits: null,
  };

  componentDidUpdate(_, prevState) {
    const { searchValue, page } = this.state;

    if (searchValue !== prevState.searchValue) {
      getImage(searchValue, page)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then(data => {
          if (!data.totalHits) {
            toast.warning(
              `"${searchValue}" not found. Please enter something else.`
            );
            return;
          }

          this.setState(prev => ({ hits: [...prev.hits, ...data.hits] }));
        })
        .catch(error => console.log(error));
    }
  }

  handleSubmit = searchValue => {
    this.setState({ searchValue, page: 1, hits: [] });
  };

  render() {
    const { hits } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />

        {hits && (
          <ImageGallery>
            <ImageGalleryItem images={hits} />
          </ImageGallery>
        )}

        <Button />

        <ToastContainer autoClose={3000} theme="colored" />
      </Container>
    );
  }
}

export default App;
