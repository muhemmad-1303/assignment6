<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TODO</title>
    <link rel="stylesheet" href="../styles/style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">

</head>
<body>
<div class="mainlogin">
        <div class="logincard">
            <form>
                <div class="inputbox">
                <label>User Name:</label>
                <input type="text" id="user">
                <span id="loginUserError"></span>
                </div>
                <div class="inputbox">
                <label>Password:</label>
                <input type="password" id="passwordlogin">
                <span id="PasswordError"></span>
                </div>
                <div id="login">Login</div>
                <hr>
                <div id="createAccount">Create New Account</div>
            </form>
        </div>
    </div>
<div class="mainregister">
        <div class="registercard">
            <h1>Create new account</h1>
            <form>
            <div class="registerbody">
                <div class="inputbox">
                    <label>User name:</label>
                    <input type="text" name="username" id="username">
                    <span class='usererror error'></span>
                </div>
                <div class="inputbox">
                    <label>Email:</label>
                    <input type="text" name="email" id="email">
                    <span class='emailerror error'></span>
                </div>
                <div class="inputbox">
                    <label>Number</label>
                    <input type="text" name="number" id="number">
                    <span class='numbererror error'></span>
                </div>
                <div class="inputbox">
                    <label>password</label>
                    <input type="password" name="password" id="password">
                    <span class='passworderror error'></span>
                </div>
                <div class="radiobtn">
                    <div class="radiobox">
                    <label>Male</label>
                    <input type="radio" name="gender" value="male">
                   </div>
                   <div class="radiobox">
                    <label>Female</label>
                    <input type="radio" name="gender" value="female">
                  </div>
                  <div class="radiobox">
                    <label>Other</label>
                    <input type="radio" name="gender" value="other">
                  </div> 
                </div>
                <span class="gendererror error"></span>
                <div id="sub">Sign Up</div>
                <div id="signin">Already have an account?SignIn</div>
            </div>
            </form>
        </div>
    </div>
    
    <div class="maintodopage">
        <div class="todocard">
            <div id="logout">Log Out</div>
            <div class="todocardhead">
                <form id="form">
                <input type="text" name="task" id="task" >
                <div id="save">
                
                </div>
                </form>
            
            </div>
            <div class="todocardbody">

            </div>
        </div>
    </div>
    <div class="modal modalHidden">
        <div class="modalContent">
            <div class="text">Are you sure you want to delete</div>
            <div class="buttons">
               
            </div>
        </div>
</div> 
    <script src="../script/script.js"></script>
   
</body>
</html>