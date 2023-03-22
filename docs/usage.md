# Usage

To build the documentation, run the script

    bin/build-docs

This clones all DTCC packages and copies the docs (folder `docs`) into
the directory `website/docs`.

After the docs have been copied, run the following commands to build
and launch the website:

    cd website
    npm install
    npm start &

The website will then be accessible at

    http://localhost:3000/
