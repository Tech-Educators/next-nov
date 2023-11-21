type petParam = {params: {pets: string}}

// first set of {} is for desctructing params, everything after : is representing that things are inside objects, as we're 'typing' things. 
export default function Page({params}: petParam ) {
    return (
        <div>
            <h2>This is my dynamic route paramater: {params.pets} </h2>
        </div>
    )
}


// This represents the object that nextjs is passing as a prop to our page components. 
// FunkyNextObject = {
//     params: {
//         pets: 'whatever we type in the url'
//     }
// }