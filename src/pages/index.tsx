import { Layout } from "@/modules/shareds/Layout";
import { api } from "@/utils/api";
import { getYTImage, getYTVideoId } from "@/utils/youtube";
import Head from "next/head";

export default function Home() {
  const { data } = api.songs.search.useQuery();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="grid grid-cols-3 gap-4">
          {data?.songs.slice(0, 100).map((song) => (
            <div key={song.id} className="space-y-2">
              <img
                className="aspect-video w-full rounded-lg object-cover"
                src={getYTImage(getYTVideoId(song.originalUrl[0] ?? ""))}
                alt={song.name}
              />
              <div className="space-y-0">
                <h1>{song.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}
