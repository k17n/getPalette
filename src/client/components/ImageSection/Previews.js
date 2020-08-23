import React, {useEffect, useState, useRef} from 'react';
import {useDropzone} from 'react-dropzone';
import GetPaletteButton from '../GetPaletteButton/GetPaletteButton';
import ColorThief from "colorthief";
// import { usePalette } from 'color-thief-react';
// import CardInput from './CardInput';

function Previews(props) {
  const [files, setFiles] = useState([]);
  const handleimage = React.createRef;
  const [showImage,setShowImage] = useState(true)
  // const [ input, imageURL, setInput, setImage] = useState('');
  const {getRootProps, 
    getInputProps,
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

  const inputFile = useRef(null);
  
  const thumbs = files.map(file => (
    <div className="thumb" key={file.name}>
      <div className="thumbInner">
        <img
          crossOrigin={"anonymous"}
          src={file.preview}
          ref={handleimage}
          className="img-fluid image"
          alt="uploadedImage"
        />
        <input type='file' id='file' ref={inputFile} accept="image/jpeg, image/png, image/jpg" style={{display: 'none'}}/>
        <button 
          className="update" 
          onClick={()=> inputFile.current.click()}
        >
        Change Image
        </button>
        <button
          className="remove" 
          onClick={()=> setShowImage({showImage: false})}
        >
        Remove Image
        </button>
      </div>
    </div>
  ));

  const colorThief = new ColorThief();
  // const img = document.querySelector('img');
  // colorThief.getPalette(img, 5)
  //   .then(palette => { console.log(palette) })
  //   .catch(err => { console.log(err) })

  useEffect(() => () => {
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