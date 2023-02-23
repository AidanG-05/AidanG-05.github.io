const text = "Bonjour, I'm Aidan";
            
            let i = 0;
            function typeWriter() {
              if (i < text.length) {
                document.getElementById("typewriter").innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 120); // adjust the delay between each letter here
              }
            }
            typeWriter();