# zotero-picker package

## Why

To facilitate citation insertion for those who write in markdown and use Zotero.

Now you can write your research papers in markdown,
and insert your citations using [Zotero picker plugin](https://atom.io/packages/zotero-picker) for Atom.

One can then simply create `latex` or `pdf` from `md` using `pandoc`:

    pandoc input.md --bibliography=mybib.bib -o output.pdf

## What

Invokes the Zotero visual picker.
Inserts the citations key(s) by preceding (each) with an `@` character.
If multiple items are cited via the picker, a `;` inserted in between,
as [suggested](http://pandoc.org/demo/example19/Extension-citations.html) by Pandoc:

    Citations go inside square brackets and are separated by semicolons.

![A screenshot of the package](https://raw.githubusercontent.com/oztalha/zotero-picker/master/zotero-picker.gif)
Note: `alt+z` is the short way to get to the picker.

## Required

- Zotero should be running in the background.
- Citation keys should've already been generated

![Citation key field in Zotero](https://raw.githubusercontent.com/oztalha/zotero-picker/master/citation_key.png)

Note: I recommend auto-generating `Citation Key` field values using [Better Bibtex](https://github.com/retorquere/zotero-better-bibtex). (This is how I also export my `bib` file; using its Better BibLateX translator).
