# Installation

## Requirements

DTCC Docs requires Node.js.

To install on Mac, run the command

    brew install node

To install on Ubuntu, run the commands

    curl -sL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs

## Initial setup

The contents of the website reside in the `website` directory.
This directory was initially created by the command

    npx create-docusaurus@latest website classic

This is a one-time procedure that does not need to be repeated; the
generated contents of the `website` are part of the Git repository of
DTCC Docs.
