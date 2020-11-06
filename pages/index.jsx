import Layout from "../components/Layout";

export default function index() {
  return (
    <Layout>
      <div className="flex min-h-screen">
        <div className="m-auto">
          <div className="container">
            <div className="container grid grid-cols-3">
              <img
                src="/assets/edwin.png"
                className="rounded-full col-start-2 object-center"
              />
            </div>
            <h1 className="text-white text-2xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-6xl text-center">
              Edwin Patricio Narváez
            </h1>
            <p className="text-white text-xl sm:text-xl text-center">
              I'm Frontend developer
            </p>
            <p className="text-white text-xl text-center mt-5 font-light ">
              Nowadays i'm studing Computer engineering
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
