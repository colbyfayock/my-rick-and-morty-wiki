import Head from 'next/head';
import Link from 'next/link';

const defaultEndpoint = `https://rickandmortyapi.com/api/character/`;

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch(`${defaultEndpoint}${id}`);
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

export default function Character({ data }) {
  const { name, image, gender, location, origin, species, status } = data;
  return (
    <div className="container">
      <Head>
        <title>{ name }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">{ name }</h1>

        <div className="profile">
          <div className="profile-image">
            <img src={image} alt={name} />
          </div>
          <div className="profile-details">
            <h2>Character Details</h2>
            <ul>
              <li>
                <strong>Name:</strong> { name }
              </li>
              <li>
                <strong>Status:</strong> { status }
              </li>
              <li>
                <strong>Gender:</strong> { gender }
              </li>
              <li>
                <strong>Species:</strong> { species }
              </li>
              <li>
                <strong>Location:</strong> { location?.name }
              </li>
              <li>
                <strong>Originally From:</strong> { origin?.name }
              </li>
            </ul>
          </div>
        </div>

        <p className="back">
          <Link href="/">
            <a>
              Back to All Characters
            </a>
          </Link>
        </p>
      </main>

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
          list-style: none;
          margin-left: 0;
          padding-left: 0;
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

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }

        .search input {
          margin-right: .5em;
        }

        @media (max-width: 600px) {
          .search input {
            margin-right: 0;
            margin-bottom: .5em;
          }

          .search input,
          .search button {
            width: 100%;
          }
        }

        .profile {
          display: flex;
          margin-top: 2em;
        }
        @media (max-width: 600px) {
          .profile {
            flex-direction: column;
          }
        }
        .profile-image {
          margin-right: 2em;
        }
        @media (max-width: 600px) {
          .profile-image {
            max-width: 100%;
            margin: 0 auto;
          }
        }

        .back a {
          color: blue;
          text-decoration: underline;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
