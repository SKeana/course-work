const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Accept-Encoding': 'gzip',
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      location: '42.3478, -71.0466',
      fields: ['temperature'],
      units: 'metric',
      timesteps: ['1h'],
      startTime: 'now',
      endTime: 'nowPlus6h'
    })
  };
  
  fetch('https://api.tomorrow.io/v4/timelines?apikey=NMkA3Rds9ZjQMyftzM3TrhOfNipw2FQx', options)
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(data.timeline, null, 2)))
    .catch(err => console.error(err));
    