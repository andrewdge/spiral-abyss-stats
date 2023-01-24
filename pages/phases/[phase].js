import { connectToDatabase } from "../../util/mongodb";

const Phase = ({things}) => {
    // return (
    //     <div>
    //       <h1>Data</h1>
    //       <p>
    //         <small>(From mongodb)</small>
    //       </p>
    //       <ul>
    //         {things.map((thing) => (
    //           <li key={thing.name}>
    //             <h2>Name:{' '+thing.name}</h2>
    //             <p>Color: {' '+thing.color}</p>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   );
    return (
      <></>
    )
}

// export async function getStaticPaths(){
//   return {
//       paths: [
//         { params: { phase: '1'}},
//       ],
//       fallback: false
//   }
// }

// export async function getStaticProps() {
//     const { db } = await connectToDatabase();

//     const things = await db
//         .collection("1_6")
//         .find({})
//         .limit(2)
//         .toArray();

//     return {
//         props: {
//             things: JSON.parse(JSON.stringify(things)),
//         }
//     }
    
// }


export default Phase