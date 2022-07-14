import Head from "next/head";
import { PrivatePage } from "../ui";

export default function Planner() {
  return (
    <PrivatePage withMenu>
      Cia bus: 1. Sarasas receptu, kuriuos planuoja gaminti ( gal ir su
      kalorijom ar kazkokiu skaiciavimu?) 2. Pirkiniu krepselis
    </PrivatePage>
  );
}
// return (
//   <PrivatePage>
//     <Head>
//       <title>Create Next App</title>
//       <link rel="icon" href="/favicon.ico" />
//     </Head>

//     <main>
//       <h1>Welcome to ABOUT page</h1>
//     </main>

//     <footer></footer>
//   </PrivatePage>
// );
