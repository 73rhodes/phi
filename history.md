# A Golden Thread

###### New Canons of Layout Based on the Golden Ratio

The Golden Ratio has fascinated designers, architects and artists since ancient
times, and it continues to be of interest to modern day graphic artists. With
the modernist movement popularized by the Bauhaus school came a renewed
interest in typography and page design. Several influential typographers turned
to the earliest examples of printed books, medieval *incunabula*, long
been considered to be the most beautiful examples of page layout, trying to 
discover the secret canons of layout by which they were constructed. This led
to several proposals that claimed to have successfully reverse engineered
the forgotten rules of layout used in the incunabula. These modern-day canons of
layout have been used by some publishers since the 1950's to produce beautiful
proportions in high-quality book printing.


Unfortunately the canons of layout are difficult to apply on the web. In 2009
I wrote a post called 
[Canons of Layout](http://51elliot.blogspot.ca/2009/12/canons-of-layout.html)
that offered some general guidelines for applying the concepts of the Canons to
web design. It focused on the importance of patterns and consistent margins,
but it stopped short of proposing new canons for the web.


It remains one of the most popular articles on my blog, and has been referenced
by other blogs like 
[The Secret Law of Page Harmony](http://retinart.net/graphic-design/secret-law-of-page-harmony/), which covers the concept of page construction popularized by
the modernist typographer Jan Tschichold. It is intended mainly for print.

My article gave some basic rules of thumb for applying concepts of layout to the
web, but ended there. Since then, some excellent CSS frameworks and grids have
come out, including a few that make reference to the Golden Ratio. [Rounded by
Gravity](http://roundedbygravity.com/colophon/)[0], an experiment in typography
from 2013, does a great job of demonstrating many principles of book design,
including Tschichold's "Golden Canon", translated to the web. It's an impressive
collection of typographical utilities and custom scripts, but it's not yet
available as a packaged CSS framework for download. Some grid systems have
appeared with names like
[Golden Grid](https://code.google.com/p/the-golden-grid/),
[Golden Grid System](http://www.goldengridsystem.com/), 
Divine Grid](https://daveden.wordpress.com/2012/02/23/the-divine-grid/)
and the new
[Golden Layout](https://golden-layout.com/)
but in spite of their names they don't actually implement the Golden Canon or
related constructions.

This leaves web designers without a lot of options for implementing layouts
based the Canons of Layout popularized by Tschichold and his contemporaries.
Web pages are a lot different than the medieval manuscripts that first used
the canons of layout, and it’s not easy to take ideas from ancient printed books and apply them
to the Internet.

I set off a couple of months ago working on an experimental layout framework for
the web based on the concepts of the Canons of Layout that come from very old books.
I wanted to see just how far I could go with the canons proposed by typographers
Raúl Mario Rosarivo, Jan Tschichold and Johan A. Van de Graaf.  I’ve enjoyed working
on it, and one of the most interesting parts was further researching the history of 
the Golden Ratio.

Its story leads back through time like a golden thread connecting 20th century
typographers, medieval book makers, renaissance artists, architects, mathematicians
and philosophers through their interest in this beautiful mathematical ratio known as
the Golden Mean.

## Revisiting the Golden Mean

The mathematics of the Golden Ratio (aka. Golden Mean) are pretty fascinating all by
themselves. The ratio is defined using the symbol φ (phi) by this simple formula:

```
a/b = (a+b)/a = φ
```

This says that `b` is proportionally smaller than `a` by the same percentage that `a` is smaller than `a + b` together. Only one ratio works for this, and it's given a mathematical symbol: φ (phi). Solving for φ with the help of the quadratic formula, you arrive at φ = ~1.618.

People have claimed that the Golden Ratio is the basis for various forms in nature, like the spiral of a nautilus sea-shell, or the intervals at which tree branches sprout from the trunk. It's been claimed as the basis for the pillars at the Parthenon, the dimensions of the human body, Japanese zen garden design, the size of the screen on a MacBook computer, sunflowers, buildings and works of art.

The Golden Ratio can also be expressed as pair of percentages, which is more useful for page design. If you wanted to divide the width of the page into two columns, a and b, that conform to the Golden Ratio, you can work this out pretty easily as follows:

```
a = 1.618 * b
a + b = 1.618 b + b = 2.618b = 100%
b = 100% / 2.618 = 38%
a = 62%
```

### The Golden Rectangle

The Golden Ratio is often represented in the form of a special rectangle. It's a good way to visualize the Golden Ratio. The Golden Rectangle (aka. Golden Section) has height and width that conform to the Golden Ratio of approximately 1.618. With exactly this shape of rectangle, you can divide it into to a square and a smaller rectangle - and the smaller rectangle will *also* be a Golden Rectangle, which can again be divided into a square and another Golden Rectangle, and so on and so forth.  This picture is often used to illustrate the Golden Ratio, showing the repeating, perfectly-nesting nature. It's important to note that there is only one shape of rectangle where this works - the Golden Rectangle.

![Image of Golden Section](http://mathworld.wolfram.com/images/eps-gif/GoldenSpiral_1000.gif)

### Intentional vs. Accidental Layouts

Layouts which follow a discernable pattern tend to be more pleasing to the eye than arbitrarily chosen ones. The human mind is amazingly adept at picking out subtle nuances of form and pattern. There are quite a few logical geometries that can be used to construct pleasing page layouts. What's most important is not that the page looks like a Golden Rectangle, but the fact that there is a harmonious relationship between the page and the text, a rhyme and reason to the proportions of the page that which the eye is capable of discerning, even if we’re not fully conscious of it at first.

Layouts that use arbitrary dimensions, which Jan Tschichold called "accidental layouts", seem to lack to elegant balance of ones that follow a canon of page construction where the dimensions are derived from the shape of the page itself.

## The Optical Center

Methods for making harmonious, proportional layouts are also used in the world of fine art. In particular, they're often used for framing fine art and photography to determine the dimensions of the mat and the position of its opening. It's fairly common for artwork to be positioned slightly above center in the frame.  This is called the "Optical Center" - the position where the artwork appears to be most balanced. Place the artwork at dead center and strangely it will seem that the top margin of the mat is too wide. Photographer Russell Cottrell writes "The optically-centered print is slightly above center. This may be more visually pleasing, because of an illusion in which a vertically-centered print seems to “sink” a little on the mount."[\[4\]](http://www.russellcottrell.com/photo/centering.htm)

   Alternate interpretations of the optical center:
   
   1 given by Harold Evans (after V. Steer) in Newspaper Design (1973);
   2 proposed by Albert A. Sutton in Design and Makeup of the Newspaper (1948);

   from http://typophile.com/node/86543

[TODO complete this section on framing and the optical center]

Present day: fine art photography framing and the “optical center”
  * http://www.russellcottrell.com/photo/centering.htm
  * http://www.fineart-photography.com/mat.html

## Origins of the Canons

The modernist art movement and the Bauhaus school of design emphasized a cross-disciplinary approach that included a rennaissance in the field of typography. Modernist typographers like Tschichold, Rosarivo and Van de Graaf were interested in new ideals of beautiful page design, and they turned to an interesting source for inspiration. The pages of medieval incunabula - the earliest printed books such as the Gutenberg bibles - have always been regarded as beautiful. Tschichold and his peers carefully studied the ancient books, attempting to learn the secret methods that were used to create the elegant structure of the earliest printed pages. They proposed methods of how the old page layouts may have been constructed. Their Canons are relatively modern-day reconstructions made by reverse-engineering the beautiful examples of layout they found in medieval books.

Jan Tschichold was a German typographer and early proponent of modernism who wrote extensively on typography and design; his book "Die neue Typographie (The New Typography)"[1] remains a classic, and his style guide for Penguin Books, the [Penguin Composition Rules](http://en.wikipedia.org/wiki/Penguin_Composition_Rules) brought his ideals of typography to the masses. His essay "Consistent Correlation Between Book Page and Type Area"[\[2\]](http://www.arts.ucsb.edu/faculty/reese/classes/artistsbooks/jantschichold.pdf) discusses page construction and his concept of the Golden Canon. It's part of a collection of essays published posthumously in 1991 as "De properties van het boek (Die Proportionen des Buches)", available in English as "The Form of the Book: Essays on the Morality of Good Design"[\[3\]](http://books.google.ca/books?id=EzNUAAAAMAAJ&dq), containing essays by Jan Tschichold, Robert Bringhurst, and Hajo Hadeler.

Studying medieval manuscripts, Tschichold extended the theories of Rosarivo and Van de Graaf by identifying what he believed was a method of page layout used by some medieval printers to produced a text area that closely resembles the Golden Section. He called this the "Golden Canon", a method requires starting with a page 2:3 proportion, leading to a text area in the Golden Section and specific margins. Tschichold was not the first typographer to write about the use of the Golden Ratio in page layout, however. He references the work of Rosarivo, who had his own theories about how medieval pages were constructed.

![Image of Page](http://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Gutenberg_bible_Old_Testament_Epistle_of_St_Jerome.jpg/172px-Gutenberg_bible_Old_Testament_Epistle_of_St_Jerome.jpg)

Raul Mario Rosarivo, an Argentine typographer, studied the Gutenberg bibles extensively, and believed he'd discovered the secret of their beautiful dimensions. With the use of a compass he analyzed the pages and published his findings in  "Divina proporción tipográfica"[5] (The Divine Typographical Proportion, 1947). He claimed that the pages made use of the Golden Ratio, or the "Divine Typographical Proportion" as he called it, although he took this ratio to be 2:3, a convergent (approximation) of the Golden Ratio (1.5 rather than 1.618). Essentially, Rosarivo's method involves dividing the page into a 9-by-9 grid with top and inner margins of 1, bottom and back margins of 2.

Tschichold showed that Rosarivo's method of dividing a page into 9ths was equivalent to another known method proposed by the Dutch scholar of book design, Johan A. Van de Graaf, in his book _Nieuwe berekening voor de vormgeving_[6]. Van de Graaf had discovered "The Secret Canon" -  a simple method of reconstructing the layout of medieval incunabula using only a straight edge and a series of diagonal lines. It works for pages of any dimensions, and is the simplest way of achieving the same pleasing proportions of text area and margins that Rosarivo and Tschichold corroborated in their study of ancient books.

Whether or not the Golden Section was the real objective of Gutenberg, Tschichold contributed to our understanding of the canons by emphasizing that the text area should be in proportion to the page, and by identifying the proportions of the margins that accomplish this.

[TODO talk about Tschichold's mention of Villard and how Van de Graaf's Secret Canon employs the technique of the Villard Diagram. Also talk about the tenuous link between Villard and the so-called Villard diagram. Who was Villard, what do we actually know of his work, and why do some people think the "Villard Diagram" was his?]

## Rethinking Canons of Layout for the Modern Web

## Introducing Phi.JS

TODO

* Describe the thought process leading to the new canons of layout.
* Discuss difficulties translating the traditional canons to the web
* Scrolling
* different screen sizes
* Discuss potential solutions
* Demo the work done so far on the Phi.JS proof-of-concept.

[0] Rounded by Gravity roundedbygravity.com/#

[1] *Die neue Typographie, Ein Handbuch für zeitgemäss Schaffende*, Berlin, Verlag des Bildungsverbandes der Deutschen Buchdrucker, 1928.

[2] Jan Tschichold, "[Consistent Correlation Between Page and Type Area](http://www.arts.ucsb.edu/faculty/reese/classes/artistsbooks/jantschichold.pdf)" in: _The Form of the Book, essays by Jan Tschichold_ (Amsterdam, Lund Humphries, 1991). Retrieved from http://www.arts.ucsb.edu/faculty/reese/classes/artistsbooks/jantschichold.pdf, 18 November 2014. Tschichold describes a "Villard Diagram" though it isn't clear what the basis for this attribution is.

[3] Jan Tschichold, Robert Bringhurst, and Hajo Hadeler, [The Form of the Book: Essays on the Morality of Good Design](http://books.google.ca/books?id=EzNUAAAAMAAJ&dq)" (Amsterdam, Lund Humphries, 1991). Retrieved from http://books.google.ca/books?id=EzNUAAAAMAAJ&dq 18 November 2014. Collection of Essays originally titled "De properties van het boek (Die Proportionen des Buches)" published posthumously in 1991.

[5] Raúl Mario Rosarivo, _Divina proporción tipográfica (Typographical Divine Proportion)_, (Buenos Aires, 1947).

[6] Joh.A. Van de Graaf, _Nieuwe berekening voor de vormgeving (A new way to compute form)_ in: Tete, 1946: 95-100. (Amsterdam, November 1946). Shows the simplest way to divide paper height and width into ninths.



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

This article tries to draw some connections between Euclid's geometry and the
sketches of Villard de Honnecourt, proposing that the technique of dividing a
space into 1/2, 1/3, etc can be seen in his work. It doesn't go so far as
attribution. The so-called "Villard Diagram" seems to be an invention of
Daniele Capo, who constructed it and made the attribution to Villard, however
Tenuous. It does seem likely, however, that Villard and other architects and
artists probably from Phidias (490-430 BC - who built the Parthenon statues)... 
from the ancient Greeks anyway... and certainly from Euclid (325-265 BC)
onwards, knew methods of geometric construction that are illustrated by the
so-called Villard Diagram. And not only the technique of dividing spaces into
Nths, but of creating equilateral triangles and a great many other ingenious
techniques for architecture and building. What the article by Marie-Therese
Zenner is particularly interesting for is it's assertion that from the time of
the ancient Greeks through the renaissance, from Euclid to Vitruvius to
(Villard) de Honnecourt to da Vinci, artist and architect were two aspects of
the same profession, and a knowledge of geometry was absolutely a requirement
whether it was artistic rendering or engineering. You can see Honnecourts complete folio at https://archive.org/details/albumdevillardde00vill - it does not contain the so-called Villard Diagram. It certainly doesn't use any of these canons of page construction to define the layout of his sketchbook - as one tumblr post claimed - the margins are completely inconsistent, accidental, and frequently non-existent!

unknown, <i>Feuille de Papier</i>, website: http://www.ac-grenoble.fr/argouges/v1/PEDAGOGI/MAREAU/feuille_de_papier.htm retrieved 8 June, 2014.
Another source of attribution for the so-called Villard Diagram. It mentions Honnecourt but contains no supporting evidence that the technique of dividing a space into N parts came from him. It seems likely that this technique was known at least since Euclid and used by many artist-architects from ancient Greece onwards.

Traditional Leading (pronounced "ledding") in CSS. http://jsfiddle.net/gxxXN/



Book design blog http://theworldsgreatestbook.com/book-design-part-1/

Typogr.js https://github.com/ekalinin/typogr.js
