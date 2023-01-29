import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	font-family: 'Patrick Hand', cursive;
	background-color: #f3f3b2;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button{
    cursor: pointer;
}

.Alive {
    background-color: white;
	animation: lightsOn 1s infinite alternate, rotate 1s;
	@keyframes lightsOn {
	  0%{
		box-shadow: unset;
	  }
	  50%{
		box-shadow: 0 0 5px greenyellow;
	  }
	  100%{
		box-shadow: 0 0 15px greenyellow;
	  }
  
  }
  }  

.Alive h2{
	color: #159b90;
}

.Alive .Male{
	color: #1d87eb;
}
.Alive .Female{
	color: pink;
}
.Alive .Human{
	color: #b37272;
}
.Alive .Alien{
	color: green;
}
.Alive .unknown{
	background-color: transparent;
}

.Dead {
    background-color: #d48989;
	opacity: 0.5;
	animation: lightsOff 3s, rotate 1s;
  }

@keyframes lightsOff {
	  0%{
		opacity: 1;
	  }
	  50%{
		opacity: 0.8;
	  }
	  100%{
		opacity: 0.5;
	  }
  
  }

.Dead h2{
	color: #861212;
  }

.Dead .Male{
	color: #1d87eb;
}

.Dead .Female{
	color: pink;
}
.Dead .Human{
	color: #8a5e5e;
}
.Dead .Alien{
	color: green;
}
.Dead .unknown{
	background-color: transparent;
}
.unknown {
    background-color: gray;
  }
.unknown .Male{
	color: #1d5d99;
}

.unknown .Female{
	color: pink;
}
.unknown .Human{
	color: #8d5a5a;
}
.unknown .Alien{
	color: #0a470a;
}
`;
