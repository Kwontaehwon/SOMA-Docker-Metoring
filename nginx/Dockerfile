FROM ubuntu

RUN apt update && \
    apt install nginx -y && \
    echo "<h1> HELLO SOMA KWON TAEHYUN<h1>" > var/www/html/index.html

CMD ["nginx", "-g", "daemon off;"]
