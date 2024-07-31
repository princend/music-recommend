import { Results } from "./interface/Results";

export const mockResults: Results = {
  artists: {
    items: [
      {
        id: '1',
        name: 'Artist One',
        followers: 12345,
        genres: 'Pop, Rock',
        img_url: 'https://via.placeholder.com/640',
        url: 'https://spotify.com/artist/1'
      },
      {
        id: '2',
        name: 'Artist Two',
        followers: 67890,
        genres: 'Hip-Hop, Jazz',
        img_url: 'https://via.placeholder.com/640',
        url: 'https://spotify.com/artist/2'
      }
    ]
  },
  tracks: {
    items: [
      {
        id: '1',
        name: 'Track One',
        genres: '',
        img_url: 'https://via.placeholder.com/640',
        url: 'https://spotify.com/track/1'
      },
      {
        id: '2',
        name: 'Track Two',
        genres: '',
        img_url: 'https://via.placeholder.com/640',
        url: 'https://spotify.com/track/2'
      }
    ]
  },
  albums: {
    items: [
      {
        id: '1',
        name: 'Album One',
        genres: '',
        img_url: 'https://via.placeholder.com/640',
        url: 'https://spotify.com/album/1'
      },
      {
        id: '2',
        name: 'Album Two',
        genres: '',
        img_url: 'https://via.placeholder.com/640',
        url: 'https://spotify.com/album/2'
      }
    ]
  },
  recommendations: {
    artists: {
      items: [
        {
          id: '3',
          name: 'Recommended Artist One',
          followers: 23456,
          genres: 'Classical, Jazz',
          img_url: 'https://via.placeholder.com/640',
          url: 'https://spotify.com/artist/3'
        },
        {
          id: '4',
          name: 'Recommended Artist Two',
          followers: 78901,
          genres: 'Blues, Country',
          img_url: 'https://via.placeholder.com/640',
          url: 'https://spotify.com/artist/4'
        }
      ]
    },
    tracks: {
      items: [
        {
          id: '3',
          name: 'Recommended Track One',
          genres: '',
          img_url: 'https://via.placeholder.com/640',
          url: 'https://spotify.com/track/3'
        },
        {
          id: '4',
          name: 'Recommended Track Two',
          genres: '',
          img_url: 'https://via.placeholder.com/640',
          url: 'https://spotify.com/track/4'
        }
      ]
    },
    albums: {
      items: [
        {
          id: '3',
          name: 'Recommended Album One',
          genres: '',
          img_url: 'https://via.placeholder.com/640',
          url: 'https://spotify.com/album/3'
        },
        {
          id: '4',
          name: 'Recommended Album Two',
          genres: '',
          img_url: 'https://via.placeholder.com/640',
          url: 'https://spotify.com/album/4'
        }
      ]
    }
  }
};
