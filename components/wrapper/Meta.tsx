import Head from 'next/head';
import React from 'react';

interface MetaProps {
  props: {
    title: string;
    description: string;
  };
}

const Meta: React.FC<MetaProps> = ({ props }) => {
  return (
    <>
      <Head>
        {/* Default MetaTags */}
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        {/* Custom MetaTags */}
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
    </>
  );
};

export default Meta;
