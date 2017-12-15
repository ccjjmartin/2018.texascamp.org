// @flow
import React from 'react';
import { cleanHtml } from 'utils';
import type { SessionT } from 'types';
import withLogic from './logic';

type SessionIndividualProps = {
  session: SessionT,
};
const SessionIndividual = (props: SessionIndividualProps) => {
  const { body, skillLevel, timeslot, title, track, speakers } = props.session;
  return (
    <div>
      <h2>
        {`${title}`}
      </h2>
      <p>
        {'Description:'}
        {cleanHtml(body)}
      </p>
      <p>
        {`Experience Level: ${skillLevel}`}
      </p>
      <p>
        <span>Speakers:</span>
        {speakers.map(eachName =>
          (<span key={eachName}>
            {` ${eachName} `}
          </span>),
        )}
      </p>
      <p>
        {`Timeslot: ${timeslot}`}
      </p>
      <p>
        {`Track: ${track}`}
      </p>
    </div>
  );
};
export default withLogic(SessionIndividual);
