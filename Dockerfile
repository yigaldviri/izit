
#some shit because I need this build to run slow
RUN apt-get update && apt-get install -y git dnsutils
RUN apt-get install -y curl unzip sudo python apt-transport-https vim wget
EXPOSE 8080

