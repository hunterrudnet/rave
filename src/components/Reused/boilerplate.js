export const formatArtistNames = (artists) => {
  if (artists.length === 0) {
    return '';
  } else if (artists.length === 1) {
    return artists[0].name;
  } else if (artists.length === 2) {
    return `${artists[0].name} and ${artists[1].name}`;
  } else {
    return artists.reduce((acc, curr, index) => {
      if (index === artists.length - 1) {
        return `${acc} and ${curr.name}`;
      } else {
        return `${acc}, ${curr.name}`;
      }
    }, '');
  }
};