import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

const StaticData = {
  description: "Nguyen Van Luan's personal resume, Luan Luan, Khung Long An Co",
};

type Props = {
  description?: string;
  meta?: any;
  title: string;
};

const SEO: FC<Props> = ({ description, meta, title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title || 'Home'}</title>
      <meta property="og:type" content="article" />
      <html lang="en" />
      <meta
        name="description"
        content={description || StaticData.description}
      />
      <meta property="og:type" content="website" />
      <meta
        name="og:escription"
        content={description || StaticData.description}
      />
    </Helmet>
  );
};

export default SEO;
