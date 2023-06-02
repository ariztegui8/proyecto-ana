import React from 'react'
import { Configuration, OpenAIApi } from "openai";

const GenerateImage = () => {

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);

      const generateImg = async ()=>{
        const res = await openai.createImage({
            prompt: "gato negro",
            n: 1,
            size: "512x512",
        });

        console.log(res.data.data[0].url);
      }

  return (
    <div>
        <button onClick={generateImg} className="btn">Generate</button>
    </div>
  )
}

export default GenerateImage