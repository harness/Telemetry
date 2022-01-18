This repo contains code used in the [Harness CD Community Edition](https://github.com/harness/harness-cd-community) which is licensed under the PolyForm Shield License 1.0.0. This repo also contains code belonging to Harness CD Enterprise Plan which is licensed under the PolyForm Free Trial License 1.0.0. You may obtain a copy of these licenses in the [licenses](./licenses/) directory at the root of this repository.

# Harness Telemetry

This package provides an abstraction for front end telemetry frameworks. Currently, this abstracts the Segment package.
This allows consumers to avoid implementing and duplicating their own analytics methods and use a common package. In the future, if Segment is not used in favour of another analytics framework, it will be easy to change the contents of this abstraction rather than asking all consumers to change their code.

## Documentation


## Local Development

1. Install the dependencies

```
$ yarn
```

2. Add the package to your repo

```
yarn add file:./../harness-telemetry // The path to your repo
```

3. Follow the steps in "Using this package"

## Using this package

1. Install the package in your repository

```
$ yarn add @harness/telemetry
```

2. Initialize the Telemetry package at the entry point of your app and save it in a local file.

```
// your_app/src/Telemetry.ts
import Telemetry from '@harness/Telemetry'

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

