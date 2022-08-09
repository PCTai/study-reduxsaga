# Mini project - Student Management

/login
/admin layout

/admin/*
feature: /admin/dashboard
feature: /admin/students


auth/ authentication
- login
-sign up / register
- forget password


CLICK LOGIN
-Call Api to login
- Success -> redirect Admin
- Failed -> show Error

authSaga
-if logged in , watch LogOut
- else watch Log In

Login
- Call Login Api to get Token + user infor
- set token to local storage
- redirect to admin

LogOut
- clear token from local storage
- redirect to login page

authSlice


