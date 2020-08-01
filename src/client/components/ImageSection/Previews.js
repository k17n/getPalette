import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import GetPaletteButton from '../GetPaletteButton/GetPaletteButton';

function Previews(props) {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/jpeg, image/png, image/jpg', 
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const thumbs = files.map(file => (
    <div className="thumb" key={file.name}>
      <div className="thumbInner">
        <img
          src={file.preview}
          className="img"
          alt="uploadedImage"
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="container p-0 h-100">
      <div {...getRootProps({
        className: 'dropzone d-flex flex-column justify-content-center align-items-center'}
        )}>
        <input {...getInputProps()} />
        <p className="dns">Drag 'n' drop an Image here </p>
        <span className="or">OR</span>
        <input className="url" type = "text" placeholder="Paste the Image URL here" />
      </div>
      <aside>
        {thumbs}
        <GetPaletteButton />
      </aside>
    </section>
  );
}

export default Previews;