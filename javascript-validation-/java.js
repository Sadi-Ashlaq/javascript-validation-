 function validation(){
            var fname=document.getElementById("firstname").value;
            var lname=document.getElementById("lastname").value;
            var email=document.getElementById("email").value;
            var pass=document.getElementById("pass").value;
            var cpass=document.getElementById("confirmedpass").value;
            var phoneno=document.getElementById("phoneno").value;
            var Regexemail=/^[A-Za-z]{2,20}@[a-z]{2,10}.[a-z]{2,3}/
            var Regexfname=/^[a-z]{5,20}/
            var Regexlname=/^[a-z]{5,20}/
            var Regexpass=/^[A-Za-z0-9!@#$%^&*()?]?*{8,32}/
            var Regexphone=/^([009627]{6})([7-9]{1})([0-9]{7})/
            if(Regexemail.test(email)){
                document.getElementById("email_err")
            }
            else{
                document.getElementById("email_err").innerHTML="Please Enter a valid email";
                return false;
            }
            if(Regexfname.test(fname)){
                document.getElementById("fname_err")
            }
            else{
                document.getElementById("fname_err").innerHTML="Please Enter a valid first name";
                return false;
            }
            if(Regexlname.test(lname)){
                document.getElementById("lname_err")
            }
            else{
                document.getElementById("lname_err").innerHTML="Please Enter a valid last name";
                return false;
            }
            if(Regexpass.test(pass)){
                document.getElementById("pass_err")
            }
            else{
                document.getElementById("pass_err").innerHTML="Please Enter a valid password";
                return false;
            }
            if(Regexphone.test(phoneno)){
                document.getElementById("phoneno_err")
            }
            else{
                document.getElementById("phoneno_err").innerHTML="Please Enter a valid phone no.";
                return false;
            }
            if (pass===cpass){
                document.getElementById("pass_err")
            }
            else{
                document.getElementById("pass_err").innerHTML="Passwords are not the same"
            }
        }