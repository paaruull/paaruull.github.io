var i = 0;
var txt1 = `
Holaaa Miss Parul!>>

Here's a little something for ya. I'll cut the chase and come straight to the point. >
My flirting skills are sub-par compared to that of an average person, nor can I sweet >
talk much. I'm mostly an introvert who loves spending time with myself and observing >
things around me. >>

I'll start with some facts. Damnn you are gorgeous !! Prolly the prettiest Data scientist>
I've seen. I super envy the people who get to see you everyday. Judging from the little info>
I have, you seem to be like someone who is into books and been to some nice places as well.>
Referral dedo at your place, I'll happily switch xD>>

I really love the idea of working towards something, little by little everyday and see it grow>
over time. Be it a bond, a habit or legit anything in life. Might not be "the" person with whom>
you'll find a spark or anything like that, but can be the person jo bas bakwaas sun le aap ki :p>>

I'm a sucker for simple things in life and get happy super easily.>>

What's in it for ya? If nothing worked out, I can be a really good acquaintance, who's a geek,> 
anime nerd, damn big foodie, loves to travel plus a thousand other stuff. Did I mention I've got >
an amazing playlist as well?? Few days down the line, we might not even be talking but this right >
here, is my way of expressing that I'm willing to put effort towards a bond and let life decide the >
rest. Btw, I already put you as my screensaver xD (nothing on me, you asked for it ki 5 minute mein >
one has to fall for you xD)
`;
var speed = 50;
typeWriter();
function typeWriter() {
    if (i < txt1.length) {        
        if(txt1.charAt(i)=='<')
        document.getElementById("text1").innerHTML += '</br>'
        else if(txt1.charAt(i)=='>')
            document.getElementById("text1").innerHTML += '</br>'
        else
        document.getElementById("text1").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}