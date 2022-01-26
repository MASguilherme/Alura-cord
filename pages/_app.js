function GlobalStyle() {
    return (
      <style global jsx>{`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        html,
        body,
        #__next{
          height: 100vh;
          font-family: sans-serif;
          display: flex;
          flex: 1;
        }
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
        /* ./App fit Height */
      `}</style>
    );
  }

export default function CustomApp({ Component, pageProps }) {
    console.log('rodando')

    return(
        <>
        <GlobalStyle />
        <Component {...pageProps} />
        </>
    )
    
  }