import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
// import CardInput from './CardInput';
import GetPaletteButton from '../GetPaletteButton/GetPaletteButton';

function Previews(props) {
  const [files, setFiles] = useState([]);
  // const [ input, imageURL, setInput, setImage] = useState('');
  const {getRootProps, getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject} = useDropzone({
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
          className="img-fluid"
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
    <div className="d-flex justify-content-center align-items-center mt-5">
     
      {!files.length ? (
       <div className="image-section">
      <section className="container p-0 h-100">
      <div {...getRootProps({
          className: 'dropzone d-flex flex-column justify-content-center align-items-center'}
          )}>
          <input {...getInputProps()} />
          {isDragAccept && (<p className="dns">Only Accepts JPG, JPEG, PNG File Format</p>)}
            {isDragReject && (<p className="dns">Oops! This File Format is not Supported!</p>)}
            {!isDragActive && (<p className="dns">Drag 'n' drop an Image here </p>)}
        </div>
        {/* <CardInput onInputChange={(event) => setInput({input: event.target.value})} onButtonSubmit={()=>setImage({imageURL: input})} imageURL={imageURL} /> */}
        </section>
        </div>) :
        (
        <section className="container p-0 h-100" style={{width:'820px', height:'485px'}}>
          <aside>
            {thumbs}
            <GetPaletteButton/>
          </aside>
        </section>
        )}
    </div>
  );
}

export default Previews;