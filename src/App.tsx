import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { ResultItemProps } from './interface/ResultItemProps';
import { ResultsContainerProps } from './interface/ResultsContainerProps';
import { mockResults } from './mockResults';
import { PrintResultsProps } from './interface/PrintResultsProps';

function App() {
  return (
    <div className="App">
      <PrintResults results={mockResults} />
    </div>
  );
}

const ResultItem: React.FC<ResultItemProps> = ({ item, type }) => (
  <div className="item">
    <strong>{item.name}</strong><br />
    <div className="type">{type}</div>
    {item.img_url && <img src={item.img_url} alt={item.name} />}
    {item.followers !== undefined && <div>粉絲數: {item.followers}</div>}
    {item.genres !== undefined && <div>音樂類型: {item.genres}</div>}
    <a href={item.url} target="_blank" rel="noopener noreferrer">查看 Spotify</a>
  </div>
);

const ResultsContainer: React.FC<ResultsContainerProps> = ({ title, items, type }) => (
  <>
    <h3>{title}</h3>
    <div className="container">
      {items.map(item => (
        <ResultItem key={item.id} item={item} type={type} />
      ))}
    </div>
  </>
);

const PrintResults: React.FC<PrintResultsProps> = ({ results }) => (
  <>
    <h2>搜尋結果:</h2>
    {!!results?.artists?.items?.length  && (
      <ResultsContainer title="歌手" items={results.artists.items} type="歌手" />
    )}
    {!!results.tracks?.items?.length  && (
      <ResultsContainer title="歌曲" items={results.tracks.items} type="歌曲" />
    )}
    {!!results.albums?.items?.length  && (
      <ResultsContainer title="專輯" items={results.albums.items} type="專輯" />
    )}
    <h2>推薦結果:</h2>
    {!!results.recommendations?.artists?.items?.length  && (
      <ResultsContainer title="推薦歌手" items={results.recommendations.artists.items} type="歌手" />
    )}
    {!!results.recommendations?.tracks?.items?.length  && (
      <ResultsContainer title="推薦歌曲" items={results.recommendations.tracks.items} type="歌曲" />
    )}
    {!!results.recommendations?.albums?.items?.length  && (
      <ResultsContainer title="推薦專輯" items={results.recommendations.albums.items} type="專輯" />
    )}
  </>
);



export default App;




