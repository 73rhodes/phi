# A Golden Thread

###### New Canons of Layout Based on a Historical Perspective of the Golden Ratio

## Intro

The Golden Ratio has fascinated designers, architects and artists for centuries. It continues to interest modern-day web designers who want to apply the principles of beautiful geometry to their pages. In 2009 I wrote about [Canons of Layout](http://51elliot.blogspot.ca/2009/12/canons-of-layout.html), which talks about the Golden Ratio, canons of page construction, and some general ideas on how they might apply to modern-day web design. Surprisingly, it remains one of the most popular posts on my blog. There are quite a few similar articles now where the authors write in ebullient terms about the wonders of the Golden Ratio in page layout - [The Secret Law of Page Harmony](http://retinart.net/graphic-design/secret-law-of-page-harmony/) on retinart.net is one of the more popular articles, and it kindly referenced my post as well. Since then a lot of others have written about the Golden Ratio as it pertains to web design, with varying degrees of accuracy - mostly not so accurate, I'm afraid.

Various people have attempted to implement frameworks based on the principles of the Golden Ratio, with varying degrees of success as well. A fairly recent work from 2013, [Rounded by Gravity](http://roundedbygravity.com/colophon/), does a great job of demonstrating the concept. It's basically an experimental work, however, not a re-usable CSS framework that you can download.

A few CSS grid systems have appeared with names like [Golden Grid](https://code.google.com/p/the-golden-grid/), [Golden Grid System](http://www.goldengridsystem.com/), [Divine Grid](https://daveden.wordpress.com/2012/02/23/the-divine-grid/) and the new [Golden Layout](https://golden-layout.com/) - which even uses the Golden Rectangle as a logo - but none of them actually implement the Canons of Layout popularized by the main authorities on the subject, Tschichold and Rosarivo.

It turns out that web pages are a lot different than your average medieval manuscript, and it’s not easy to take ideas from the days of Gutenberg and apply them to the Internet. All of the attempts to do so seem to have fallen short of providing web developers with a reliable solution for accurately implementing the principles of the Canons of Layout. 

So, I set off a couple of months ago working on a little layout framework for the web based on the concepts of these wonderful layouts that come from very old books. I wanted to see just how far one could go with these canons of page construction that have been written about by Rosarivo, Tschichold and others.  I’m happy to say I’ve had some success with it, but one of the most interesting parts was further researching the history of the Golden Ratio, also known as the Golden Mean.

Its story leads down an interesting path, from 20th century writers, to medieval book makers and renaissance artists, to ancient architects, mathematicians and philosophers. There’s a golden thread that winds its way back to ancient times, connecting various characters through their interest in this beautiful mathematical ratio known as the Golden Mean.

TODO

Trace the history of Canons of Layout and the Golden Mean from the present day back to it’s origins.
Describe the thought process leading to the new canons of layout.
Discuss difficulties translating the traditional canons to the web
Scrolling
different screen sizes
Discuss potential solutions
Demo the work I’ve done so far on the Phi.JS proof-of-concept.



## Revisiting the Golden Ratio

The mathematics of the Golden Ratio (aka. Golden Mean, Golden Section) are pretty fascinating all by themselves. 
The ratio is defined using the symbol φ (phi) by this simple formula:

```
a/b = (a+b)/a = φ
```

This means if you have a line made up of section `a` and a shorter section `b`, then the total length is `a + b`, and the ratio between sections `a ` and `b` is the same as the ratio between the total length `a + b` and section `a`. Another way to explain it would be that `b` is proportionally smaller than `a` by the same percentage that `a` is smaller than `a + b` together. Only one ratio works for this, and it's given a mathematical symbol: φ (phi). Solving for φ with the help of the quadratic formula, you arrive at φ = ~1.618.

The Golden Ratio has been claimed as the basis for the way a nautilus sea-shell spirals inwards in smaller and smaller chambers, or the distances at which tree branches sprout from the trunk, or the shape of the pillars at the Parthenon in Greece, or even the dimensions of the human body. It's been said to be important in Japanese zen garden design, the size of the screen on a MacBook computer, sunflowers, buildings and works of art. It's also the basis of the Golden Rectangle, which in turn is the basis of the Golden Canon of page layout.

The best way understand the Golden Ratio is to look at a picture of nested Golden Rectangles. A Golden Rectangle, also known as the Golden Section, has a long side and a short side that conform to the Golden Ratio of approximately 1.618.  For example a Golden Rectangle may be 1 inch high and 1.618 inches wide. With exactly the right shape of rectangle, you can divide it into to parts - a big square and a smaller rectangle - and the smaller rectangular subsection will *also* be a Golden Rectangle where one side is 1.618 times longer than the other, and which can again be divided into a square and another, smaller Golden Rectangle, and so on and so forth.  This picture is often used to illustrate the Golden Ratio. It's importan to note that there is only one shape of rectangle where this works; the sides have to be exactly the right proportion to each other, as defined by φ, or 1.618.

The Golden Ratio can be defined as pair of percentages, which is more useful for page design. If you wanted to divide the width of the page into two columns, a and b, that conform to the Golden Ratio, you can work this out pretty easily as follows:

```
a = 1.618 * b
a + b = 1.618 b + b = 2.618b = 100%
b = 100% / 2.618 = 38%
a = 62%
```

### The Golden Rectangle

Discussion of the Golden Mean inevitably turns to the Golden Rectangle, which is especially interesting for designers of things with rectangular shapes, like pages. Tschichold popularized the Golden Section in layout in his "Golden Canon", which showed that a number of medieval incunabula (books) used a layout that conformed more-or-less to the Golden Section.  The Golden Section is interesting because it's the only rectangular shape that can be divided into a perfect square and another, smaller Golden Rectangle, which can also be divided into a perfect square and another, smaller Golden Rectangle, and so on and so forth, ad infinitum.

### Intentional vs. Accidental Layouts

Shapes which follow a discernable pattern tend to be more pleasing to the eye than “accidental” dimensions. The human mind is amazingly adept at picking out subtle nuances of form and pattern. The Golden Ratio isn't the only well-structured pattern - there are quite a few logical geometries that can be used to construct pleasing, “non accidental” page layouts. What's most important is the fact that there *is* a proportional relationship between things, a rhyme and reason to the proportions of a page that which the eye is capable of discerning, even if we’re not conscious of it.

Layouts that use arbitrary dimensions, which Jan Tschichold called "accidental layouts", seem to lack to elegant balance of ones that follow a canon of page construction where the dimensions are derived from the shape of the page itself.

Part 2: Tracing the Origins of the Canons

The Wikipedia article on Canons of Page Construction provides a great overview of the 20th Century authors who wrote books on page design that 

In the 20th century, authors including Tschichold, Rosarivo and Van de Graafwrote influential books on the subject of page design. These writers studied the earliest printed books, medieval incunabula, and worked out various methods showing how the layout of medieval books may have been constructed. The latest of these was Jan Tschichold, a german typographer and student of the Bauhaus school of design. Tschichold wrote several books on typography and design, but it's his essay titled "Consistent Correlation Between Book Page and Type Area"[1] where the subject of page construction and the Golden Canon are mentioned. 

The essay has been published posthumously in "[The Form of the Book: Essays on the Morality of Good Design](http://books.google.ca/books?id=EzNUAAAAMAAJ&dq)", by Jan Tschichold, Robert Bringhurst, and Hajo Hadeler, published by Lund Humphries in 1991.

Johan A. Van de Graaf, a dutch typographer, 


Turning Back the Pages

To really get a full picture of these canons, the Golden Mean, and how they all tie together over the ages, you need to trace back from the modern day (1940’s) to the time of the ancient Greeks. There’s a thread of knowledge passed through the millennia that has landed us here today.

Present day: fine art photography framing and the “optical center”
http://www.russellcottrell.com/photo/centering.htm
http://www.fineart-photography.com/mat.html


Part 3: Rethinking Canons of Layout for the Modern Web

Part 4: Introducing Phi.JS


[1] Jan Tschichold, "Consistent Correlation Between Page and Type Area" in: _The Form of the Book, essays by Jan Tschichold_ (Amsterdam, Lund Humphries, 1991). Retrieved from http://www.scribd.com/doc/14747396/Tschichold, 8 June 2014. Collection of Essays originally titled "De properties van het boek (Die Proportionen des Buches)" published posthumously in 1991. Tschichold describes a "Villard Diagram" though it isn't clear what the basis for this attribution is.

ALso http://www.arts.ucsb.edu/faculty/reese/classes/artistsbooks/jantschichold.pdf

Raúl Mario Rosarivo, _Divina proporción tipográfica (Typographical Divine Proportion)_, (Buenos Aires, 1947).

Joh.A. Van de Graaf, _Nieuwe berekening voor de vormgeving (A new way to compute form)_ in: Tete, 1946: 95-100. (Amsterdam, November 1946). Shows the simplest way to dividepaper height and width into ninths.

Luca Pacioli, _De Divina Proportiona_, illus. Leonardo da Vinci (1497).

Leonardo da Vinci, _Vitruvian Man_ (illustration). (c. 1490)

Vitruvian Man (C. 1490), Giacomo Andrea Da Ferrara, Biblioteca Ariostea, Ferrara (Cart. Sec. XVI, Fol. Figurato, Classe II, N. 176, Fol 78V). Retrieved from http://www.smithsonianmag.com/arts-culture/the-other-vitruvian-man-18833104, 8 June 2014.  Likely the basis for da Vinci's illustration of the Vitruvian Man. The work of Vitruvius had been rediscovered and was being referenced in the 15th century by architects like Giacomo Andrea Ferrara, a close friend of da Vinci. 

Francesco di Giorgio, _Trattato di Architettura Civile e Militare_ (1470).  Painter, visionary architectural theorist. His illustration is probably the original "Vitruvian Man".

Francesco di Giorgio, <u>untitled illustration</u>. (1470). Retrieved from http://en.wikipedia.org/wiki/Vitruvian_Man#mediaviewer/File:FGMartini1.jpg . This is probably the original "Vitruvian Man".

Villard de Honnecourt, untitled [33 Sheets of parchment containing 250 drawings] (c. 1220-1240) retrieved from https://archive.org/details/albumdevillardde00vill 8 June, 2014. It is not clear how the so-called "Villard Diagram" has become attributed to Honnecourt.

Marcus Vitruvius Pollio, <i>De Architura</i> (c. 15 BC) See the "Rediscovery of Vitruvius" at http://en.wikipedia.org/wiki/Vitruvius#Rediscovery 
Rediscovered 1414 by Poggio Bracciolini and made widely known by artist Leon Battista Alberti in his book De re aedificatoria c. 1450.

Euclid, <i>Elements</i> (c. 300 BC). First recorded definition of the Golden Ratio ("extreme and mean ratio" ἄκρος καὶ μέσος λόγος)

Plato, <i>Timeaus</i> (c.360 BC).

"For whenever in any three numbers, whether cube or square, there is a mean, which is to the last term what the first term is to it; and again, when the mean is to the first term as the last term is to the mean—then the mean becoming first and last, and the first and last both becoming means, they will all of them of necessity come to be the same, and having become the same with one another will be all one"

        Timeaus, Plato, c.360BC.

Marie-Therese Zenner, _Villard de Honnecourt and Euclidian Geometry_, website: http://www.emis.de/journals/NNJ/Zenner.html retrieved 8 June 2014.

This article tries to draw some connections between Euclid's geometry and the sketches of Villard de Honnecourt, proposing that the technique of dividing a space into 1/2, 1/3, etc can be seen in his work. It doesn't go so far as attribution. The so-called "Villard Diagram" seems to be an invention of Daniele Capo, who constructed it and made the attribution to Villard, however Tenuous. It does seem likely, however, that Villard and other architects and artists probably from Phidias (490-430 BC - who built the Parthenon statues)... from the ancient Greeks anyway... and certainly from Euclid (325-265 BC) onwards, knew methods of geometric construction that are illustrated by the so-called Villard Diagram. And not only the technique of dividing spaces into Nths, but of creating equilateral triangles and a great many other ingenious techniques for architecture and building. What the article by Marie-Therese Zenner is particularly interesting for is it's assertion that from the time of the ancient Greeks through the renaissance, from Euclid to Vitruvius to (Villard) de Honnecourt to da Vinci, artist and architect were two aspects of the same profession, and a knowledge of geometry was absolutely a requirement whether it was artistic rendering or engineering. You can see Honnecourts complete folio at https://archive.org/details/albumdevillardde00vill - it does not contain the so-called Villard Diagram. It certainly doesn't use any of these canons of page construction to define the layout of his sketchbook - as one tumblr post claimed - the margins are completely inconsistent, accidental, and frequently non-existent!

unknown, <i>Feuille de Papier</i>, website: http://www.ac-grenoble.fr/argouges/v1/PEDAGOGI/MAREAU/feuille_de_papier.htm retrieved 8 June, 2014.
Another source of attribution for the so-called Villard Diagram. It mentions Honnecourt but contains no supporting evidence that the technique of dividing a space into N parts came from him. It seems likely that this technique was known at least since Euclid and used by many artist-architects from ancient Greece onwards.

Traditional Leading (pronounced "ledding") in CSS. http://jsfiddle.net/gxxXN/

Rounded by Gravity roundedbygravity.com/#

Book design blog http://theworldsgreatestbook.com/book-design-part-1/
