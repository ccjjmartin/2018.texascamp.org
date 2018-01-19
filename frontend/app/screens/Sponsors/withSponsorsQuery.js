// @flow

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import type { SponsorT } from 'types';

export const SPONSOR_QUERY = gql`
  query allSponsors {
    nodeQuery(offset: 0, limit: 999, filter: { type: "sponsor" }) {
      entities {
        ...SponsorsFragment
      }
    }
  }

  fragment SponsorsFragment on NodeSponsor {
    entityId
    title
    body
    fieldSponsorLevel {
      entity {
        entityLabel
      }
    }
    fieldSponsorUrl {
      uri
    }
    fieldSponsorImage {
      url
      alt
    }
  }
`;

export const sponsorsListMapper = (entities: Array<Object>): Array<SponsorT> =>
  entities.map(entity => ({
    id: entity.entityId,
    title: entity.title,
    body: entity.body,
    sponsorLevel: entity.fieldSponsorLevel.entity.entityLabel,
    image: {
      url: entity.fieldSponsorImage.url,
      alt: entity.fieldSponsorImage.alt,
    },
    sponsorUrl: entity.fieldSponsorUrl && entity.fieldSponsorUrl.uri,
  }));

const withSponsorsQuery = graphql(SPONSOR_QUERY, {
  props: ({
    data: { nodeQuery: { entities } = {}, loading },
  }: {
    data: { nodeQuery: { entities: Array<Object> }, loading: boolean },
  }) => ({ sponsors: loading ? [] : sponsorsListMapper(entities) }),
});

export default withSponsorsQuery;
