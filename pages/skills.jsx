import Layout from "../components/Layout";
import Head from "next/head";

const skills = [
  {
    id: 1,
    title: "React JS",
    description: "A JavaScript library for building user interfaces",
    uri: "https://reactjs.org/",
    uriImage:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
  },
  {
    id: 2,
    title: "Tailwind CSS",
    description:
      "Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build",
    uri: "https://tailwindcss.com/",
    uriImage:
      "https://tailwindcss.com/_next/static/media/tailwindcss-mark.6ea76c3b72656960a6ae5ad8b85928d0.svg",
  },
  {
    id: 3,
    title: "Node JS",
    description:
      "Node.js® es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome",
    uri: "https://nodejs.org/es/",
    uriImage: "https://nodejs.org/static/images/logo.svg",
  },
  {
    id: 4,
    title: "GraphQL",
    description: "A query language for your API",
    uri: "https://graphql.org/",
    uriImage: "https://graphql.org/img/logo.svg",
  },
  {
    id: 5,
    title: "Express",
    description: "A query language for your API",
    uri: "https://expressjs.com/es/",
    uriImage:
      "https://cms.proxify.io/storage/images/5XAVEl5UvFTZYA75tvv39fc2evjxwBQh78DKK4ta.png",
  },
  {
    id: 6,
    title: "Apollo",
    description:
      "Simplify app development by combining APIs, databases, and microservices into a single data graph that you can query with GraphQL",
    uri: "https://www.apollographql.com/",
    uriImage:
      "https://seeklogo.com/images/A/apollo-logo-DC7DD3C444-seeklogo.com.png",
  },
  {
    id: 7,
    title: "React Native",
    description:
      "React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces",
    uri: "https://reactnative.dev/",
    uriImage:
      "https://raw.githubusercontent.com/kristerkari/react-native-svg-transformer/master/images/react-native-logo.png",
  },
  {
    id: 8,
    title: "MongoDB",
    description:
      "MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era",
    uri: "https://www.mongodb.com/",
    uriImage: "https://cdn.iconscout.com/icon/free/png-512/mongodb-226029.png",
  },
  {
    id: 9,
    title: "Git",
    description:
      "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
    uri: "https://git-scm.com/",
    uriImage: "https://git-scm.com/images/logo@2x.png",
  },
];

function Skills() {
  return (
    <Layout>
      <Head>
        <title>Edwin Narváez - Skills</title>
      </Head>
      <div className="flex min-h-screen">
        <div className="grid grid-cols-4 m-auto w-full">
          {skills.map((skill) => (
            <div key={skill.id} className="p-5 text-center">
              <a href={skill.uri} target="_blank">
                <div className="container grid grid-cols-3 mb-5">
                  <img
                    src={skill.uriImage}
                    className="col-start-2 object-center"
                    height="150px"
                    width="150px"
                  />
                </div>
                <span className="text-white mt-10">{skill.title}</span>
              </a>
              <p className="text-white mt-5">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Skills;
