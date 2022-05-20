import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import ButtonsPanel from './ButtonsPanel';
import Grid from './Grid';
import GridImage from './Grid/GridImage';
import InstagramAPI from '../../api/InstagramAPI';
import PropTypes from 'prop-types';

export default class PhotoPicker extends Component {
  state = {
    pickedPhotos: [],
    instagramPhotos: [],
    isLoadingMore: false,
    hasMore: true
  };

  componentDidMount() {
    this.setState({
      instagramPhotos: this.createArrayOfInstagramPhotos(this.props.photos),
      // instagramUserName: this.props.photos[0] ? this.props.photos[0].user.full_name || '' : '',
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isLoadingMore: false,
      instagramPhotos: this.createArrayOfInstagramPhotos(nextProps.photos)
    });
  }

  selectImage = (media_url) => {
    if (this.state.pickedPhotos.filter(item => item === media_url).length > 0) {
      this.setState((prevState) => {
        return { pickedPhotos: prevState.pickedPhotos.filter(item => item !== media_url) };
      });
    } else {
      this.setState((prevState) => {
        return { pickedPhotos: [...prevState.pickedPhotos, media_url] };
      });
    }
  };

  createArrayOfInstagramPhotos = (imagesData) => {
    return imagesData.map(child =>
      (<GridImage
        onSelect={this.selectImage}
        key={child.media_url}
        standard={child.media_url}
        low={child.media_url}
      />)
    );
  };

  appendToArrayOfInstagramPhotos = (imagesData, paginationUrl) => {
    this.props.loadMore(imagesData, paginationUrl);
  };

  loadMorePictures = () => {
    this.setState({ isLoadingMore: true });
    InstagramAPI.loadMorePhotos(this.props.pagination)
      .then((data) => {
        this.appendToArrayOfInstagramPhotos(data.data, data.paging.next);
      })
      .catch(() => {
        this.setState({ isLoadingMore: false });
        this.setState({ hasMore: false });
        console.error('Instagram', 'There are no more photos left.');
      });
  };

  confirmSelect = () => {
    if (this.state.pickedPhotos.length > 0) {
      this.props.confirm(this.state.pickedPhotos);
      console.log(this.state.pickedPhotos)
      this.props.cancel();
    }
  };

  render() {
    return (
      <div className={css(styles.container)}>
        <Grid
          photos={this.state.instagramPhotos}
          pickedCount={this.state.pickedPhotos.length}
        />
        <ButtonsPanel
          count={this.state.pickedPhotos.length}
          cancel={this.props.cancel}
          loadingMore={this.state.isLoadingMore}
          hasMore={this.state.hasMore}
          load={this.loadMorePictures}
          confirm={this.confirmSelect}
        />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    borderBottomLeftRadius: '1em',
    borderBottomRightRadius: '1em',
    borderTopLeftRadius: '0.5em',
    borderTopRightRadius: '0.5em',
    padding: '0.75em',
    backgroundColor: '#f6f8fa',
  },
});

PhotoPicker.propTypes = {
  confirm: PropTypes.func.isRequired,
  photos: PropTypes.array.isRequired,
  cancel: PropTypes.func.isRequired,
  pagination: PropTypes.string.isRequired,
  loadMore: PropTypes.func.isRequired,
};
