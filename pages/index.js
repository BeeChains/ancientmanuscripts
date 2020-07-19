import Head from 'next/head'

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">
        The Now, ancientmanuscripts blockchain domain a <a href="https://handshake.org">Handshake</a> page!
      </h1>
  
      <a href="https://beechains.github.io/ancientmanuscripts.github.io/">AncientManuscripts</a> page!
      </h1>

      <p className="description">
        Look Within Thyself, Follow Your Calling and Stop Stalling! <code></code>
      </p>

      <div className="grid">
        <a href="https://ipfs.io/ipfs/QmYpk2DdjnShgeBZUTJKnEgaEj7p1EciWikjP3Kb2Bh3yC/" className="card">
          <h3>Be Still and Know &rarr;</h3>
          <p>Find in-depth information about the Ancient Manuscripts Within Your Being.</p>
        </a>

        <a href="http://www.myspiritwave.xyz/" className="card">
          <h3>KNOW THYSELF &rarr;</h3>
          <p>Learn all you possibly can about yourself!</p>
        </a>

        <a
          href="https://bthespirit.bandcamp.com/"
          className="card"
        >
          <h3>Ask the self; Who Am I? &rarr;</h3>
          <p>Discover The Inner Light Of Consciousness Found Within!</p>
        </a>

        <a
          href="https://bmindful.vercel.app"
          className="card"
        >
          <h3>Radiance &rarr;</h3>
          <p>
            Instantly Shine The Light For All.
          </p>
        </a>
      </div>
    </main>

    <footer>
      <a
        href="https://bcrypto8.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/vercel.svg" alt="Vercel Logo" />
      </a>
    </footer>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
