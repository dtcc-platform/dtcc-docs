# Usage

**FIXME**
The text below is copied from the old DTCC Builder README and needs to be edited.

The most convenient way to work with the DTCC Platform is to use the
custom [Docker](https://www.docker.com/) image, which contains all the
dependencies needed for developing, building, and running the
software.

The first step is to download and install
[Docker](https://www.docker.com/). After the installation is complete,
continue with the following steps.

On Linux/MacOS, enter the `docker` directory and issue the following
command:

    ./dtcc-pull-image

On Windows, you should instead enter the `docker/Windows` subdirectory
and issue the following command:

    ./dtcc-pull-image.bat

This creates a Docker image named `dtccimage`.

**Note:** For expert users and/or debugging purposes you can create
the image from scratch by issuing `./dtcc-build-image` and
`dtcc-build-image.bat` on Linux/MacOS and Windows respectively.

Then issue the following commands to create and start a persistent
container (virtual machine) in which to run the DTCC Platform:

    ./dtcc-create-container
    ./dtcc-start-container

On Windows, you should instead issue the following commands:

    ./dtcc-create-container.bat
    ./dtcc-start-container.bat

After completing this step, you should now be inside the Docker
container named `dtcc` and ready to go.

For removing the image and containers, you can use

    ./dtcc-uninstall
    ./dtcc-uninstall.bat

in Linux/MacOS and Windows respectively.

**Note:** The source tree is automatically shared into the Docker
  container. It is recommended that you edit the sources, run Git
  commands, and visualize data *outside* of the Docker container (on
  your native operating system), while building and running the code
  *inside* the Docker container.
