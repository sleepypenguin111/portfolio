import "./App.css";
import videoBg from "./tokyo.mp4";
import Card from "./Card";

function App() {
  return (
    <div className="relative bg-slate-100 font-mono">
      {/* <div className="bg-fixed	px-24 bg-[url('../public/japan.png')] bg-no-repeat	"> */}
      {/* <video
        src={videoBg}
        autoPlay
        loop
        muted
        className="absolute object-cover h-full w-full opacity-30 bg-blue z-10"
      ></video> */}
      <div className="z-30 relative">
        <div className="flex px-24">
          <div className="w-4/12 pt-24 pl-36">
            <img class="rounded-t-lg h-64" src="me.png" alt="" />
          </div>
          <div className="w-8/12">
            <p className="pl-36 pr-24 pt-24 pb-12 text-6xl font-bold">
              Hi! I am a student at Brown University!
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-30">
        <h1 className="text-center pt-10 font-bold pb-10 text-4xl">
          About me
        </h1>
        <p className="text-2xl text-center pb-10 px-24">
          My name is Sleepy Penguin, who is currently a junior at Brown
          University in Rhode Island! Before I moved to the U.S. I studied in
          B.C., Canada for two years and before that, I was in Tokyo, Japan.
          Outside CS, I have been enjoying to playing/watching soccer!
        </p>
      </div>

      <div className="relative z-30">
        <h1 className="text-center font-bold pb-10 text-4xl">
          Projects
        </h1>
      </div>

      <div className="z-30 relative flex flex-wrap justify-center">
        <div class="flex justify-center px-10 pb-10 hover:scale-105">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a
              href="https://sleepypenguin111.github.io/responsive-design/"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img class="rounded-t-lg h-64" src="responsive.png" alt="" />
            </a>
            <div class="p-6 text-center text-center">
              <h5 class="text-center text-gray-900 text-xl font-medium mb-2">
                Responsive Design
              </h5>
              <p class="text-gray-700 text-base mb-4">
                The goal of this assignment is for you to practice the workflow
                of redesigning a simple website. You should take away the skills
                necessary to analyze and identify flaws in an existing
                interface, create low-fidelity and high-fidelity prototypes for
                various screen sizes, and build a responsive website based on
                those prototypes.
              </p>
              <div className="text-center">
                <a href="https://github.com/sleepypenguin111/responsive-design">
                  <button
                    type="button"
                    class="mr-4 content-center inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Code
                  </button>
                </a>
                <a href="https://sleepypenguin111.github.io/responsive-design/">
                  <button
                    type="button"
                    class="content-center inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center px-10 pb-10 hover:scale-105">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a
              href="https://sleepypenguin111.github.io/development/"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img class="rounded-t-lg h-64" src="development.png" alt="" />
            </a>
            <div class="p-6 text-center">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                React Development
              </h5>
              <p class="text-gray-700 text-base mb-4">
                This is your chance to develop an interactive interface, use
                interface components, and tie the components to an internal data
                state. Get even more comfortable with React by creating a
                list-based interface! Basically, an interface for users to
                select items out of a list, which then aggregates them.
              </p>
              <a href="https://github.com/sleepypenguin111/development">
                <button
                  type="button"
                  class="mr-4 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Code
                </button>
              </a>
              <a href="https://sleepypenguin111.github.io/development/">
                <button
                  type="button"
                  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Demo
                </button>
              </a>

              {/* https://sleepypenguin111.github.io/development/ */}
            </div>
          </div>
        </div>
        <div class="flex justify-center px-10 pb-10 hover:scale-105">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a
              href="https://www.figma.com/file/778BoUNWk3eF51pGPrQzEz/Airhart-Aeronautics?node-id=0%3A1&t=cuemtjxNbOxQb3Om-0"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img class="rounded-t-lg h-64" src="iterative.png" alt="" />
            </a>
            <div class="p-6 text-center">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                Iterative Design
              </h5>
              <p class="text-gray-700 text-base mb-4">
                You will be working in a group to design an interactive
                interface for an emerging startup. Your group will go through
                the full process of mocking up a solution to the startup's
                concept.
              </p>
              <a href="https://www.figma.com/file/778BoUNWk3eF51pGPrQzEz/Airhart-Aeronautics?node-id=0%3A1&t=9Df6OHq8vrdXH4h1-0">
                <button
                  type="button"
                  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Demo
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="flex justify-center px-10 pb-10 hover:scale-105">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a
              href="https://demae-can.com/"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img class="rounded-t-lg h-64" src="demae.png" alt="" />
            </a>
            <div class="p-6 text-center">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Demae</h5>
              <p class="text-gray-700 text-base mb-4">
                Renovated the company's existing web application written in PHP
                by developing a new website with TypeScript in an Agile
                environment with a team of 7.
              </p>
              <a href="https://demae-can.com/">
                <button
                  type="button"
                  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Demo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-30">
        <h1 className="text-center font-bold pb-10 text-4xl">
          Skills
        </h1>
        <div className="flex justify-center mx-36 mb-10 flex-wrap">
          <div className="text-center shadow-lg px-12 py-4 m-2 bg-white rounded-lg">
            <img className="h-24" src="img/java.png" alt="Not working" />
            <h2 className="pt-8 pb-4 font-bold">java</h2>
          </div>
          <div className="text-center shadow-lg px-12 py-4 m-2 bg-white rounded-lg">
            <img className="h-24" src="img/js.png" alt="Not working" />
            <h2 className="pt-8 pb-4 font-bold">JavaScript</h2>
          </div>
          <div className="text-center shadow-lg px-12 py-4 m-2 bg-white rounded-lg">
            <img className="h-24" src="img/typescript.png" alt="Not working" />
            <h2 className="pt-8 pb-4 font-bold">TypeScript</h2>
          </div>
          <div className="text-center shadow-lg px-12 py-4 m-2 bg-white rounded-lg">
            <img className="h-24" src="img/c-.png" alt="Not working" />
            <h2 className="pt-8 pb-4 font-bold">C/C++</h2>
          </div>
          <div className="text-center shadow-lg px-12 py-4 m-2 bg-white rounded-lg">
            <img className="h-24" src="img/python.png" alt="Not working" />
            <h2 className="pt-8 pb-4 font-bold">Python</h2>
          </div>
          <div className="text-center shadow-lg px-10 py-4 m-2 bg-white rounded-lg">
            <img className="h-24" src="img/react.png" alt="Not working" />
            <h2 className="pt-8 pb-4 font-bold">React</h2>
          </div>
          <div className="text-center shadow-lg px-12 py-4 m-2 bg-white rounded-lg">
            <img className="h-24" src="img/graphql.png" alt="Not working" />
            <h2 className="pt-8 pb-4 font-bold">GraphQL</h2>
          </div>
          <div className="text-center shadow-lg px-12 py-4 m-2 bg-white rounded-lg">
            <img className="h-24" src="img/html-5.png" alt="Not working" />
            <h2 className="pt-8 pb-4 font-bold">HTML</h2>
          </div>
          <div className="text-center shadow-lg px-12 py-4 m-2 bg-white rounded-lg">
            <img className="h-24" src="img/css-3.png" alt="Not working" />
            <h2 className="pt-8 pb-4 font-bold">CSS</h2>
          </div>
          <div className="text-center shadow-lg px-12 py-4 m-2 bg-white rounded-lg">
            <img className="h-18 w-24 pt-8 pb-2" src="img/Node.png" alt="Not working" />
            <h2 className="pt-8 pb-4 font-bold">Node.js</h2>
          </div>
          <div className="text-center shadow-lg px-12 py-4 m-2 bg-white rounded-lg">
            <img className="h-24" src="img/mongoDB.png" alt="Not working" />
            <h2 className="pt-8 pb-4 font-bold">MongoDB</h2>
          </div>
          <div className="text-center shadow-lg px-12 py-4 m-2 bg-white rounded-lg">
            <img className="h-24 w-24" src="img/go.png" alt="Not working" />
            <h2 className="pt-8 pb-4 font-bold">Golang</h2>
          </div>
        </div>
      </div>
      <div className="relative z-30">
        <h1 className="text-center font-bold pb-10 text-4xl">
          Social Media
        </h1>
      </div>

      <div className="relative z-30 px-36 pb-10 flex justify-center space-x-8">
        <button class="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
          <svg
            class="w-8 h-8 fill-current"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </button>

        <button class="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
          <svg
            class="w-8 h-8 fill-current"
            role="img"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
            </g>
          </svg>
        </button>

        <button class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            class="w-8"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                fill="currentColor"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
