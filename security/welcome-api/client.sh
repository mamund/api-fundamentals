## GET TOKEN
curl --request POST \
  --url https://mamund.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"...","client_secret":"...","audience":"http://mamund.com/api-fundamentals","grant_type":"client_credentials"}'

## RESPONSE
{
  "access_token": "...",
  "token_type": "Bearer"
}

## API REQUEST  (fails)
curl --request GET \
  --url http://localhost:3000/ \

## API REQUEST  (succeeds)
curl --request GET \
  --url http://localhost:3000/ \
  --header 'authorization: Bearer ...'
