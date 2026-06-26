# Changelog

## 12.6.5

- Fix: Preserve Lucene query when switching between metric aggregations [#328](https://github.com/grafana/grafana-elasticsearch-datasource/pull/328)
- Fix: Make `grafanaDependency` prerelease-inclusive in plugin.json [#314](https://github.com/grafana/grafana-elasticsearch-datasource/pull/314)
- Perf: Close idle HTTP connections when the datasource is disposed [#274](https://github.com/grafana/grafana-elasticsearch-datasource/pull/274)
- Chore: Bump grafanaDependency floor to >=12.2.0 [#312](https://github.com/grafana/grafana-elasticsearch-datasource/pull/312)
- Fix(deps): Update module github.com/grafana/grafana-plugin-sdk-go to v0.292.0 [#302](https://github.com/grafana/grafana-elasticsearch-datasource/pull/302)

## 12.6.4

- Fix: Replace Slate-based QueryField with Input to resolve panel-editor crash on Grafana 13.1+ [#310](https://github.com/grafana/grafana-elasticsearch-datasource/pull/310)
- Fix: Correctly render multi-field terms breakdown [#282](https://github.com/grafana/grafana-elasticsearch-datasource/pull/282)
- Chore: Security hardening sweep — dependency, Renovate, and GitHub Actions tightening; clears GO-2026-5026 and GO-2026-4918 [#304](https://github.com/grafana/grafana-elasticsearch-datasource/pull/304)
- Chore: Auto-audit hygiene fixes — Node `>=24` engines, supply-chain-hardened `.npmrc`, plugin scaffolding refresh [#308](https://github.com/grafana/grafana-elasticsearch-datasource/pull/308)
- CI: Bump plugin-ci-workflows to v8.0.1 (GATB token migration) [#292](https://github.com/grafana/grafana-elasticsearch-datasource/pull/292)
- Chore: Run externalised plugin in place of core in docker compose [#275](https://github.com/grafana/grafana-elasticsearch-datasource/pull/275)

## 12.6.3

- Chore: Update Go version to 1.26.3

## 12.6.2

- Chore: Update Go version to 1.26.2

## 12.6.1

- Chore: Update Go version to 1.26.1

## 12.6.0

- Feature: Experimental schema support for SQL querying

## 12.5.5

- Fix: Enable ForwardHTTPHeaders so OAuth identity is forwarded to Elasticsearch [#271](https://github.com/grafana/grafana-elasticsearch-datasource/pull/271)
- Feature: Automatically add a time range filter on ESQL queries when it's not provided [#261](https://github.com/grafana/grafana-elasticsearch-datasource/pull/261)
- Dependency updates:
  - Chore: Update dependency @grafana/data to v13.0.0 [#267](https://github.com/grafana/grafana-elasticsearch-datasource/pull/267) and previous versions
  - Chore: Update dependency @elastic/esql to v1.8.0 [#265](https://github.com/grafana/grafana-elasticsearch-datasource/pull/265) and previous versions
  - Chore: Update dependency @elastic/monaco-esql to v3.3.1 [#264](https://github.com/grafana/grafana-elasticsearch-datasource/pull/264)
  - Chore: Update dependency @swc/core to ^1.15.24 [#277](https://github.com/grafana/grafana-elasticsearch-datasource/pull/277)
  - Chore: Update dependency prettier to ^3.8.2 [#278](https://github.com/grafana/grafana-elasticsearch-datasource/pull/278) and previous versions
  - Chore: Update dependency eslint-webpack-plugin to v6 [#260](https://github.com/grafana/grafana-elasticsearch-datasource/pull/260)
  - Chore: Update dependency sass to v1.99.0 [#259](https://github.com/grafana/grafana-elasticsearch-datasource/pull/259)
  - Chore: Update dependency @playwright/test to ^1.59.1 [#257](https://github.com/grafana/grafana-elasticsearch-datasource/pull/257)
  - Fix(deps): Update module github.com/grafana/grafana-plugin-sdk-go to v0.291.1 [#262](https://github.com/grafana/grafana-elasticsearch-datasource/pull/262)
  - Fix(deps): Update module github.com/magefile/mage to v1.17.1 [#242](https://github.com/grafana/grafana-elasticsearch-datasource/pull/242)
  - Chore: Update module go.opentelemetry.io/otel/sdk to v1.43.0 [security] [#255](https://github.com/grafana/grafana-elasticsearch-datasource/pull/255)

## 12.5.4

- Build: Override plugin sdk's BuildAll to enable extra platforms [#245](https://github.com/grafana/grafana-elasticsearch-datasource/pull/245)
- Chore: Disable splashscreen to fix e2e tests [#246](https://github.com/grafana/grafana-elasticsearch-datasource/pull/246)
- Dependency updates:
  - Chore: Update dependency @grafana/data to v13.0.0-24126890812 [#250](https://github.com/grafana/grafana-elasticsearch-datasource/pull/250) and previous versions
  - Chore: Update dependency @elastic/esql to v1.7.0 [#230](https://github.com/grafana/grafana-elasticsearch-datasource/pull/230)
  - Chore: Update swc monorepo [#249](https://github.com/grafana/grafana-elasticsearch-datasource/pull/249)
  - Fix(deps): Update module github.com/magefile/mage to v1.17.0 [#237](https://github.com/grafana/grafana-elasticsearch-datasource/pull/237)

## 12.5.3

- Chore: Add linux/s390x and windows/arm64 targets to build [#220](https://github.com/grafana/grafana-elasticsearch-datasource/pull/220)
- Dependency updates:
  - Fix(deps): Update module github.com/grafana/grafana-plugin-sdk-go to v0.291.0 [#222](https://github.com/grafana/grafana-elasticsearch-datasource/pull/222)
  - Chore: Update dependency @grafana/data to v13.0.0-23914290240 [#233](https://github.com/grafana/grafana-elasticsearch-datasource/pull/233) and previous versions

## 12.5.2

- Feature: Add support for runtime fields [#189](https://github.com/grafana/grafana-elasticsearch-datasource/pull/189)
- Docs: Add README and CONTRIBUTING guide [#212](https://github.com/grafana/grafana-elasticsearch-datasource/pull/212)
- Dependency updates:
  - Chore: Update dependency @grafana/data to v13.0.0-23796392586 [#211](https://github.com/grafana/grafana-elasticsearch-datasource/pull/211) and previous versions
  - Chore: Update grafana monorepo [#173](https://github.com/grafana/grafana-elasticsearch-datasource/pull/173)
  - Chore: Update dependency @elastic/esql to v1.6.0 [#179](https://github.com/grafana/grafana-elasticsearch-datasource/pull/179)
  - Chore: Update dependency @swc/core to ^1.15.18 [#172](https://github.com/grafana/grafana-elasticsearch-datasource/pull/172)
  - Chore: Update dependency @swc/helpers to ^0.5.19 [#199](https://github.com/grafana/grafana-elasticsearch-datasource/pull/199)
  - Chore: Update npm to v11.12.1 [#200](https://github.com/grafana/grafana-elasticsearch-datasource/pull/200)

## 12.5.1

- Fix: Correctly support legacy template variables [#162](https://github.com/grafana/grafana-elasticsearch-datasource/pull/162)
- Fix: Raw query editor orderBy bug [#161](https://github.com/grafana/grafana-elasticsearch-datasource/pull/161)

## 12.5.0

- Feature: Add support for ES|QL queries [#124](https://github.com/grafana/grafana-elasticsearch-datasource/pull/124)
- Fix: Explicitly forward Content-Type header to upstream requests [#133](https://github.com/grafana/grafana-elasticsearch-datasource/pull/133)

## 12.4.3

- Fix: Add missing AWS authentication middleware
- Chore: Copy query editor options box from core [#104](https://github.com/grafana/grafana-elasticsearch-datasource/pull/104)
- Chore: Copy variable query editor support from core [#100](https://github.com/grafana/grafana-elasticsearch-datasource/pull/100)

## 12.4.2

- Initial release of the Elasticsearch data source as an external data source.
