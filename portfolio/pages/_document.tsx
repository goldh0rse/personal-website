import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
          <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300&display=swap" rel="stylesheet" />     
        </Head> 
        
        <body className=' bg-gradient-to-r from-green to-blue-500 dark:from-dark-500 dark:to-dark-700' >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
