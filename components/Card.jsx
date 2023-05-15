import React, { useEffect, useState } from 'react'
import { createClient } from "contentful"

const Card = () => {

    const [cards, setCards] = useState([])
    console.log(cards);

    const client = createClient({
        space: '85iynf6xw7x7',
        accessToken: 'TN9HVY7Wu8NIDBpO3NE6C3jH3MUPl_fHXd6-3L9E3sE'
    })

    useEffect(() => {
        const consultarApi = async () => {
            try {
                const res = await client.getEntries({
                    content_type: 'card'
                })
                setCards(res.items)
                // await client.getEntries().then(entries =>{
                //     setCards(entries.items)
                // })
            } catch (error) {
                console.log(error);
            }
        }
        consultarApi()
    }, [])

    return (
        <div className="">
            {cards.map(data => (
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={data.fields.image.fields.file.url} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{data.fields.title}</h2>
                        <p>{data.fields.description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">{data.fields.button}</button>
                        </div>
                    </div>
                </div>
                // <div className="flex flex-col gap-4 items-center text-center" key={data.sys.id}>
                //   <img  className="mb-6" src={data.fields.image.fields.file.url} alt="" />
                //     <p className="text-2xl font-semibold ">{data.fields.title}</p>
                //     <p className="text-sm text-gray-400">{data.fields.text}</p>
                // </div>  
            ))}
        </div>
    )
}

export default Card