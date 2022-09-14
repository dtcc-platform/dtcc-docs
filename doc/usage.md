# Usage

DTCC Doc pulls in the documentation from all components of the DTCC
Platform. This is handled by keeping all components as Git submodules
of the DTCC Doc repository and extracting the contents from the `doc`
folder of each submodule. To build the documentation, run the script

	bin/dtcc-build-documentation

To fire up the website, run the following commands:

    cd website
	npm install
	npm start &
