import Layout from "../components/Layout";

const prefix = "/briefcase";

function index() {
  return (
    <Layout>
      <div className="flex min-h-screen">
        <div className="m-auto">
          <div className="container">
            <div className="container grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 items-center">
              <img
                src={prefix + "/assets/edwin.png"}
                className="rounded-full sm:col-start-2 md:col-start-2 lg:col-start-2  object-center"
              />
            </div>
            <h1 className="text-white animated-pulse text-2xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-6xl text-center">
              hi, I'm Edwin Narváez
            </h1>
            <p className="text-white text-xl sm:text-xl md:text-2xl text-center">
              Frontend developer
            </p>
            <p className="text-white text-xl text-center mt-5 font-light ">
              I want to help people make in your work better through quality
              software.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default index;
