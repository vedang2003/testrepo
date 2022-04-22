var url = 'https://api.harvardartmuseums.org/exhibition?apikey=b972cf79-f079-4d93-8e38-be4663a2e3f5';
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((apidata) => {
        console.log(apidata);
      })
      .catch((err) => {
        console.log(err);
      });


      