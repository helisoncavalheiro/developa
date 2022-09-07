#MUST BE RUN UNDER ADMIN PRIVILEGES

#Delete any pre existing fowarding for port 9003
netsh interface portproxy delete v4tov4 listenport="9003"

#Get the WSL2 IP -- because of this variable, THIS SCRIPT NEEDS TO BE RUN EVERYTIME WSL2 IS RESTARTED
$wslIp=(wsl -d Ubuntu -e sh -c "ip addr show eth0 | grep 'inet\b' | awk '{print `$2}' | cut -d/ -f1")

# Add the port fowarding to port 9003
netsh interface portproxy add v4tov4 listenport="9003" connectaddress="$wslIp" connectport="9003"