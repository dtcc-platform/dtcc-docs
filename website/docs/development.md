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