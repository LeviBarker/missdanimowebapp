import Layout from "@/app/layout";

export default function Detail({ params }: { params: { id: string } }) {
  return (
    <Layout>
      <h1>Detail {params.id}</h1>
    </Layout>
  );
}

// export async function generateStaticParams() {
//   const posts = await fetch("https://.../posts").then((res) => res.json());

//   return posts.map((post: any) => ({
//     id: post.id,
//   }));
// }
