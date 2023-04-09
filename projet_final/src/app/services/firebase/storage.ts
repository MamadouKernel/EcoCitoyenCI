import { initializeApp } from 'firebase/app';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { environment } from 'src/environments/environment';

const app = initializeApp(environment.firebaseConfig);
const storage = getStorage(app);


export function addImageToTheStorage(file: File): Promise<{result : boolean , url : string}> {

  const storageRef = ref(storage, 'images/'+file.name);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      async (snapshot)  =>  {
        const url  = await getDownloadURL(uploadTask.snapshot.ref);
        return resolve({result : true , url  });
      },
      (error) => {
        // Handle unsuccessful uploads
        return reject({result : false , url : null});
      }
    );
  });
}