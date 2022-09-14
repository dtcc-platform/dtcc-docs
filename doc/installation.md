# Installation

DTCC Doc uses [Docusaurus](https://docusaurus.io/) to generate a
website for the documentation of the DTCC Platform.

The contents of the website reside in the `website` directory.
This directory is initially created by the command

    npx create-docusaurus@latest website classic

This is a one-time procedure that does not need to be repeated; the
generated contents of the `website` are part of the Git repository of
DTCC Doc.

Note that DTCC Doc requires Node.js which can be installed by

    brew install node  # on Mac
	apt install nodjs  # on Ubuntu
