var list = [
    {
    	name: "Mickey Mouse",
    	image: "img/MickeyMouse.png",
    	about:"Mickey Mouse is a funny animal cartoon character and the official mascot of The Walt Disney Company. He was created by Walt Disney and Ub Iwerks at the Walt Disney Studios in 1928",
    	keyword: "MICKEY MOUSE"
    },
    {
    	name:"Tom",
    	image: "img/tom.png",
    	about:" Tom Cat is a fictional character and one of the title characters (the other being Jerry Mouse) in Metro-Goldwyn-Mayer's series of Tom and Jerry theatrical cartoon short films. Created by William Hanna and Joseph Barbera, Tom is a blue/grey anthropomorphic domestic short-haired cat who first appeared in the 1940 MGM",
    	keyword: "TOM"
    },
    {
    	name: "Jerry",
    	image: "img/jerry.png",
    	about: " Jerry is an American animated series of short films created in 1940, by William Hanna and Joseph Barbera. It centers on a rivalry between its two title characters, Tom and Jerry, and many recurring characters, based around slapstick comedy.",
    	keyword: "JERRY"
    },
    {
    	name: "Popeye",
    	image: "img/popeye.png",
    	about: "Popeye the Sailor Man is a cartoon fictional character created by Elzie Crisler Segar.[3] The character first appeared in the daily King Features comic strip, Thimble Theatre, on January 17, 1929, and Popeye became the strip's title in later years; Popeye has also appeared in theatrical and television animated cartoons.",
    	keyword: "POPEYE"
    },
    {
    	name: "Doraemon",
    	image: "img/doraemon.png",
    	about: "Doraemon is a Japanese manga series written and illustrated by Fujiko F. Fujio. The series has also been adapted into a successful anime series and media franchise. The story revolves around a robotic cat named Doraemon, who travels back in time from the 22nd century to aid a pre-teen boy named Nobita Nobi",
    	keyword: "DORAEMON"
    },
    {
    	name: "Woody Woodpecker",
    	image: "img/woody.png",
    	about: "Woody Woodpecker is an anthropomorphic animated woodpecker, inspired by the acorn woodpecker and also resembling the pileated woodpecker,[2] who appeared in theatrical short films produced by the Walter Lantz animation studio and distributed by Universal Pictures.[3] Though not the first of the screwball characters that became popular in the 1940s",
    	keyword: "WOODY WOODPECKER"
    },
    {
    	name: "Scooby Doo",
    	image: "img/scooby.png",
    	about: "Scooby-Doo is an American animated cartoon franchise, comprising several animated television series produced from 1969 to the present day.",
    	keyword: "SCOOBY "
    },
    {
    	name: "Tweety",
    	image: "img/Tweety.png",
    	about:"Tweety is an animated fictional yellow canary in the Warner Bros. Looney Tunes and Merrie Melodies series of animated cartoons",
    	keyword: "TWEETY"
    },
    {
    	name: "Bugs Bunny",
    	image: "img/bunny.png",
        about: "Bugs Bunny is an animated cartoon character, created in 1940 by Leon Schlesinger Productions and voiced originally by Mel Blanc, the Man of a Thousand Voices",
    	keyword: "bunny"
    },
    {
    	name: "Daffy Duck",
    	image: "img/daffy.png",
        about: "Daffy Duck is an animated cartoon character produced by Warner Bros. Styled as an anthropomorphic black duck, the character has appeared in cartoon series such as Looney Tunes and Merrie Melodies, ",
    	keyword: "daffy"
    },
    {
    	name: "Mr Bean",
    	image: "img/bean.png",
        about: "Mr. Bean, also known as Mr. Bean: The Animated Series, is an animated television series produced by Tiger Aspect Productions and, only for its first three seasons, by Richard Purdum Productions and Varga Holdings. It is based on the British live-action series of the same name, and the characters included Mr. Bean, Irma Gobb, Teddy, and the Reliant Supervan's mysterious driver, with the new addition of Mrs. Wicket, Bean's landlady, and her evil cat Scrapper. In February 2001, the series was officially announced, with it premièring shortly afterwards",
    	keyword: "MR BEAN"
    },
    {
    	name: "Aladdin",
    	image: "img/Aladdin.png",
        about:"Aladdin is a fictional character and the protagonist of Disney's 1992 animated feature film Aladdin, and its two direct-to-video sequels The Return of Jafar (1994) and Aladdin and the King of Thieves (1996). He also stars in the animated television series based on the film. In all animated productions, Aladdin is voiced by American actor Scott Weinger, while his singing voice is provided by Brad Kane.",
    	keyword: "ALADDIN"
    },
    {
    	name: "Princess Jasmine",
    	image: "img/Jasmine.png",
        about:"Princess Jasmine is a fictional character who appears in Walt Disney Animation Studios' 31st animated feature film Aladdin (1992). Voiced by American actress Linda Larkin – with a singing voice provided by Filipina singer Lea Salonga – Jasmine is the spirited Princess of Agrabah, who has grown weary of her life of palace confinement.",
    	keyword: "JASMINE"
    },
    {
    	name: "Kaala Bassi(bondu)",
    	image: "img/kala.gif",
        about:"OYE BOND LELO",
    	keyword: "BONDU"
    }
]

function getInfo() {
	var userInput = document.getElementById('search').value
	var user = userInput.toUpperCase()

	for (var i = 0; i < list.length; i++) {
		if (user== list[i].keyword) {
			// var newH1 = document.createElement('h1')
			// var hello = document.getElementById('display')
			// hello.appendChild(newH1)
			// newH1.setAttribute('id' , 'jhund')
			document.getElementById('jhund').textContent = list[i].name
			document.getElementById('image').src = list[i].image
			document.getElementById('about').textContent = list[i].about
		}
	}
}