import React from 'react';
import { useHistory } from 'react-router-dom';
import parse from 'html-react-parser';


const Episode = (props) => {
  const { push } = useHistory();

  if(!props.episode) return (
    <div>
      <h2>Please return to selection page</h2>
      <button onClick={() => {
        push('/');
      }}>Return</button>
    </div>
  );

  return (
    <>
      <div to={`/episode/${props.episode.id}`} data-testid="selected-episode" className="selected-episode" key={props.episode.id}>
        {props.episode.image && (
          <img className="episode-image" src={props.episode.image.medium} alt={props.episode.name} />
        )}
        <div className="episode-info">
          <p className="episode-number">
            Season {props.episode.season}, Episode {props.episode.number}
          </p>
          <h3>{props.episode.name}</h3>
          {props.episode.summary && parse(props.episode.summary)}
          <div className="flex-spacer" />
          <p className="episode-runtime">{props.episode.runtime} minutes</p>
        </div>
      </div>
      <button onClick={() => {
        props.setSelectedEpisode(null);
        push('/');
      }}>Return</button>
    </>
  );
}

export default Episode;