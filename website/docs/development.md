# Development

## Coding style

DTCC Platform uses the coding style native to each language or domain.
This means, e.g., following the
[Style Guide](https://peps.python.org/pep-0008/)
for Python code, the
[C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)
for C++ code, and the
[Google JSON Style Guide](https://google.github.io/styleguide/jsoncstyleguide.xml)
for JSON.

The following table summarizes the naming conventions used for DTCC
Platform.

|          | Python         | C++            | JavaScript    |
|----------|----------------|----------------|---------------|
| variable | `snake_case`   | `snake_case`   | `camelCase`   |
| function | `snake_case()` | `snake_case()` | `camelCase()` |
| class    | `PascalCase`   | `PascalCase`   | `CamelCase`   |
| module   | `snake_case`   |                |               |

In addition to this, DTCC Platform uses `kebab-case` for API endpoints
and `camelCase` for JSON.

## Git practices

DTCC Platform uses the following Git practices:

* The main (release) branch for each repository is named `main`.
* The development branch for each repository is named `develop`.
* All work should take place in separate branches (not directly in `develop` and certainly not in `main`).
* Branches for development (new features) should be named `dev/branch_name` where `branch_name` is a free form descriptive name.
* Branches for fixes (bugs, small things) should be named `fix/branch_name` where `branch_name` is a free form descriptive name.
* When the work is done, make a pull request for merging the branch into `develop`.
* When the work has been merged, the branch should be deleted to keep things tidy.
* When making a release, `develop` is merged into `main` and a release is made from `main`.
