import multer from 'multer'
import path from 'path';
import crypto from 'crypto';

//Upload de ARQUIVOS //
export default{
  storage:multer.diskStorage({
    destination: 
    path.resolve(__dirname,'..','..','uploads'),
    filename(request, file, callback){
      const hash = crypto.randomBytes(2).toString('hex');

      const filename = `${file.originalname}-${hash}`;

      callback(null,  filename);
    }
  })
}