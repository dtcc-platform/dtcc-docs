# Usage

# Editing the website

DTCC Doc pulls in the documentation from all components of the DTCC
Platform. This is handled by keeping all components as Git submodules
of the DTCC Doc repository and extracting the contents from the `doc`
folder of each submodule.

To build the documentation, run the script

	bin/dtcc-build-documentation

This pulls in the latest documentation from all components of DTCC
Platform to the directory `website/docs`.

To fire up the website, run the following commands:

    cd website
	npm install
	npm start &

The website will then be accessible at

    http://localhost:3000/
