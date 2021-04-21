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

## Using this package

1. Install the package in your repository

```
$ yarn add @wings-software/telemetry
```

2. Initialize the Telemetry package at the entry point of your app and save it in a local file.

```
// your_app/src/Telemetry.ts
import Telemetry from '@wings-software/Telemetry'

const telemetry = new Telemetry(YOUR_WRITE_KEY)

export default telemetry;
```

3. (OPTIONAL) Set the accountId.

```
// your_app/src/Telemetry.ts
import telemetry from './Telemetry'

telemetry.accountId = THE_ACCOUNT_ID
```

4. Use the telemetry instance to call analytics methods.

```
import telemetry from './Telemetry'

telemetry.track("signup", { email })
```

## Contributing

1. Submit a PR and bump the version number in package.json
2. Run the [jenkins job](https://jenkinsk8s.harness.io/view/UI/job/telemetry-release/)

The jenkins job will publish a new version to our npm registry.
