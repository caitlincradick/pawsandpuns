export function getJokes() {
  return fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'My Library (https://github.com/caitlincradick/test)'
    }, 
  })
  .then(res => {
    if (!res.ok) {
      throw new Error('Bad Network Response');
    }
    return res.json();
  })
}

export function getCat() {
  return fetch('https://cataas.com/cat/gif')
  .then(res => {
    if (!res.ok) {
      throw new Error('Bad Network Response');
    }
    return res;
  })
}