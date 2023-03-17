import { useRouter } from "next/router";
import Head from "next/head";
import Link from 'next/link';
import Image from "next/image";

export default function Car({ car }) {
  const router = useRouter();
  const { id } = router.query;
  const img_src = car.image

  return (
    <>
      <Head>
        <title>
          {car.color} {car.id}
        </title>
      </Head>
      <h1>Hello {id}</h1>
      <Link href="/cars"><h3>Home</h3></Link>
      <Image loader={() => img_src} src={img_src} alt={id} width="1000" height="700" />
    </>
  );
}

// * Server Side Rendering (SSR) # ========== #
export async function getServerSideProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
    props: { car: data },
  };
}

// * Static Generation (SSG) # ========== #
// export async function getStaticProps({ params }) {
//   const req = await fetch(`http://localhost:3000/${params.id}.json`);
//   const data = await req.json();

//   return {
//     props: { car: data },
//   };
// }

// export async function getStaticPaths() {
//   const req = await fetch("http://localhost:3000/cars.json");
//   const data = await req.json();

//   const paths = data.map((car) => {
//     return { params: { id: car } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }
