function myLogin(userName, pwd)
{ 

    currentSession().promoteWith("Administrator")
    var p = ds.User({login:userName});
    currentSession().unPromote();	
    if (p == null)
        return false; 
    else 
    {
        if (p.password == pwd) 
        {
            var theGroups = [];
            if (p.isAdmin){
                    theGroups = ['Administrator'];
	}
	else theGroups =['Employee'];
            
            var connectTime = new Date();
            return { 
                ID: p.ID, 
                fullName:p.fullName, 
 				name: p.fullName, 
                belongsTo: theGroups,
                storage:{
                    time: connectTime,
                    access: "Guest access"
                }
            };
        }
        else
            return { error: 1024, errorMessage:"invalid login" }
    }
};