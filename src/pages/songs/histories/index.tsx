import { Layout } from "@/modules/shareds/Layout";

const RequriedVRCXCard = () => (
  <div className="items-center gap-3 space-y-4 rounded-lg bg-card p-4">
    <img
      src="https://raw.githubusercontent.com/vrcx-team/VRCX/master/VRCX.ico"
      alt="VRCX"
      className="h-10 w-10"
    />
    <div className="space-y-0">
      <h1 className="text-lg font-medium">
        This page required <b>VRCX</b> to grab the songs data from VRChat
      </h1>
      <p className="text-subtitle text-sm">
        If you don&apos;t know what is VRCX,{" "}
        <a
          className="font-medium hover:underline"
          href="https://github.com/vrcx-team/VRCX"
        >
          you can download it from here
        </a>
      </p>
    </div>
  </div>
);

export default function Home() {
  return (
    <Layout>
      <div className="space-y-4 md:px-3">
        <div>
          <h1 className="text-2xl font-medium">Songs Histories</h1>
          <p className="text-subtitle text-sm">
            Let&apos;s see what songs we danced 🧐
          </p>
        </div>
        <RequriedVRCXCard />
      </div>
    </Layout>
  );
}
