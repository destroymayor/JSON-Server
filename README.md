## Install ##
    $ npm install -g json-server 

## Start ##
    $ json-server -w db.json 

 在終端輸入 s 並按下enter可儲存當前資料庫快照

## 自訂路由 ##
- 建立路由定義檔(routes.json) <br/>

    `{`
        `"/api/":"/",`
       ` "blog/:resource/id:/show":/:resource/:id"`
   ` }`

- 啟動路由 <br/>

    `$ json-server db.json --routes routes.json`

## JSON 資料產生器 ##
   #### [JSON-Generator](http://beta.json-generator.com/) ####

   #### example ####
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