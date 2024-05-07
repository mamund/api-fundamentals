/*****************************************
// bigco, inc company
// transitions
// 2020-02-01 : mamund
 *****************************************/
 
 // page- and item-level forms
 exports.forms = {
   pageForms: [
     {
       id:"self",
       name:"self",
       href:"{fullurl}",
       rel: "self colllection todo",
       tags: "collection todo self home list item",
       title: "Self",
       method: "GET",
       properties:[]
     },
     {
       id:"home",
       name:"home",
       href:"{fullhost}/",
       rel: "collection todo",
       tags: "collection todo home list item",
       title: "Home",
       method: "GET",
       properties:[]
     },
     {
       id:"list",
       name:"list",
       href:"{fullhost}/list/",
       rel:"collection todo",
       tags:"collection todo home list item",
       title:"List",
       method:"GET",
       properties:[]
     },
     {
       id:"filter",
       name:"filter",
       href:"{fullhost}/filter/",
       rel:"collection todo filter",
       tags:"collection todo filter list item",
       title:"Search",
       method:"GET",
       properties:[
         {name:"title",value:""},
         {name:"dateDue",value:""},
         {name:"status",value:""}
       ]
     },
     {
       id: "createToDo",
       name: "create",
       href: "{fullhost}/",
       rel: "create-form todo",
       tags: "collection todo list",
       title: "Create TODO",
       method: "POST",
       properties: [
        {name:"id",value:"{makeid}"},
        {name:"title",value:""},
        {name:"dateDue",value:""},
        {name:"status",value:"pending"}
       ]
     }
   ],
   itemForms: [
     {
       id:"read_{id}",
       name: "read",
       href: "{fullhost}/{id}",
       rel: "item todo read",
       title: "Read",
       method: "GET",
       properties: []
     },
     {
       id:"update_{id}",
       name:"update",
       href:"{fullhost}/{id}",
       rel: "item edit-form todo",
       tags: "todo list item",
       title: "Edit",
       method: "PUT",
       properties: [
         {name:"id",value:"{id}"},
         {name:"title",value:"{title}"},
         {name:"dateDue",value:"{dateDue}"},
         {name:"status",value:"{status}"}
       ]
     },
     {
       id:"status_{id}",
       name:"status",
       href:"{fullhost}/status/{id}",
       rel: "item todo status",
       tags: "todo item list status",
       title: "Status",
       method: "PATCH",
       properties: [
         {name:"status",value:"{status}"}
       ]
     },
     {
       id:"due_{id}",
       name:"status",
       href:"{fullhost}/status/{id}",
       rel: "item todo due",
       tags: "todo item list due",
       title: "Due Date",
       method: "PATCH",
       properties: [
         {name:"dateDue",value:"{dateDue}"}
       ]
     },
     {
       id:"remove_{id}",
       name: "remove",
       href: "{fullhost}/{id}",
       rel: "item todo remove",
       title: "Remove",
       method: "DELETE",
       properties: []
     }
   ]
 }
