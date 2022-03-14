import axios from 'axios';
import store from '@/store/index.js';

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
    return apiClient.post(`/media`, formData, {
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