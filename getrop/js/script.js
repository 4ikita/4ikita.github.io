var aoth_object =[
{  user:" ",
  status:" " , 
  session:" "
 } ]
  
  
  



var users = 
[ 
{nickname:"admin", password:"111f", groups:["admin","trader","visitor"]}, 
{nickname: "Palace", password: "222a", groups: ["visitor", "trader"]}, 
{nickname: "Supreme", password: "444p", groups: ["visitor", "trader"]}, 
{nickname: "Buyer", password: "qwerty123", groups: ["visitor"]} 

]; 


var rights = ["promanage content" , "manage content" , "delete users", "view site"]; 

var groups = { 
"admin": [rights[0], rights[1], rights[2], rights[3]], 
"visitor": [rights[3]], 
"trader": [rights[1], rights[3]] 
} 


function addUser(name,pass,rules){ 

users[users.length]={nickname : name , password : pass , groups : rules}; 


} 
function localSave(name){ 
for(var i = 0 ; i < users.length;i++) if(users[i].nickname == name) { 
localStorage.setItem('login',users[i].nickname); 
localStorage.setItem('password',users[i].password); 
} 


} 

function deleteUser(name){ 
for(var i = 0 ; i < users.length;i++) if(users[i].nickname == name) delete users[i]; 



} 
function setRules(){ 


} 
function getRules(){ 



}
function userGroups(name){

for(var i = 0 ; i < users.length;i++) if(users[i].nickname == name) return users[i].groups; 



}
function addUserToGroup(name, group){

for(var i = 0 ; i < users.length;i++) if(users[i].nickname == name) users[i].groups.push( group); 
}
function removeUserFromGroup(name, group){
for(var i = 0 ; i < users.length;i++) if(users[i].nickname == name)   users[i].groups.splice(  users[i].groups.indexOf(group),1); 

}
function rights(){

for(var i = 0 ; i < users.length;i++) if(users[i].nickname == name) return users[i].groups ; 
}
function createRight(right){
rights[rights.length] = right;
return right;
} 

function deleteRight(right){

for(var i = 0 ; i < rights.length;i++) if(rights[i] == right) delete rights[i]; 


}

function addRightToGroup(right, group) {
       groups[group][  groups[group].length] = right;

}
function removeRightFromGroup(right, group) {
  
  groups[group].splice(groups[group].indexOf(right),1);
} 



function groups_(){
return groups;
}
function createGroup(group_name){
    groups[group_name] = [];
  
  
}

function deleteGroup(group){
  
  delete groups[group];
  
}

function groupRights(group){
  return  groups[group];

}


  
  
  
  
  // next module
  
  
  
  
  function login(login,password){

    for(var i = 0 ; i < users.length;i++) if(users[i].nickname == login) if(users[i].password==password){ 
      aoth_object[0].user = login;
      aoth_object[0].status = "using";
      aoth_object[0].session = true;
      return true;
    
    
    }
  else return false;
  }
  
  function logout(){
    
    localStorage.setItem('data_cash', "session_use");
   aoth_object[0].user = undefined;
      aoth_object[0].status = "log_save";
      aoth_object[0].session = false;
  }
  

function currentUser(){
  
 return  aoth_object[0].user;
  

}
