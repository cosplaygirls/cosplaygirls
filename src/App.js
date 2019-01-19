import React, { Component } from 'react';
import styles from './App.module.scss';
import cosplaygirls from './cosplaygirls.json';
import { urls } from './urls.js';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>Cosplaygirls</h1>
        <table className={styles.cpgTabel}>
          <thead>
            <tr>
              <th>Origin</th>
              <th>Nickname</th>
              <th>Name</th>
              <th>Instagram</th>
              <th>Patreon</th>
              <th>Reddit</th>
              <th>Twitter</th>
              <th>Facebook</th>
              <th>Website</th>
              <th>Vk</th>
            </tr>
          </thead>
          <tbody>
            {cosplaygirls.map(cosplayer => (
              <tr key={cosplayer.nickname}>
                <td>{cosplayer.origin}</td>
                <td>{cosplayer.nickname}</td>
                <td>{cosplayer.name}</td>
                <td>
                  <a href={`${urls.instargram}${cosplayer.instagram}`}>
                    {cosplayer.instagram}
                  </a>
                </td>
                <td>
                  <a href={`${urls.patreon}${cosplayer.patreon}`}>
                    {cosplayer.patreon}
                  </a>
                </td>
                <td>
                  <a href={`${urls.reddit}${cosplayer.reddit}`}>
                    {cosplayer.reddit}
                  </a>
                </td>
                <td>
                  <a href={`${urls.twitter}${cosplayer.twitter}`}>
                    {cosplayer.twitter}
                  </a>
                </td>
                <td>
                  <a href={`${urls.facebook}${cosplayer.facebook}`}>
                    {cosplayer.facebook}
                  </a>
                </td>
                <td>
                  <a href={`${urls.website}${cosplayer.website}`}>
                    {cosplayer.website}
                  </a>
                </td>
                <td>
                  <a href={`${urls.vk}${cosplayer.vk}`}>{cosplayer.vk}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
