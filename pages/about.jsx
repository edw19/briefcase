import Layout from "../components/Layout";
import Head from "next/head";
  
const prefix =  '/briefcase'

export default function about() {
  return (
    <Layout>
      <Head>
        <title>Edwin Narváez - About me</title>
      </Head>
      <div className="flex min-h-screen">
        <div className="m-auto text-white">
          <div className="grid grid-cols-3 mb-5">
            <div className="col-start-2 flex flex-row">
              <img
                src={prefix + "/assets/edwin.png"}
                alt="Edwin Patricio Narváez"
                className="rounded-full"
                width="50px"
                height="50px"
              />
              <h1 className="text-2xl ml-5">Hi! I'm Edwin 👋</h1>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="col-start-2 text-xl">
              Nowadays i'm studing Computer engineering. I was born in 1994 (you
              can do the math). Affter graduating high School and ramble for two
              years I find in the developing my passion, the code{" "}
              <span className="text-xl text-red-500">♥</span>. I went to{" "}
              <a
                href="https://upec.edu.ec/"
                className="uppercase text-indigo-500"
                target="_blank"
              >
                UPEC University{" "}
              </a>{" "}
              where I finished my studies and soon I will deliver my thesis
              work.
              <br />
              <div className="flex flex-row gap-5 mt-5 border p-5">
                <a href="https://www.facebook.com/Pa7ricioN" target="_blank">
                  Facebook
                </a>
                <a href="https://twitter.com/edwptr" target="_blank">
                  twitter
                </a>
                <a href="https://github.com/edw19" target="_blank">
                  github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
