const express = require("express");

const PORT = process.env.PORT || 2727;

const app = express();
app.get("/api", (req, res) => {

  var numberOfPlayers = +req.query.numberOfPlayers
  if(numberOfPlayers>0){
          var unshuffled = [];
          grp=['S','H','D','C'];
          cardRank =[2,3,4,5,6,7,8,9,'X','J','Q','K','A'];
          for (g of grp) for (e of cardRank) unshuffled.push(g+'-'+e);

           let shuffled = unshuffled
          .map(value => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value);
            var cardForPlayers = numberOfPlayers>shuffled.length? new Array(shuffled.length): new Array(numberOfPlayers);
            console.log(shuffled.length);
            for(i=0;i<numberOfPlayers && i<shuffled.length;i++){
                 cardForPlayers[i] = new Array();
            }
            console.log(cardForPlayers.length);
           var counter=0;
           var loopCounter=0;
           var index=0;
           for(card of shuffled){
           // console.log(card);
             index = Math.floor(loopCounter / numberOfPlayers) ;
            cardForPlayers[counter][index]=card;
            //cardForPlayers[counter].push(card);
            counter++;
            loopCounter++;
            if(counter===numberOfPlayers) counter=0;
            }
            //for( [i, player] of cardForPlayers.entries()) console.log('Player=%d: %s', i+1, player.join(','));
    res.status(200).json( cardForPlayers );
  }else{
    res.status(400).json( {error:'invalid number'} );
  }

});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});