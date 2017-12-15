// @flow

import React from 'react';
import type { SessionT, SkillLevelT, TrackT } from 'types';
import { compose } from 'recompose';
import SessionIndividual from 'SessionIndividual';
import withSessionsQuery from 'Sessions/withSessionsQuery';

type SessionPageProps = {
  sessions: SessionT[],
  skillLevels: SkillLevelT[],
  tracks: TrackT[],
};
const SessionPage = (props: SessionPageProps) => {
  return (
    <div>
      <h1>Individual Session Page</h1>
      <SessionIndividual {...props} />
    </div>
  );
};

export default compose(withSessionsQuery)(SessionPage);
