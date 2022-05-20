import axios from 'axios';

class InstagramAPI {
  getUserMedia = (accessToken, count) => {
    return new Promise((resolve, reject) => {
      axios.get('https://graph.instagram.com/me/media?fields=id,media_url,caption', {
        params: {
          access_token: accessToken,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            resolve(response.data);
          } else {
            reject(response);
          }
        })
        .catch(error => reject(error));
    });
  };
  

  loadMorePhotos = (paginationUrl) => {
    return new Promise((resolve, reject) => {
      axios.get(paginationUrl)
        .then((response) => {
          if (response.status === 200) {
            resolve(response.data);
          } else {
            reject(response);
          }
        })
        .catch(error => reject(error));
    });
  }
}

export default new InstagramAPI();
