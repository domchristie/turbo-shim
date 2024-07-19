# turbo-shim

> [!WARNING]
> Experimental & incomplete

Implements the basic methods required for the [turbo-ios](https://github.com/hotwired/turbo-ios) adapter. The idea is that the Turbo Native adapters could be usable by client-side libraries other than Turbo, such as [htmx](https://github.com/bigskysoftware/htmx). For example, a hypothetical API:

```javascript
import 'htmx.org'
import Turbo from './turbo-shim.js'
import Driver from './turbo-native-htmx-driver.js'

Turbo.registerDriver(Driver)
```

## License
Released under the MIT license.
