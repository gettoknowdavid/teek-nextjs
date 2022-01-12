import * as React from 'react';
import Document, {
  Head, Html, Main, NextScript,
} from 'next/document';
import { Provider as StyletronProvider } from 'styletron-react';
import styletron from '../styletron';

class TeekDocument extends Document {
  static getInitialProps = async (context) => {
    const renderPage = () => context.renderPage({
      enhanceApp: (App) => function (props) {
        return (
          <StyletronProvider value={styletron}>
            <App {...props} />
          </StyletronProvider>
        );
      },
    });

    const initialProps = await Document.getInitialProps({ ...context, renderPage });
    // @ts-ignore
    const stylesheets = styletron.getStylesheets() || [];
    return { ...initialProps, stylesheets };
  };

  render() {
    return (
      <Html>
        <Head>
          {this.props.stylesheets.map((sheet, index) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs['data-hydrate']}
              key={index.toString()}
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default TeekDocument;
