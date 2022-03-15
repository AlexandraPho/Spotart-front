import axios from 'axios';
import store from '@/store/index.js';
<<<<<<< HEAD

const apiClient = axios.create({
  baseURL: 'http://spotart.local/wp-json/wp/v2/',
  headers:  {
      Accept: 'application/json',
      'content-Type': 'application/json'
  },
  timeout: 5000
});


class UploadFilesService {
  upload(file,onUploadProgress) {
    let formData = new FormData();
    formData.append("file", file);
    return apiClient.post(`/upload`, formData, {
      headers: {
        'Authorization': 'Bearer ' + store.state.token,
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  }
  getFiles() {
    return apiClient.get("/files");
  }
}
export default new UploadFilesService();
=======
// We will use the store when we will add the authentication bearer

const apiClient = axios.create({
    baseURL: 'http://spotart.local/wp-json/wp/v2',
    headers:  {
        Accept: 'application/json',
        'content-Type': 'application/json',
    },
    timeout: 10000
});

export default {
    uploadMedia(Formdata, callback){
        apiClient.post('/media', Formdata, {
            headers : {
                'Content-Type':'multipart/form-data',
                'Authorization' : 'Bearer ' + store.state.token
            }
        }).catch(
            (error) => {
                callback({
                    type: 'error',
                    message: error.response.data.message
                });
            }
        ).then(response => {
            console.log(response);
            callback({
                type: 'success',
                message: 'le fichier a été téléchargé avec succès',
                newFileInfo: response.data
            });
        });
    }
}
>>>>>>> 8f576174ce0bfa009a10204fa05a7c1ccc198453
