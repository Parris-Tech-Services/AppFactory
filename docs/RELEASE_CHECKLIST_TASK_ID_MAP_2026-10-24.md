# AppFactory release checklist — permanent task designations (24 October 2026)

The canonical [release checklist](RELEASE_CHECKLIST.md) remains unaltered because GitHub's source-file write was blocked. The existing ecosystem-wide `TASK-` IDs are assigned below to the exact unchecked source line on 24 October 2026. **These are established IDs, not new IDs.** Do not renumber them if the source later moves. Checkbox state is unchanged.

| Existing task ID | Original checklist line | Checklist task |
|---|---:|---|
| `TASK-00964` | [13](RELEASE_CHECKLIST.md#L13) | All feature PRs are merged to `main` |
| `TASK-00965` | [14](RELEASE_CHECKLIST.md#L14) | `main` branch is clean (no uncommitted changes) |
| `TASK-00966` | [15](RELEASE_CHECKLIST.md#L15) | No failing tests: `npm run test` |
| `TASK-00967` | [16](RELEASE_CHECKLIST.md#L16) | No lint errors: `npm run lint` |
| `TASK-00968` | [17](RELEASE_CHECKLIST.md#L17) | Build succeeds: `npm run build` |
| `TASK-00969` | [18](RELEASE_CHECKLIST.md#L18) | No console errors or warnings |
| `TASK-00970` | [19](RELEASE_CHECKLIST.md#L19) | All code reviews approved |
| `TASK-00971` | [20](RELEASE_CHECKLIST.md#L20) | No merge conflicts |
| `TASK-00972` | [24](RELEASE_CHECKLIST.md#L24) | No secrets in code: `git log --all -p \| grep -i "password\\|secret\\|key\\|token"` |
| `TASK-00973` | [25](RELEASE_CHECKLIST.md#L25) | No API keys in environment |
| `TASK-00974` | [26](RELEASE_CHECKLIST.md#L26) | No hardcoded database credentials |
| `TASK-00975` | [27](RELEASE_CHECKLIST.md#L27) | Dependencies scanned for vulnerabilities: `npm audit` |
| `TASK-00976` | [28](RELEASE_CHECKLIST.md#L28) | All security fixes applied |
| `TASK-00977` | [29](RELEASE_CHECKLIST.md#L29) | `.env` file not committed |
| `TASK-00978` | [30](RELEASE_CHECKLIST.md#L30) | `.env.example` has only fake values |
| `TASK-00979` | [31](RELEASE_CHECKLIST.md#L31) | `.gitignore` protects secrets |
| `TASK-00980` | [35](RELEASE_CHECKLIST.md#L35) | README.md updated |
| `TASK-00981` | [36](RELEASE_CHECKLIST.md#L36) | CHANGELOG.md updated |
| `TASK-00982` | [37](RELEASE_CHECKLIST.md#L37) | API documentation current |
| `TASK-00983` | [38](RELEASE_CHECKLIST.md#L38) | Examples work and are tested |
| `TASK-00984` | [39](RELEASE_CHECKLIST.md#L39) | Any breaking changes documented |
| `TASK-00985` | [40](RELEASE_CHECKLIST.md#L40) | Migration guides provided (if needed) |
| `TASK-00986` | [41](RELEASE_CHECKLIST.md#L41) | Known issues documented |
| `TASK-00987` | [45](RELEASE_CHECKLIST.md#L45) | Unit tests all pass |
| `TASK-00988` | [46](RELEASE_CHECKLIST.md#L46) | Integration tests all pass |
| `TASK-00989` | [47](RELEASE_CHECKLIST.md#L47) | Manual QA checklist complete |
| `TASK-00990` | [48](RELEASE_CHECKLIST.md#L48) | Cross-browser testing done (if web app) |
| `TASK-00991` | [49](RELEASE_CHECKLIST.md#L49) | Mobile testing done (if applicable) |
| `TASK-00992` | [50](RELEASE_CHECKLIST.md#L50) | Accessibility testing done (if applicable) |
| `TASK-00993` | [51](RELEASE_CHECKLIST.md#L51) | Performance testing done |
| `TASK-00994` | [52](RELEASE_CHECKLIST.md#L52) | Edge cases tested |
| `TASK-00995` | [79](RELEASE_CHECKLIST.md#L79) | Version bumped correctly |
| `TASK-00996` | [80](RELEASE_CHECKLIST.md#L80) | git tag created automatically |
| `TASK-00997` | [81](RELEASE_CHECKLIST.md#L81) | CHANGELOG.md has version section |
| `TASK-00998` | [116](RELEASE_CHECKLIST.md#L116) | CHANGELOG.md has new version section |
| `TASK-00999` | [117](RELEASE_CHECKLIST.md#L117) | All features listed |
| `TASK-01000` | [118](RELEASE_CHECKLIST.md#L118) | All bug fixes listed |
| `TASK-01001` | [119](RELEASE_CHECKLIST.md#L119) | All breaking changes listed |
| `TASK-01002` | [120](RELEASE_CHECKLIST.md#L120) | Migration guide included (if needed) |
| `TASK-01003` | [121](RELEASE_CHECKLIST.md#L121) | Known issues documented |
| `TASK-01004` | [153](RELEASE_CHECKLIST.md#L153) | Build completed without errors |
| `TASK-01005` | [154](RELEASE_CHECKLIST.md#L154) | Deployment succeeded |
| `TASK-01006` | [155](RELEASE_CHECKLIST.md#L155) | App is running |
| `TASK-01007` | [156](RELEASE_CHECKLIST.md#L156) | Logs look healthy |
| `TASK-01008` | [157](RELEASE_CHECKLIST.md#L157) | No errors in monitoring |
| `TASK-01009` | [163](RELEASE_CHECKLIST.md#L163) | Homepage loads |
| `TASK-01010` | [164](RELEASE_CHECKLIST.md#L164) | Login works |
| `TASK-01011` | [165](RELEASE_CHECKLIST.md#L165) | Core feature 1 works |
| `TASK-01012` | [166](RELEASE_CHECKLIST.md#L166) | Core feature 2 works |
| `TASK-01013` | [167](RELEASE_CHECKLIST.md#L167) | Logout works |
| `TASK-01014` | [168](RELEASE_CHECKLIST.md#L168) | Profile page loads |
| `TASK-01015` | [169](RELEASE_CHECKLIST.md#L169) | No JavaScript errors in console |
| `TASK-01016` | [170](RELEASE_CHECKLIST.md#L170) | Page load time is acceptable |
| `TASK-01017` | [171](RELEASE_CHECKLIST.md#L171) | Database queries working |
| `TASK-01018` | [172](RELEASE_CHECKLIST.md#L172) | API calls working |
| `TASK-01019` | [173](RELEASE_CHECKLIST.md#L173) | Images load correctly |
| `TASK-01020` | [174](RELEASE_CHECKLIST.md#L174) | Links work |
| `TASK-01021` | [175](RELEASE_CHECKLIST.md#L175) | Forms submit correctly |
| `TASK-01022` | [176](RELEASE_CHECKLIST.md#L176) | Email sends (if applicable) |
| `TASK-01031` | [244](RELEASE_CHECKLIST.md#L244) | Reviewed all changes since last release |
| `TASK-01032` | [245](RELEASE_CHECKLIST.md#L245) | Read CHANGELOG |
| `TASK-01033` | [246](RELEASE_CHECKLIST.md#L246) | Verified staging tests |
| `TASK-01034` | [247](RELEASE_CHECKLIST.md#L247) | Confirmed security audit |
| `TASK-01035` | [248](RELEASE_CHECKLIST.md#L248) | Approved deployment |
| `TASK-01036` | [249](RELEASE_CHECKLIST.md#L249) | Signed off in PR |
| `TASK-01037` | [257](RELEASE_CHECKLIST.md#L257) | Josh approved |
| `TASK-01038` | [258](RELEASE_CHECKLIST.md#L258) | All staging tests passed |
| `TASK-01039` | [259](RELEASE_CHECKLIST.md#L259) | Monitoring systems ready |
| `TASK-01040` | [260](RELEASE_CHECKLIST.md#L260) | Alerting configured |
| `TASK-01041` | [261](RELEASE_CHECKLIST.md#L261) | On-call team notified |
| `TASK-01042` | [262](RELEASE_CHECKLIST.md#L262) | Maintenance window (if needed) scheduled |
| `TASK-01043` | [263](RELEASE_CHECKLIST.md#L263) | Rollback plan documented |
| `TASK-01044` | [264](RELEASE_CHECKLIST.md#L264) | Communication plan ready |
| `TASK-01045` | [315](RELEASE_CHECKLIST.md#L315) | Deployment started at [time] |
| `TASK-01046` | [316](RELEASE_CHECKLIST.md#L316) | Deployment completed successfully |
| `TASK-01047` | [317](RELEASE_CHECKLIST.md#L317) | Health checks passing |
| `TASK-01048` | [318](RELEASE_CHECKLIST.md#L318) | App responding normally |
| `TASK-01049` | [319](RELEASE_CHECKLIST.md#L319) | Logs show no errors |
| `TASK-01050` | [320](RELEASE_CHECKLIST.md#L320) | Monitoring active |
| `TASK-01051` | [321](RELEASE_CHECKLIST.md#L321) | Rollback available if needed |
| `TASK-01052` | [335](RELEASE_CHECKLIST.md#L335) | Uptime: 100% |
| `TASK-01053` | [336](RELEASE_CHECKLIST.md#L336) | Error rate: < 0.1% |
| `TASK-01054` | [337](RELEASE_CHECKLIST.md#L337) | Response time: normal |
| `TASK-01055` | [338](RELEASE_CHECKLIST.md#L338) | CPU usage: normal |
| `TASK-01056` | [339](RELEASE_CHECKLIST.md#L339) | Memory usage: normal |
| `TASK-01057` | [340](RELEASE_CHECKLIST.md#L340) | Database connections: healthy |
| `TASK-01058` | [353](RELEASE_CHECKLIST.md#L353) | Check uptime monitoring |
| `TASK-01059` | [354](RELEASE_CHECKLIST.md#L354) | Check error logs |
| `TASK-01060` | [355](RELEASE_CHECKLIST.md#L355) | Check performance metrics |
| `TASK-01061` | [356](RELEASE_CHECKLIST.md#L356) | Check database health |
| `TASK-01062` | [357](RELEASE_CHECKLIST.md#L357) | Check external integrations |
| `TASK-01063` | [358](RELEASE_CHECKLIST.md#L358) | Monitor user reports |
| `TASK-01064` | [359](RELEASE_CHECKLIST.md#L359) | Be ready to rollback if needed |
| `TASK-01065` | [365](RELEASE_CHECKLIST.md#L365) | No spike in error rate |
| `TASK-01066` | [366](RELEASE_CHECKLIST.md#L366) | No performance degradation |
| `TASK-01067` | [367](RELEASE_CHECKLIST.md#L367) | No unexpected behavior |
| `TASK-01068` | [368](RELEASE_CHECKLIST.md#L368) | Database performing well |
| `TASK-01069` | [369](RELEASE_CHECKLIST.md#L369) | No user complaints |
| `TASK-01070` | [370](RELEASE_CHECKLIST.md#L370) | All features working |
| `TASK-01071` | [371](RELEASE_CHECKLIST.md#L371) | All integrations working |
| `TASK-01072` | [414](RELEASE_CHECKLIST.md#L414) | Previous version identified |
| `TASK-01073` | [415](RELEASE_CHECKLIST.md#L415) | Code checked out |
| `TASK-01074` | [416](RELEASE_CHECKLIST.md#L416) | Built successfully |
| `TASK-01075` | [417](RELEASE_CHECKLIST.md#L417) | Deployed successfully |
| `TASK-01076` | [418](RELEASE_CHECKLIST.md#L418) | Health checks passing |
| `TASK-01077` | [419](RELEASE_CHECKLIST.md#L419) | Users notified |
| `TASK-01078` | [420](RELEASE_CHECKLIST.md#L420) | Root cause identified |
| `TASK-01079` | [456](RELEASE_CHECKLIST.md#L456) | Test case added |
| `TASK-01080` | [457](RELEASE_CHECKLIST.md#L457) | Monitoring alert added |
| `TASK-01081` | [458](RELEASE_CHECKLIST.md#L458) | Docs updated |
| `TASK-01082` | [459](RELEASE_CHECKLIST.md#L459) | Team meeting scheduled |
| `TASK-01083` | [474](RELEASE_CHECKLIST.md#L474) | All code merged and tested |
| `TASK-01084` | [475](RELEASE_CHECKLIST.md#L475) | Version bumped |
| `TASK-01085` | [476](RELEASE_CHECKLIST.md#L476) | CHANGELOG updated |
| `TASK-01086` | [477](RELEASE_CHECKLIST.md#L477) | Staging deployment successful |
| `TASK-01087` | [478](RELEASE_CHECKLIST.md#L478) | Staging tests passed |
| `TASK-01088` | [479](RELEASE_CHECKLIST.md#L479) | Production deployment successful |
| `TASK-01089` | [480](RELEASE_CHECKLIST.md#L480) | Health checks passing |
| `TASK-01090` | [481](RELEASE_CHECKLIST.md#L481) | No errors in logs |
| `TASK-01091` | [482](RELEASE_CHECKLIST.md#L482) | Monitoring stable (30+ min) |
| `TASK-01092` | [483](RELEASE_CHECKLIST.md#L483) | Users notified (if needed) |
| `TASK-01093` | [484](RELEASE_CHECKLIST.md#L484) | Release notes published |
| `TASK-01094` | [485](RELEASE_CHECKLIST.md#L485) | Git tag created |
| `TASK-01095` | [486](RELEASE_CHECKLIST.md#L486) | Documentation updated |
