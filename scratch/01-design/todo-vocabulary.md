# TO-DO Vocabulary

## Propertes
- ID [R] _string_
- title [R] _string_
- dateDue [O] _simple date: *YYYY-MM-DD*_
- status [R] see enumerations

## Actions
- list
- filter (title[partial], dateDue[partial per format], status[enum])
- create (title, status)
- update (id, title, dateDue, status)
- status (id, status)
- due (id, dateDue)

## Enumerations
- status: [pending, working, completed]

