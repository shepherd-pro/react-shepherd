import Head from 'next/head';
import App from '@components/app';

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>React Shepherd — Guide your users through a tour of your app.</title>
        <meta name="description" content="Guide your users through a tour of your app." />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />

        <link rel="apple-touch-icon" sizes="180x180" href="/shepherd/docs/assets/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/shepherd/docs/assets/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/shepherd/docs/assets/favicons/favicon-16x16.png" />
        <link rel="mask-icon" href="/shepherd/docs/assets/favicons/safari-pinned-tab.svg" color="#426170" />
        <link rel="shortcut icon" href="/shepherd/docs/assets/favicons/favicon.ico" />
        <meta name="msapplication-config" content="/shepherd/docs/assets/favicons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <App />
    </div>
  )
}
