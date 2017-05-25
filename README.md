# Practice

# Valid users:

  "username": "MrAdmin"
  "password": "qwerty"
  
  "username": "MsAdmin"
  "password": "qwerty"
   
  "username": "BeAndy"
  "password": "admin"
	 
	 
# Export collections

mongoexport -h ds149431.mlab.com:49431 -d innews -c user-data -u BeAndy -p 1234qweasd -o user-data.json

mongoexport -h ds149431.mlab.com:49431 -d innews -c users -u BeAndy -p 1234qweasd -o users.json

or https://mlab.com/databases/innews 
user: BeAndy 
password: 1234qweasd
