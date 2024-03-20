## GET TOKEN
curl --request POST \
  --url https://mamund.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"Z9yTbbbsNrDntWWuJgBzZtFImr0FGB0i","client_secret":"j6MVoYnIZE7DdbQ5PbNHJaAPdWynh-K9ULQnrTQFSjysMLuB4_83Z6Nu9sioRk56","audience":"http://mamund.com/api-fundamentals","grant_type":"client_credentials"}'

## RESPONSE
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9UTTFNVGMxTVRVeU5qQTNSREUyUmpRMlFrTkNRakpFT1VJd1JURkNRakE0TlRoR05rRXdRZyJ9.eyJpc3MiOiJodHRwczovL21hbXVuZC5hdXRoMC5jb20vIiwic3ViIjoiWjl5VGJiYnNOckRudFdXdUpnQnpadEZJbXIwRkdCMGlAY2xpZW50cyIsImF1ZCI6Imh0dHA6Ly9tYW11bmQuY29tL2FwaS1mdW5kYW1lbnRhbHMiLCJpYXQiOjE3MTA4NTg3ODYsImV4cCI6MTcxMDk0NTE4NiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXpwIjoiWjl5VGJiYnNOckRudFdXdUpnQnpadEZJbXIwRkdCMGkifQ.sJoqvyMNXisL0PDjY9bv5OYkwh68YsFroCW6sRNCm5FLV7BrR5rMcQ2OV3gLWxUjPK8PR8CYklVGdHzgCU0L6acMlnujLejR549mctB19P42F08EZUvSezIYk-vaH4MCWEsEnq4V_-ssjrfgaYfzdYI05U9aKtCl2Pxcqxx6-7fdIvtzE5bfGz-rsFMv7ni6vI81Z-TDZulLjYYZf8IzOXa2VrbfijtDHxtIwdd4JPCPv1mH6Yo5DvqlvNy-7r3Z7kr7k1pLY-bhB4o_seiA6z8_Wv_AruW54wT4DzlHqVjRR2GpZr8XlWKAd9q38ea6cxAkzSto8Clzqke6p-lKTg",
  "token_type": "Bearer"
}

## API REQUEST  (fails)
curl --request GET \
  --url http://localhost:3000/ \

## API REQUEST  (succeeds)
curl --request GET \
  --url http://localhost:3000/ \
  --header 'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9UTTFNVGMxTVRVeU5qQTNSREUyUmpRMlFrTkNRakpFT1VJd1JURkNRakE0TlRoR05rRXdRZyJ9.eyJpc3MiOiJodHRwczovL21hbXVuZC5hdXRoMC5jb20vIiwic3ViIjoiWjl5VGJiYnNOckRudFdXdUpnQnpadEZJbXIwRkdCMGlAY2xpZW50cyIsImF1ZCI6Imh0dHA6Ly9tYW11bmQuY29tL2FwaS1mdW5kYW1lbnRhbHMiLCJpYXQiOjE3MTA4NTg3ODYsImV4cCI6MTcxMDk0NTE4NiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXpwIjoiWjl5VGJiYnNOckRudFdXdUpnQnpadEZJbXIwRkdCMGkifQ.sJoqvyMNXisL0PDjY9bv5OYkwh68YsFroCW6sRNCm5FLV7BrR5rMcQ2OV3gLWxUjPK8PR8CYklVGdHzgCU0L6acMlnujLejR549mctB19P42F08EZUvSezIYk-vaH4MCWEsEnq4V_-ssjrfgaYfzdYI05U9aKtCl2Pxcqxx6-7fdIvtzE5bfGz-rsFMv7ni6vI81Z-TDZulLjYYZf8IzOXa2VrbfijtDHxtIwdd4JPCPv1mH6Yo5DvqlvNy-7r3Z7kr7k1pLY-bhB4o_seiA6z8_Wv_AruW54wT4DzlHqVjRR2GpZr8XlWKAd9q38ea6cxAkzSto8Clzqke6p-lKTg'
