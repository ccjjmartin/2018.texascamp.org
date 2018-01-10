// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { cleanHtml } from 'utils';
import Header from 'Header';
import Menu from 'Menu';
import Footer from 'Footer';
import type { NewsT } from 'types';
import styles from './styles.css';

type NewsItemProps = {
  newsItem: NewsT,
};
const NewsItem = ({ newsItem }: NewsItemProps): React.Element<any> | null => {
  // Format body to:
  // - Update inline image src to include full url
  let formattedBody = newsItem.body;
  formattedBody = formattedBody
    ? formattedBody.replace(
        'src="/sites/default/files/inline-images/',
        'src="https://backend2018.texascamp.org/sites/default/files/inline-images/',
      )
    : '';

  const formattedDate = newsItem.publishedDate
    ? newsItem.publishedDate.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    : '';

  return (
    <div>
      <Helmet title={newsItem.title} />
      <Menu />
      <div className={styles.contentWrapper}>
        <Header />
        <div className={styles.content}>
          <h1 className={styles.title}>
            {newsItem.title}
          </h1>
          <div className={styles.detail}>
            <div className={styles.section}>
              <div className={styles.field}>
                <div className={styles.fieldLabel}>Published</div>
                <div>
                  {formattedDate}
                </div>
              </div>
            </div>
            <div className={styles.mainContent}>
              {cleanHtml(formattedBody)}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
