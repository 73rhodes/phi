# A Golden Thread

###### New Canons of Layout Based on a Historical Perspective of the Golden Ratio

The Golden Ratio has fascinated designers, architects and artists for centuries, and it continues to interest modern-day web designers who want to apply principles of beautiful geometry to their pages. In 2009 I wrote [Canons of Layout](http://51elliot.blogspot.ca/2009/12/canons-of-layout.html), which talks about the Golden Ratio, canons of page construction, and some general ideas on how they might apply to modern-day web design. It's still one of my most popular posts. There are many newer articles now, one of the most well-known being [The Secret Law of Page Harmony](http://retinart.net/graphic-design/secret-law-of-page-harmony/) on retinart.net, which kindly linked to my article. Since then a lot of others have written similar articles, with varying degrees of accuracy.

There have also been some attempts to implement CSS frameworks based on the Golden Ratio, also with varying degrees of success. A website from 2013, [Rounded by Gravity](http://roundedbygravity.com/colophon/), does a great job of demonstrating many of the concepts. It's really an experimental work, however, not a re-usable CSS framework that you can download. A few CSS grid systems have appeared with names like [Golden Grid](https://code.google.com/p/the-golden-grid/), [Golden Grid System](http://www.goldengridsystem.com/), [Divine Grid](https://daveden.wordpress.com/2012/02/23/the-divine-grid/) and the new [Golden Layout](https://golden-layout.com/) - which even uses the Golden Rectangle as a logo - but none of them actually implement the Canons of Layout popularized by the 20th Century typographers who proposed them.

It turns out that web pages are a lot different than your average medieval manuscript, and it’s not easy to take ideas from the days of Gutenberg and apply them to the Internet. All of the attempts seem to have fallen short. so far, there's no reliable solution for accurately implementing the principles of the Canons of Layout. 

I set off a couple of months ago working on an experimental layout framework for the web based on the concepts of the Canons of Layout that come from very old books. I wanted to see just how far one could go with the canons proposed by typographers Raúl Mario Rosarivo, Jan Tschichold and Johan A. Van de Graaf.  I’ve had some success with it, and one of the most interesting parts was further researching the history of the Golden Ratio.

Its story leads down an interesting path, from 20th century typographers to medieval book makers and renaissance artists, to ancient architects, mathematicians and philosophers. There’s a golden thread that winds its way back to ancient times, connecting historical figures through their interest in this beautiful mathematical ratio known as the Golden Mean.

## Revisiting the Golden Ratio

The mathematics of the Golden Ratio (aka. Golden Mean, Golden Section) are pretty fascinating all by themselves. 
The ratio is defined using the symbol φ (phi) by this simple formula:

```
a/b = (a+b)/a = φ
```

This means that `b` is proportionally smaller than `a` by the same percentage that `a` is smaller than `a + b` together. Only one ratio works for this, and it's given a mathematical symbol: φ (phi). Solving for φ with the help of the quadratic formula, you arrive at φ = ~1.618.

People have claimed that the Golden Ratio is the basis for various forms in nature, like the spiral of a nautilus sea-shell, or the intervals at which tree branches sprout from the trunk. It's been claimed as the basis for the pillars at the Parthenon, the dimensions of the human body, Japanese zen garden design, the size of the screen on a MacBook computer, sunflowers, buildings and works of art. 

The Golden Ratio can also be expressed as pair of percentages, which is more useful for page design. If you wanted to divide the width of the page into two columns, a and b, that conform to the Golden Ratio, you can work this out pretty easily as follows:

```
a = 1.618 * b
a + b = 1.618 b + b = 2.618b = 100%
b = 100% / 2.618 = 38%
a = 62%
```


### The Golden Rectangle

The Golden Ratio is also the basis of the Golden Rectangle. A good way to visualize the Golden Ratio is to look at a picture of nested Golden Rectangles. A Golden Rectangle, also known as the Golden Section, has height and width that conform to the Golden Ratio of approximately 1.618.  For example, a Golden Rectangle may be 1 meter high and 1.618 meters wide. With exactly the right shape of rectangle, you can divide it into to a square and a smaller rectangle - and the smaller rectangle will *also* be a Golden Rectangle with one side 1.618 times longer than the other, and which can again be divided into a square and another Golden Rectangle, and so on and so forth.  This picture is often used to illustrate the Golden Ratio. It's important to note that there is only one shape of rectangle where this works; the sides have to be exactly the right proportion to each other, as defined by φ, or 1.618.

![Image of Golden Section](http://mathworld.wolfram.com/images/eps-gif/GoldenSpiral_1000.gif)

The Golden Rectangle is especially interesting for page designers. Tschichold popularized it in his "Golden Canon", which showed that a some medieval incunabula (the earliest printed books) used a layout that conforms more-or-less to the Golden Section.

### Intentional vs. Accidental Layouts

Shapes which follow a discernable pattern tend to be more pleasing to the eye than “accidental” dimensions. The human mind is amazingly adept at picking out subtle nuances of form and pattern. The Golden Ratio isn't the only well-structured pattern - there are quite a few logical geometries that can be used to construct pleasing, “non accidental” page layouts. What's most important is the fact that there *is* a harmonious relationship between things, a rhyme and reason to the proportions of a page that which the eye is capable of discerning, even if we’re not fully conscious of it.

Layouts that use arbitrary dimensions, which Jan Tschichold called "accidental layouts", seem to lack to elegant balance of ones that follow a canon of page construction where the dimensions are derived from the shape of the page itself.

## The Optical Center

Methods for making harmonious, proportional layout are interesting to page designers, but they're also used in the world of fine art. In particular, they're often used for framing fine art and photography to determine the dimensions of the mat and the position of the opening. It's fairly common for artwork to be positioned slightly above center, with a larger margin at the bottom of the mat than the top.  Framers refer to this as the "Optical Center" - the position where the artwork appears to be most balanced in the frame. Place the artwork at dead center and strangely it will seem that the top margin of the mat is too wide. Photographer Russell Cottrell writes "The optically-centered print is slightly above center. This may be more visually pleasing, because of an illusion in which a vertically-centered print seems to “sink” a little on the mount."[\[4\]](http://www.russellcottrell.com/photo/centering.htm)

   Alternate interpretations of the optical center:
   1) given by Harold Evans (after V. Steer) in Newspaper Design (1973);
   2) proposed by Albert A. Sutton in Design and Makeup of the Newspaper (1948);
   from http://typophile.com/node/86543

[TODO discuss how the canons can be used for modern layout - refernce retinart, bounded by gravity, etc]

[TODO complete this section on framing and the optical center]

Present day: fine art photography framing and the “optical center”
  * http://www.russellcottrell.com/photo/centering.htm
  * http://www.fineart-photography.com/mat.html

## Origins of the Canons

The modern art movement and influence of the Bauhaus school of design in the early 20th century emphasized a cross-disciplinary approach that included a rennaissance in the field of typography. Modernist typographers like Tschichold, Rosarivo and Van de Graaf began studying the earliest printed books - medieval incunabula such as the Gutenberg bibles - and wrote influential treatise on page design that attempted to show how the old page layouts may have been constructed. Their Canons are 20th Century reconstructions made by reverse-engineering the beautiful examples of layout they found in medieval books.

Jan Tschichold was a german typographer and early proponent of modernism who wrote extensively on typography and design; his book "Die neue Typographie (The New Typography)"[1] remains a classic, and his style guide for Penguin Books, the [Penguin Composition Rules](http://en.wikipedia.org/wiki/Penguin_Composition_Rules) brought his ideals of typography to the masses. But it's his essay entitled "Consistent Correlation Between Book Page and Type Area"[\[2\]](http://www.arts.ucsb.edu/faculty/reese/classes/artistsbooks/jantschichold.pdf) wherein he discusses page construction and his concept of the Golden Canon. The essay has been published posthumously in 1991 in "De properties van het boek (Die Proportionen des Buches)", published in English as "The Form of the Book: Essays on the Morality of Good Design"[\[3\]](http://books.google.ca/books?id=EzNUAAAAMAAJ&dq), containing essays by Jan Tschichold, Robert Bringhurst, and Hajo Hadeler.

[TODO discuss Tschichold's references to Van de Graaf's Canon, Rosarivo's Divine Proportion, and his own Golden Canon]

Johan A. Van de Graaf, a dutch typographer, 

Discuss also Rosarivo's construction by 9ths [pretty sure this was Rosarivo's approach - but double check it].

Turning Back the Pages

To really get a full picture of these canons, the Golden Mean, and how they all tie together over the ages, you need to trace back from the modern day (1940’s) to the time of the ancient Greeks. There’s a thread of knowledge passed through the millennia that has landed us here today.



Part 3: Rethinking Canons of Layout for the Modern Web

Part 4: Introducing Phi.JS

TODO

* Trace the history of Canons of Layout and the Golden Mean from the present day back to it’s origins.
* Describe the thought process leading to the new canons of layout.
* Discuss difficulties translating the traditional canons to the web
* Scrolling
* different screen sizes
* Discuss potential solutions
* Demo the work done so far on the Phi.JS proof-of-concept.

[1] *Die neue Typographie, Ein Handbuch für zeitgemäss Schaffende*, Berlin, Verlag des Bildungsverbandes der Deutschen Buchdrucker, 1928.

[2] Jan Tschichold, "[Consistent Correlation Between Page and Type Area](http://www.arts.ucsb.edu/faculty/reese/classes/artistsbooks/jantschichold.pdf)" in: _The Form of the Book, essays by Jan Tschichold_ (Amsterdam, Lund Humphries, 1991). Retrieved from http://www.arts.ucsb.edu/faculty/reese/classes/artistsbooks/jantschichold.pdf, 18 November 2014. Tschichold describes a "Villard Diagram" though it isn't clear what the basis for this attribution is.

[3] Jan Tschichold, Robert Bringhurst, and Hajo Hadeler, [The Form of the Book: Essays on the Morality of Good Design](http://books.google.ca/books?id=EzNUAAAAMAAJ&dq)" (Amsterdam, Lund Humphries, 1991). Retrieved from http://books.google.ca/books?id=EzNUAAAAMAAJ&dq 18 November 2014. Collection of Essays originally titled "De properties van het boek (Die Proportionen des Buches)" published posthumously in 1991.


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
