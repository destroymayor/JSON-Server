## Install ##
    $ npm install -g json-server 

## Start ##
    $ json-server --watch db.json 

 在終端輸入 s 並按下enter可儲存當前資料庫快照

## JSON 資料產生器 ##
   ### [JSON-Generator](http://beta.json-generator.com/) ###

   ### example ###
    [
        {
            'repeat(100, 10)': {
               _id: '{{objectId()}}',
                index: '{{index()}}',
                guid: '{{guid()}}',
                isActive: '{{bool()}}',
                balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
                picture: 'http://placehold.it/32x32',
                age: '{{integer(20, 40)}}',
                eyeColor: '{{random("blue", "brown", "green")}}',
                name: {
                    first: '{{firstName()}}',
                    last: '{{surname()}}'
                },
                company: '{{company().toUpperCase()}}'
            }
        }
    ]