import { useState } from "react";

function ImagenUploader(props){
    let [srcImage, setSrcImage] = useState("");

    function failx(event){
        setSrcImage(event.target.value);
        // Assuming only image
        var file = event.target.files[0];
        var reader = new FileReader();
        var url = reader.readAsDataURL(file.name);
        console.log(file);

        reader.onloadend = function (e) {
            event.target.setState({
                imgSrc: [reader.result]
            })
            }.bind(event.target);
        console.log(url) // Would see a path?
        // TODO: concat files
    }
    const handleSelectFileInput = e => {
        if (e.target.files[0]) {
          console.log("picture: ", e.target.files);
          //setPicture(e.target.files[0]);
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            setSrcImage(reader.result);
          });
          reader.readAsDataURL(e.target.files[0]);
        }
      };

    return(
    <div>
        <img src={srcImage}></img>
        <input onChange={handleSelectFileInput} type={"file"} placeholder="Select File"></input>
    </div>
    );
}

export default ImagenUploader;