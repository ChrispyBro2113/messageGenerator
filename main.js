// This program will generate random messages 

// Fortune cookie messages 
const fortuneArray = {
    //love fortune
    love:{
        fortunes: [
            "The love of your life is right in front of your eyes.",
            "Behind this fortune is the love of my life.",
            "You have a secret admirer.",
            "Love, because it is the only true adventure.",
            "The love of your life will appear in front of you unexpectedly!",
            "An old love will come back to you.",
            "Your love life will soon be happy and harmonious.",
        ]
    },
    Success: {
        fortunes:[
            "Follow what calls you.",
            "You’re intoxicating when you do what you love.",
            "Be passionate and totally worth the chaos.",
            "You will know it when you see it. It will know you when it sees you.",
            "Do what you love. The rest will fall into place.",
            "Follow what you love and see what turns up.",
        ]

    },
    Inspiration: {
        fortunes:[
            "The middle of the process is no place to determine the end of it.",
            "You should def go for it.",
            "Enter unknown territory.",
            "Everything that is was first a dream."
        ]
    }
}
    
    
    
    
    


//function to randomize fortune cookie messages
const randFortuneCookies = () => {
    let randomLove = fortuneArray.love.fortunes[Math.floor(Math.random() * fortuneArray.love.fortunes.length)];
    let randomSuccess = fortuneArray.Success.fortunes[Math.floor(Math.random() * fortuneArray.Success.fortunes.length)];
    let randomInspiration = fortuneArray.Inspiration.fortunes[Math.floor(Math.random() * fortuneArray.Inspiration.fortunes.length)];
    console.log("You are so lucky, you get 3 Fortunes Cookies today!");
    console.log("1. " + randomLove);
    console.log("2. " + randomSuccess);
    console.log("3. " + randomInspiration);
}

randFortuneCookies();

