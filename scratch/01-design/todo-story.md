# TO-DO API Story

## Purpose
A simple command-line app to help people keep track of things to do

## Data
The data model is simple. Each TO-DO record will have a unique identifier, a title, an optional date due (simple YYYY-MM-DD format), and a status code (`pending`, `working`, `completed`).

## Actions
Users will be able to add new TO-DO records, update an existing record's title, change its status, and set/update the due date. Users will also be able to list all the records on file and filter that list using the title, date due, and status.

## Notes
Users will be able to set the unique identifier of a record when they create it. If they don't supply an identifier, one will be created for them. If the identifier is already on file, the create action will be rejected. 
