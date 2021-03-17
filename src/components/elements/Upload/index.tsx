import { useDropzone } from 'react-dropzone';

import styles from './styles.module.scss';

export default function Upload() {

  const { acceptedFiles, fileRejections, getRootProps, getInputProps } = useDropzone({ accept: 'image/jpeg, image/png' });

  const files = acceptedFiles.map(file => (
    <p>{file.name}</p>
  ));

  return (
    <section className={styles.container}>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Click ou arraste para realizar o upload das imagens do produto.</p>
      </div>
      <h4>Imagens:</h4>
      {files}
      Quantidade: {files.length}
      <aside>
      </aside>
    </section>
  );
}
