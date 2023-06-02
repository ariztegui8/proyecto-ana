import React, { useState } from 'react'
import { Configuration, OpenAIApi } from "openai";

const GenerateImage = () => {

  const [image, setImage] = useState(null)

    const configuration = new Configuration({
        apiKey: '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',
      });
      const openai = new OpenAIApi(configuration);

      const generateImg = async ()=>{
        const res = await openai.createImage({
            prompt: "caballo blanco",
            n: 1,
            size: "512x512",
        });

        console.log(res.data.data[0].url);
        setImage(res.data.data[0].url);
      }

  return (
    <div>
        <button onClick={generateImg} className="btn">Generate</button>
        <img src={image} alt="image" />
    </div>
  )
}

export default GenerateImage