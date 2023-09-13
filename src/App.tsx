import { Helmet } from 'react-helmet';
import { ThemeProvider } from './ThemeProvider';
import { SEO } from './config/config';
import { Main } from './views/main/Main';
export default function App() {
  return (
    <>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: `description`, content: SEO.description }]}
      >
        <meta charSet="utf-8" />
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <link rel="canonical" href="https://sivarajng.github.io/resume" />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.description} />
        <meta
          property="og:image"
          content={'https://sivarajng.github.io/resume/static/avatar.png'}
        />
        <meta property="og:url" content={'https://sivarajng.github.io/resume'} />
        <meta property="og:type" content="website" />
      </Helmet>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </>
  );
}
