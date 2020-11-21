import Layout from "../components/Layout";
import Head from "next/head";

const prefix = "/briefcase";

export default function about() {
  return (
    <Layout>
      <Head>
        <title>Edwin Narváez - About me</title>
      </Head>
      <div className="flex min-h-screen">
        <div className="m-auto dark:text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 mb-5">
            <div className=" mx-5 md:col-start-2  md:col-span-2 flex flex-row">
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
          <div className="grid grid-cols-1 md:grid-cols-4 ">
            <div className="md:col-start-2 md:col-span-2 mx-5 text-xl">
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
              <div className="flex items-baseline gap-5 bg-cyan-100 dark:bg-blueGray-800  mt-5 p-5">
                <a href="https://www.facebook.com/Pa7ricioN" target="_blank">
                  <svg className="svg-icon" viewBox="0 0 20 20">
                    <path
                      fill="none"
                      d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"
                    ></path>
                  </svg>
                </a>
                <a href="https://twitter.com/edwptr" target="_blank">
                  <svg className="svg-icon" viewBox="0 0 20 20">
                    <path
                      fill="none"
                      d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"
                    ></path>
                  </svg>
                </a>
                <a href="https://github.com/edw19" className="dark:text-black" target="_blank">
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
