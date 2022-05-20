import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import { Grid as MGrid } from '@mui/material';
import PropTypes from 'prop-types';

export default class Grid extends Component {
  render() {
    return (
      // <MGrid container>
      //   {this.props.photos.map(photo =>
      //   (<MGrid item xs={3} key={photo.media_url}>
      //     {photo}
      //   </MGrid>)
      //   )}
      // </MGrid>
      <div className={css(styles.wrapper1)}>
        {this.props.photos}
      </div>
    );
  }
}

Grid.propTypes = {
  photos: PropTypes.array.isRequired,
  pickedCount: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 0fr)',
    backgroundColor: 'white',
    borderRadius: '0.5em',
    padding: '0.75em',
    gridGap: '1em',
    overflow: 'scroll',
    maxHeight: '30em',
  },
  wrapper1: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: '0.5em',
    padding: '0.75em',
    gridGap: '1em',
    overflow: 'scroll',
    maxHeight: '30em',
    maxWidth: '75vw'
  },
});
