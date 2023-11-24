type paramsType = {
    params: {
        slug: string
    }
}

export default function Page({params} : paramsType) {
    return (
        <h1>These are the params: {params.slug}</h1>
    )

}

// let WeirdEsotericNextObject = {
//     params : {
//         slug: 'puff'
//     }
// }

// function CardPage({name}) {
//     return <h1>{name}</h1>
// }

// <CardPage name='sam'/>