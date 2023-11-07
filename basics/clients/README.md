## Clients Folder README


This folder includes a few examples of Web API client applications.

### CURL
Examples using the CURL commandline app:

```
curl http://localhost:4000/read?action=add&x=10&y=10
curl http://localhost:4000/write -d action=multiply&x=10&y=10
curl http://localhost:4000/subtraction?x=100&y=75
```

### HYPER
```
CALL http://localhost:4000/read WITH-QUERY {"action":"add","x":"10","y":"10"}
CALL http://localhost:4000/write WITH-BODY action=add&x=10&y=10
CALL http://localhost:4000/subtraction?x=100&y=25
```

### HTML Client
```
index.html
```
  


