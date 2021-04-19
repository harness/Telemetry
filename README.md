# Harness Telemetry

This package provides an abstraction for front end telemetry frameworks. Currently, this abstracts the Segment package.
This allows consumers to avoid implementing and duplicating their own analytics methods and use a common package. In the future, if Segment is not used in favour of another analytics framework, it will be easy to change the contents of this abstraction rather than asking all consumers to change their code.

## Documentation

[Design](https://harness.atlassian.net/wiki/spaces/GTM/pages/1484652596/Telemetry+Framework+Frontend)

## Getting Started

1. Install the dependencies

```
$ yarn
```

## Contributing

1. Submit a PR and bump the version number in package.json
2. Run the [jenkins job](https://jenkinsk8s.harness.io/view/UI/job/telemetry-release/)

The jenkins job will publish a new version to our npm registry.
